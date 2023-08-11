import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { IRect } from "konva/lib/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { Group, Layer, Path, Stage } from "react-konva";

import { Result } from "types/seatmap";
import { extractWHFromViewBox } from "utils";
import { handleChainActions, handleOnWheel } from "./helpers";
import { SeatmapWrapper } from "./style";

type SeatmapProps = {
  data: Result;
  loading: boolean;
  w: number;
  h: number;
  isWheelable: boolean;
  isDraggable: boolean;
  hasTools: boolean;
  mode: number;
};

const SeatMap = ({
  data = undefined,
  w = 0,
  h = 0,
  isWheelable = false,
  isDraggable = false,
  hasTools = false,
}: Partial<SeatmapProps>) => {
  // states
  const [groupDimensions, setGroupDimensions] = useState<Partial<IRect>>({});
  const [stageCenter, setStageCenter] = useState<Partial<IRect>>({});
  const [groupCenter, setGroupCenter] = useState<Partial<IRect>>({});
  const [isResetDone, setResetDone] = useState<boolean>(false);
  const [resetValuesTracker, setResetValuesTracker] = useState<
    Record<string, Partial<IRect>>
  >({});

  // refs
  const stageRef = useRef<Konva.Stage>(null);
  const layerRef = useRef<Konva.Layer>(null);
  const groupRef = useRef<Konva.Group>(null);
  const tfmRef = useRef<Konva.Transformer>(null);
  const sectionGroupRefs = useRef<(Konva.Path | Konva.Rect)[]>([]);

  // methods
  const handleBackToInitState = useCallback(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const group = groupRef.current;
    if (layer && group) {
      if (stage) {
        const scaleX = stage.width() / group.width();
        const scaleY = stage.height() / group.height();
        const scale = Math.min(scaleX, scaleY);
        layer.scale({ x: scale, y: scale });

        const stageCenterX = stage.width() / 2;
        const stageCenterY = stage.height() / 2;
        const groupCenterX = (group.width() * scale) / 2;
        const groupCenterY = (group.height() * scale) / 2;
        const offsetX = stageCenterX - groupCenterX;
        const offsetY = stageCenterY - groupCenterY;
        layer.to({
          x: offsetX,
          y: offsetY,
          duration: 0.1,
        });
        setResetValuesTracker({
          scale: { x: scale, y: scale },
          position: {
            x: offsetX,
            y: offsetY,
          },
        });
      }
    }
  }, []);
  const handleReset = useCallback(() => {
    handleChainActions(
      [
        // () => console.log("Reset clicked"),
        () => setResetDone(false),
        handleBackToInitState,
        () => setResetDone(true),
      ],
      150
    );
  }, [handleBackToInitState]);
  const onWheelStage = (e: KonvaEventObject<WheelEvent>) =>
    isWheelable ? handleOnWheel(e, stageRef, layerRef) : null;
  const onClickStage = (e: KonvaEventObject<MouseEvent>) => {
    if (e.target === stageRef.current) tfmRef?.current?.nodes([]);
  };
  const checkIfNeedReset = useCallback(() => {
    const layer = layerRef.current;
    if (layer) {
      if (resetValuesTracker && Object.keys(resetValuesTracker).length) {
        const currentScale = layer.scale();
        const currentPosition = layer.position();
        const isScaleDiff =
          currentScale?.x !== resetValuesTracker.scale.x &&
          currentScale?.y !== resetValuesTracker.scale.y;
        const isPosDiff =
          currentPosition.x !== resetValuesTracker.position.x &&
          currentPosition.y !== resetValuesTracker.position.y;
        return isScaleDiff || isPosDiff;
      }
    }
  }, [resetValuesTracker]);

  // effects
  useEffect(() => {
    if (data && data.viewbox) {
      const stage = stageRef.current;
      if (stage) {
        const stageCenter = stage.getAbsolutePosition() as IRect;
        const centerX = stageCenter.x + stage.width() / 2;
        const centerY = stageCenter.y + stage.height() / 2;
        setStageCenter({ x: centerX, y: centerY });
        setGroupDimensions(extractWHFromViewBox(data?.viewbox as string));
      }
    }
  }, [data]);
  useEffect(() => {
    if (groupDimensions && Object.keys(groupDimensions).length) {
      const group = groupRef.current;
      if (group) {
        const groupCenter = group.getAbsolutePosition() as IRect;
        const centerX = groupCenter.x + group.width() / 2;
        const centerY = groupCenter.y + group.height() / 2;
        setGroupCenter({ x: centerX, y: centerY });
      }
    }
  }, [groupDimensions]);
  useEffect(() => {
    const hasStageCenter = stageCenter && Object.keys(stageCenter).length;
    const hasGroupCenter = groupCenter && Object.keys(groupCenter).length;
    if (hasStageCenter && hasGroupCenter) handleReset();
  }, [stageCenter, groupCenter, handleReset]);

  return (
    <SeatmapWrapper>
      <div id="stage-container">
        <Stage
          id="seatmap-stage"
          width={w}
          height={h}
          ref={stageRef}
          onWheel={onWheelStage}
          onClick={onClickStage}
        >
          <Layer id="seatmap-layer" ref={layerRef} draggable={isDraggable}>
            <Group
              ref={groupRef}
              width={groupDimensions.width}
              height={groupDimensions.height}
            >
              {data?.sections?.map((section) => {
                return section?.elements?.map(({ data, fill }, idx) => {
                  const commonProps = {
                    opacity: isResetDone ? 1 : 0,
                  };
                  return (
                    <Path
                      key={`section-path-${idx}-${data}`}
                      ref={(node) => {
                        if (node) sectionGroupRefs.current[idx] = node;
                      }}
                      {...commonProps}
                      {...{ data, fill: fill || "#000" }}
                    />
                  );
                });
              })}
            </Group>
          </Layer>
        </Stage>
      </div>
    </SeatmapWrapper>
  );
};

export default SeatMap;
