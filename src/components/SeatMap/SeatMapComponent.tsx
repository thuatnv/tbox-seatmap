import React from "react";
import { Group, Layer, Path, Stage } from "react-konva";
import { v4 as uuidv4 } from "uuid";

import { Group as GroupType } from "konva/lib/Group";
import { Layer as LayerType } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage as StageType } from "konva/lib/Stage";
import { IRect } from "konva/lib/types";
import { Result, Section } from "types/seatmap";

import { ReactComponent as MinusIcon } from "resources/svg/icon-minus-green.svg";
import { ReactComponent as PlusIcon } from "resources/svg/icon-plus-green.svg";
import { ReactComponent as ResetIcon } from "resources/svg/icon-reset-green.svg";

import Button from "components/Button";
import { extractWHFromViewBox } from "utils";
import { maxScale, minScale, scaleBy } from "./constants";
import { handleChainActions, handleOnWheel } from "./helpers";
import { SeatmapWrapper } from "./style";

type SeatmapProps = {
  data: Result;
  w: number;
  h: number;
  isWheelable: boolean;
  isDraggable: boolean;
  isMinimap: boolean;
  hasTools: boolean;
  chosenSectionId: number;
};

const SeatMapComponent: React.FC<Partial<SeatmapProps>> = ({
  data = undefined,
  w = 0,
  h = 0,
  isWheelable = false,
  isDraggable = false,
  isMinimap = false,
  hasTools = false,
  chosenSectionId = 0,
}) => {
  console.log(data, isMinimap);
  // states
  const [groupDimensions, setGroupDimensions] = React.useState<any>({});
  const [stageCenter, setStageCenter] = React.useState({});
  const [groupCenter, setGroupCenter] = React.useState({});
  const [isResetDone, setResetDone] = React.useState(false);
  const [resetValuesTracker, setResetValuesTracker] = React.useState<any>({});
  const [shouldReset, setShouldReset] = React.useState(false);
  const [scale, setScale] = React.useState(0);

  // refs
  const stageRef = React.useRef<StageType>(null);
  const layerRef = React.useRef<LayerType>(null);
  const groupRef = React.useRef<GroupType>(null);

  // methods
  const handleBackToInitState = React.useCallback(() => {
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
  const handleReset = React.useCallback(() => {
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

  const checkIfNeedReset = React.useCallback(() => {
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

  const handleZoom =React.useCallback(
    (type: "out" | "in") => {
      const newScale = Math.abs(scale + scaleBy * (type === "out" ? -1 : 1));
      if (newScale >= minScale && newScale <= maxScale) {
        handleChainActions([
          () => setScale(scale + scaleBy * (type === "out" ? -1 : 1)),
          checkIfNeedReset,
        ]);
      }
    },
    [scale, checkIfNeedReset]
  );
  // TODO: handleOnSectionClicked

  // event handlers
  const onWheelStage = (e: KonvaEventObject<WheelEvent>) => {
    if (!isWheelable) return;
    handleOnWheel(e, stageRef, layerRef);
    handleChainActions([
      () => handleOnWheel(e, stageRef, layerRef),
      () => setScale(layerRef?.current?.scaleX() as number),
    ]);
  };
  const onSectionMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    if (isMinimap) return;
    const container: any = e.target?.getStage()?.container();
    if (container) container.style.cursor = "pointer";
  };
  const onSectionMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    if (isMinimap) return;
    const container: any = e.target?.getStage()?.container();
    if (container) container.style.cursor = "";
  };
  const onSectionClick = (section: Section) => {
    if (isMinimap) return;
    const { id, name } = section;
    console.log({ id, name });
  };

  // effects
  React.useEffect(() => {
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
  React.useEffect(() => {
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
  React.useEffect(() => {
    const hasStageCenter = stageCenter && Object.keys(stageCenter).length;
    const hasGroupCenter = groupCenter && Object.keys(groupCenter).length;
    if (hasStageCenter && hasGroupCenter) handleReset();
  }, [stageCenter, groupCenter, handleReset]);
  React.useEffect(() => {
    console.log({ chosenSectionId });
  }, [chosenSectionId]);

  return (
    <SeatmapWrapper>
      <div id="stage-container">
        {/* BUTTONS */}
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

        {/* MAIN STAGE */}
        <Stage
          id="seatmap-stage"
          width={w}
          height={h}
          ref={stageRef}
          onWheel={(e) => {
            onWheelStage(e);
            checkIfNeedReset();
          }}
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
                const { isStage, elements } = section;
                return elements?.map(({ data, fill, display }) => {
                  if (isMinimap && display) return <></>;
                  const sectionEventsProps = {
                    onMouseEnter: onSectionMouseEnter,
                    onMouseLeave: onSectionMouseLeave,
                    onClick: () => onSectionClick(section),
                  };
                  return isStage ? (
                    <Path
                      key={`${uuidv4()}`}
                      {...{
                        opacity: isResetDone ? 1 : 0,
                        fill: fill || "#000",
                        data,
                      }}
                    />
                  ) : (
                    <Path
                      key={`${uuidv4()}`}
                      {...{
                        opacity: isResetDone ? 1 : 0,
                        fill: isMinimap
                          ? chosenSectionId === section.id
                            ? fill
                            : "#d3d3d3"
                          : fill || "#000",
                        data,
                      }}
                      {...sectionEventsProps}
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

export default SeatMapComponent;
