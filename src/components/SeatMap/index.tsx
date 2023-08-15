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
import { ClickedSeatsData, Result as SectionResult } from "types/section";
/* icons */
import { ReactComponent as MinusIcon } from "resources/svg/icon-minus-green.svg";
import { ReactComponent as PlusIcon } from "resources/svg/icon-plus-green.svg";
import { ReactComponent as ResetIcon } from "resources/svg/icon-reset-green.svg";
/* manual: components */
import Button from "components/Button";
import Seat from "components/Seat";
/* manual: others */
import { extractWHFromViewBox } from "utils";
import { maxScale, minScale, scaleBy } from "./constants";
import { handleChainActions, handleOnWheel, handleResetRefs } from "./helpers";
import { SeatmapWrapper } from "./style";

/* component types */
type SeatmapProps = {
  w: number;
  h: number;
  data: Result;
  isWheelable: boolean;
  isDraggable: boolean;
  isMinimap: boolean;
  hasTools: boolean;
  chosenSectionId: number;
  chosenSectionData: SectionResult;
  onSectionClick: (arg0: Section) => void;
  getSeatsData: (arg0: ClickedSeatsData) => void;
};
type ResetTrackings = Record<string, Partial<IRect>>;

let selectedSeats: ClickedSeatsData = {};

const SeatMap: React.FC<Partial<SeatmapProps>> = ({
  w = 0,
  h = 0,
  data = undefined,
  isWheelable = false,
  isDraggable = false,
  isMinimap = false,
  hasTools = false,
  chosenSectionId = 0,
  chosenSectionData = undefined,
  onSectionClick = () => {},
  getSeatsData = () => {},
}) => {
  // states
  const [groupDimensions, setGroupDimensions] = useState<Partial<IRect>>({});
  const [stageCenter, setStageCenter] = useState<Partial<IRect>>({});
  const [groupCenter, setGroupCenter] = useState<Partial<IRect>>({});
  const [isResetDone, setResetDone] = useState<boolean>(false);
  const [resetTrackings, setResetTrackings] = useState<ResetTrackings>({});
  const [shouldReset, setShouldReset] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);

  // refs
  const stageRef = useRef<StageType>(null);
  const layerRef = useRef<LayerType>(null);
  const groupRef = useRef<GroupType>(null);
  const chosenGroupRef = useRef<GroupType>(null);

  // methods
  const handleInitChosenSection = useCallback(() => {
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
  const handleSeatClickData = ({
    seatId,
    data,
  }: {
    seatId: number;
    data: Record<string, string | number | boolean>;
  }) => {
    if (!selectedSeats[seatId])
      selectedSeats = { ...selectedSeats, [seatId]: data };
    else {
      const selectedSeatsCopy = { ...selectedSeats };
      delete selectedSeatsCopy[seatId];
      selectedSeats = { ...selectedSeatsCopy };
    }
  };

  // event handlers
  const onStageWheel = (e: KonvaEventObject<WheelEvent>) => {
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
    if (isResetDone && chosenSectionId !== 0) handleInitChosenSection();
  }, [chosenSectionId, handleInitChosenSection, isResetDone]);
  useEffect(() => {
    if (chosenSectionId !== 0) selectedSeats = {};
  }, [chosenSectionId]);

  // render
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
            onStageWheel(e);
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
                const {
                  isStage,
                  elements,
                  attribute,
                  id: sectionId,
                  isReservingSeat: sectionIsReserveSeat,
                  seatMapId: sectionSeatMapId,
                } = section;
                const hideSection =
                  !isMinimap &&
                  chosenSectionId !== 0 &&
                  sectionId !== chosenSectionId;
                if (hideSection) return <></>;

                return (
                  <Group
                    key={sectionId}
                    ref={sectionId === chosenSectionId ? chosenGroupRef : null}
                    width={attribute?.width}
                    height={attribute?.height}
                  >
                    {/* SECTION ELEMENTS: BACKGROUND PATHS, ROW NAMES, ZONE NAMES{" "} */}
                    {elements?.map(({ data, fill, display }, idx) => {
                      const hideCondition1 =
                        isMinimap && idx > 0 && chosenSectionId !== 0;
                      const hideCondition2 =
                        chosenSectionId !== 0
                          ? idx > 0 && display === 1
                          : idx > 0 && display === 2;
                      if (!isStage && (hideCondition1 || hideCondition2))
                        return <></>;

                      const sectionEventsProps = {
                        onMouseEnter: onSectionMouseEnter,
                        onMouseLeave: onSectionMouseLeave,
                        onClick: () => onSectionClick(section),
                      };

                      return isStage ? (
                        <Path
                          key={`${uuidv4()}`}
                          visible={isResetDone}
                          {...{
                            fill: fill || "#000",
                            data,
                          }}
                        />
                      ) : (
                        <Path
                          key={`${uuidv4()}`}
                          visible={isResetDone}
                          {...{
                            fill: isMinimap
                              ? chosenSectionId === sectionId
                                ? fill
                                : "#d3d3d3"
                              : fill || "#fff",
                            data,
                          }}
                          {...(chosenSectionId === 0 ? sectionEventsProps : {})}
                        />
                      );
                    })}

                    {/* SECTION SEATS */}
                    {chosenSectionData?.rows?.map((row) => {
                      const {
                        id: rowId,
                        name: rowName,
                        status: rowStatus,
                      } = row;

                      return row?.seats?.map((seat) => {
                        const {
                          x,
                          y,
                          status,
                          id: seatId,
                          name: seatName,
                          position: seatPosition,
                        } = seat;
                        return (
                          <Seat
                            key={`seat-${uuidv4()}`}
                            id={`seatId-${seatId}`}
                            name={`seatName-${seatName}`}
                            x={x}
                            y={y}
                            visible={isResetDone}
                            initStatus={status}
                            onClick={() => {
                              const seatDataPack = {
                                sectionId,
                                sectionIsReserveSeat,
                                sectionSeatMapId,
                                rowId,
                                rowName,
                                rowStatus,
                                seatName,
                                seatPosition,
                              };
                              handleChainActions([
                                () =>
                                  handleSeatClickData({
                                    seatId,
                                    data: seatDataPack,
                                  }),
                                () => getSeatsData(selectedSeats),
                              ]);
                            }}
                          />
                        );
                      });
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
