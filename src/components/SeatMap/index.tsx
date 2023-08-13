import { useCallback, useEffect, useRef, useState } from "react";
import { Group, Layer, Path, Stage, Transformer } from "react-konva";

import { Group as GroupType } from "konva/lib/Group";
import { Layer as LayerType } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage as StageType } from "konva/lib/Stage";
import { Path as PathType } from "konva/lib/shapes/Path";
import { Rect as RectType } from "konva/lib/shapes/Rect";
import { Transformer as TransformerType } from "konva/lib/shapes/Transformer";
import { IRect } from "konva/lib/types";
import { Result } from "types/seatmap";

import { ReactComponent as MinusIcon } from "resources/svg/icon-minus-green.svg";
import { ReactComponent as PlusIcon } from "resources/svg/icon-plus-green.svg";
import { ReactComponent as ResetIcon } from "resources/svg/icon-reset-green.svg";

import Button from "components/Button";
import { extractWHFromViewBox } from "utils";
import { scaleBy } from "./constants";
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

const SeatMap: React.FC<Partial<SeatmapProps>> = ({
  data = undefined,
  w = 0,
  h = 0,
  isWheelable = false,
  isDraggable = false,
  hasTools = false,
}) => {
  // states
  const [groupDimensions, setGroupDimensions] = useState<Partial<IRect>>({});
  const [stageCenter, setStageCenter] = useState<Partial<IRect>>({});
  const [groupCenter, setGroupCenter] = useState<Partial<IRect>>({});
  const [isResetDone, setResetDone] = useState<boolean>(false);
  const [resetValuesTracker, setResetValuesTracker] = useState<
    Record<string, Partial<IRect>>
  >({});
  const [shouldReset, setShouldReset] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);

  // refs
  const stageRef = useRef<StageType>(null);
  const layerRef = useRef<LayerType>(null);
  const groupRef = useRef<GroupType>(null);
  const tfmRef = useRef<TransformerType>(null);
  const sectionGroupRefs = useRef<(PathType | RectType)[]>([]);

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
        setScale(scale);

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
        setShouldReset(false);
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
  const checkIfNeedReset = useCallback(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const group = groupRef.current;

    if (stage && layer && group) {
      const currentScale = layer.scaleX();
      const currentX = layer.x();
      const currentY = layer.y();

      if (resetValuesTracker && Object.keys(resetValuesTracker).length) {
        const resetScale = resetValuesTracker.scale.x as number;
        const resetX = resetValuesTracker.position.x as number;
        const resetY = resetValuesTracker.position.y as number;
        const isScaleReset = Math.abs(currentScale - resetScale) > 0.001;
        const isPositionReset =
          Math.abs(currentX - resetX) > 0.001 ||
          Math.abs(currentY - resetY) > 0.001;
        setShouldReset(isScaleReset || isPositionReset);
      }
    }
  }, [resetValuesTracker]);
  const handleZoom = useCallback(
    (type: "out" | "in") => {
      handleChainActions([
        () => setScale(scale + scaleBy * (type === "out" ? -1 : 1)),
        checkIfNeedReset,
      ]);
    },
    [scale, checkIfNeedReset]
  );
  // TODO: handleOnSectionClicked

  // event handlers
  const onWheelStage = (e: KonvaEventObject<WheelEvent>) =>
    isWheelable ? handleOnWheel(e, stageRef, layerRef) : null;
  const onClickStage = (e: KonvaEventObject<MouseEvent>) => {
    if (e.target === stageRef.current) tfmRef?.current?.nodes([]);
  };
  const onMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "pointer";
  };
  const onMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "";
  };

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
        {hasTools && (
          <div id="btns-container">
            <Button onClick={() => handleZoom("in")}>
              <PlusIcon />
            </Button>
            <Button disabled={!shouldReset} onClick={handleReset}>
              <ResetIcon />
            </Button>
            <Button onClick={() => handleZoom("out")}>
              <MinusIcon />
            </Button>
          </div>
        )}
        <Stage
          id="seatmap-stage"
          width={w}
          height={h}
          ref={stageRef}
          onWheel={(e) => {
            onWheelStage(e);
            checkIfNeedReset();
          }}
          onClick={onClickStage}
        >
          <Layer
            id="seatmap-layer"
            ref={layerRef}
            scale={{ x: scale, y: scale }} // Add this line
            draggable={isDraggable}
            onDragEnd={() => {
              checkIfNeedReset();
            }}
          >
            <Group
              ref={groupRef}
              width={groupDimensions?.width}
              height={groupDimensions?.height}
            >
              {data?.sections?.map((section) => {
                return section?.elements?.map(({ data, fill }, idx) => {
                  const commonProps = {
                    opacity: isResetDone ? 1 : 0,
                    onMouseEnter: section?.isStage ? () => {} : onMouseEnter,
                    onMouseLeave: section?.isStage ? () => {} : onMouseLeave,
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
              <Transformer ref={tfmRef} />
            </Group>
          </Layer>
        </Stage>
      </div>
    </SeatmapWrapper>
  );
};

export default SeatMap;
