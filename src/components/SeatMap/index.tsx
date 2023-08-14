/* libraries */
import { useCallback, useEffect, useRef, useState } from "react";
import { Group, Layer, Path, Stage } from "react-konva";
import { v4 as uuidv4 } from "uuid";
/* types */
import { Group as GroupType } from "konva/lib/Group";
import { Layer as LayerType } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage as StageType } from "konva/lib/Stage";
import { IRect } from "konva/lib/types";
import { Result, Section } from "types/seatmap";
/* icons */
import { ReactComponent as MinusIcon } from "resources/svg/icon-minus-green.svg";
import { ReactComponent as PlusIcon } from "resources/svg/icon-plus-green.svg";
import { ReactComponent as ResetIcon } from "resources/svg/icon-reset-green.svg";
/* manual */
import Button from "components/Button";
import { extractWHFromViewBox } from "utils";
import { maxScale, minScale, scaleBy } from "./constants";
import { handleChainActions, handleOnWheel, handleResetRefs } from "./helpers";
import { SeatmapWrapper } from "./style";

type SeatmapProps = {
  w: number;
  h: number;
  data: Result;
  isWheelable: boolean;
  isDraggable: boolean;
  isMinimap: boolean;
  hasTools: boolean;
  chosenSectionId: number;
};

type ResetTrackingState = Record<string, Partial<IRect>>;

const SeatMap: React.FC<Partial<SeatmapProps>> = ({
  w = 0,
  h = 0,
  data = undefined,
  isWheelable = false,
  isDraggable = false,
  isMinimap = false,
  hasTools = false,
  chosenSectionId = 0,
}) => {
  // states
  const [groupDimensions, setGroupDimensions] = useState<Partial<IRect>>({});
  const [stageCenter, setStageCenter] = useState<Partial<IRect>>({});
  const [groupCenter, setGroupCenter] = useState<Partial<IRect>>({});
  const [isResetDone, setResetDone] = useState<boolean>(false);
  const [resetTrackings, setResetTrackings] = useState<ResetTrackingState>({});
  const [shouldReset, setShouldReset] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);

  // refs
  const stageRef = useRef<StageType>(null);
  const layerRef = useRef<LayerType>(null);
  const groupRef = useRef<GroupType>(null);
  const chosenGroupRef = useRef<GroupType>(null);

  // methods
  const handleCenterChosenSection = useCallback(() => {
    if (isMinimap) return;
    const stage = stageRef.current;
    const layer = layerRef.current;
    const chosenGroup = chosenGroupRef.current;

    if (stage && layer && chosenGroup) {
      const scaleX = Math.abs(stage.width() / chosenGroup.width());
      const scaleY = Math.abs(stage.height() / chosenGroup.height());
      const scale = Math.min(scaleX, scaleY);
      layer.scale({
        x: scale,
        y: scale,
      });
      setScale(scale);

      const boundingBox = chosenGroup.getClientRect();
      const centerX = boundingBox.x + boundingBox.width / 2;
      const centerY = boundingBox.y + boundingBox.height / 2;
      if (stageCenter && Object.keys(stageCenter).length) {
        const offsetX = (stageCenter.x as number) - centerX;
        const offsetY = (stageCenter.y as number) - centerY;
        const isDiffFromCenter = offsetX || offsetY;
        if (isDiffFromCenter) {
          stage.position({
            x: offsetX,
            y: offsetY,
          });
        }
      }
    }
  }, [isMinimap, stageCenter]);
  const handleBackToInitState = useCallback(() => {
    const stage = stageRef.current;
    const layer = layerRef.current;
    const group = groupRef.current;

    if (stage && layer && group) {
      handleResetRefs(stageRef);

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
      setResetTrackings({
        scale: { x: scale, y: scale },
        position: {
          x: offsetX,
          y: offsetY,
        },
      });
      setShouldReset(false);
    }
  }, []);
  const handleReset = useCallback(() => {
    handleChainActions(
      [
        () => setResetDone(false),
        handleBackToInitState,
        () => setResetDone(true),
      ],
      300
    );
  }, [handleBackToInitState]);
  const checkIfNeedReset = useCallback(() => {
    const stage = stageRef.current;
    if (stage) {
      const currentScale = stage.scaleX();
      const currentX = stage.x();
      const currentY = stage.y();

      if (resetTrackings && Object.keys(resetTrackings).length) {
        const resetScale = resetTrackings.scale.x as number;
        const resetX = resetTrackings.position.x as number;
        const resetY = resetTrackings.position.y as number;
        const isScaleReset = Math.abs(currentScale - resetScale) > 0.001;
        const isPositionReset =
          Math.abs(currentX - resetX) > 0.001 ||
          Math.abs(currentY - resetY) > 0.001;
        setShouldReset(isScaleReset || isPositionReset);
      }
    }
  }, [resetTrackings]);
  const handleZoom = useCallback(
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

  // event handlers
  const onWheelStage = (e: KonvaEventObject<WheelEvent>) => {
    if (!isWheelable) return;
    handleChainActions([
      () => handleOnWheel(e, stageRef),
      () => setScale(layerRef?.current?.scaleX() as number),
    ]);
  };
  const onSectionMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    if (isMinimap) return;
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "pointer";
  };
  const onSectionMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    if (isMinimap) return;
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "";
  };
  const onSectionClick = (section: Section) => {
    if (isMinimap) return;
    console.log({ section });
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
  useEffect(() => {
    if (isResetDone && chosenSectionId !== 0) handleCenterChosenSection();
  }, [chosenSectionId, handleCenterChosenSection, isResetDone]);

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
          draggable={isDraggable}
          onWheel={(e) => {
            if (!isResetDone) return;
            onWheelStage(e);
            checkIfNeedReset();
          }}
          onDragEnd={() => {
            checkIfNeedReset();
          }}
        >
          <Layer
            id="seatmap-layer"
            ref={layerRef}
            scale={{ x: scale, y: scale }}
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
                const { isStage, elements, id, attribute } = section;
                const hideSection =
                  !isMinimap && chosenSectionId !== 0 && id !== chosenSectionId;

                if (hideSection) return <></>;
                return (
                  <Group
                    key={id}
                    ref={id === chosenSectionId ? chosenGroupRef : null}
                    width={attribute?.width}
                    height={attribute?.height}
                  >
                    {elements?.map(({ data, fill, display }, idx) => {
                      const hidePath =
                        (isMinimap && display === 1) ||
                        (!isMinimap && idx > 0 && chosenSectionId !== 0);
                      if (hidePath) return <></>;

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
                              : fill || "#fff",
                            data,
                          }}
                          {...(chosenSectionId === 0 ? sectionEventsProps : {})}
                        />
                      );
                    })}
                  </Group>
                );
              })}
            </Group>
          </Layer>
        </Stage>
      </div>
    </SeatmapWrapper>
  );
};

export default SeatMap;
