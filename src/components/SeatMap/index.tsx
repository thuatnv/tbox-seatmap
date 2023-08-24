/* libraries */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Group, Layer, Path, Stage } from "react-konva";
import { v4 as uuidv4 } from "uuid";
/* types */
import { Group as GroupType } from "konva/lib/Group";
import { Layer as LayerType } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage as StageType } from "konva/lib/Stage";
import { IRect } from "konva/lib/types";
import {
  Point,
  PostMessageData,
  ResetTrackings,
  SeatmapProps,
} from "types/seatmap-component";
/* icons */
import { ReactComponent as MinusIcon } from "resources/svg/icon-minus-green.svg";
import { ReactComponent as PlusIcon } from "resources/svg/icon-plus-green.svg";
import { ReactComponent as ResetIcon } from "resources/svg/icon-reset-green.svg";
/* manual: components */
import Button from "components/Button";
import Seat from "components/Seat";
/* manual: others */
import { extractWHFromViewBox } from "utils";
import { ERRORS, maxScale, minScale, scaleBy } from "./constants";
import {
  getCenter,
  getDistance,
  handleChainActions,
  handleOnWheel,
  handleResetRefs,
} from "./helpers";
import { SeatmapWrapper } from "./style";

let lastCenter: Point | null = null;
let lastDist = 0;

const SeatMap: React.FC<SeatmapProps> = ({
  w = 0,
  h = 0,
  data = undefined,
  isMinimap = false,
  isWheelable = false,
  isDraggable = false,
  hasTools = false,
  hasSeatNumbers = true,
  chosenSectionId = 0,
  chosenSectionData = undefined,
  serviceLocation = "",

  onSectionClick = () => {},
  onPostMessage = () => {},
  onError = () => {},

  onSelectSeat = undefined,
  onDeselectSeat = undefined,
  selectedSeatsIds = undefined,

  customClasses = {},
}) => {
  // states
  const [groupDimensions, setGroupDimensions] = useState<Partial<IRect>>({});
  const [stageCenter, setStageCenter] = useState<Partial<IRect>>({});
  const [groupCenter, setGroupCenter] = useState<Partial<IRect>>({});
  const [isResetDone, setResetDone] = useState<boolean>(false);
  const [resetTrackings, setResetTrackings] = useState<ResetTrackings>({});
  const [shouldReset, setShouldReset] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(0);
  const [isInitSectionDone, setInitSectionDone] = useState<boolean>(false);
  const [touchDraggable, setTouchDraggable] = useState<boolean>(true);

  // error states
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInitErrorCheck, setInitErrorCheck] = useState<boolean>(false);
  const [errors, setErrors] = useState<
    Record<string, string | number> | undefined
  >(undefined);

  // refs
  const stageRef = useRef<StageType>(null);
  const layerRef = useRef<LayerType>(null);
  const groupRef = useRef<GroupType>(null);
  const chosenGroupRef = useRef<GroupType>(null);

  // methods
  const handleInitChosenSection = useCallback(() => {
    try {
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
    } catch (error) {
      setErrors({
        code: 1001,
        message: `[ERROR][${ERRORS[1001]}][handleInitChosenSection]: ${error}`,
      });
    }
  }, [isMinimap, stageCenter]);
  const handleBackToInitState = useCallback(() => {
    try {
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
    } catch (error) {
      setErrors({
        code: 1001,
        message: `[ERROR][${ERRORS[1001]}][handleBackToInitState]: ${error}`,
      });
    }
  }, []);
  const handleReset = useCallback(() => {
    try {
      handleChainActions(
        [
          () => setResetDone(false),
          () => setInitSectionDone(false),
          handleBackToInitState,
          () => setResetDone(true),
        ],
        300
      );
    } catch (error) {
      setErrors({
        code: 1001,
        message: `[ERROR][${ERRORS[1001]}][handleReset]: ${error}`,
      });
    }
  }, [handleBackToInitState]);
  const checkIfNeedReset = useCallback(() => {
    try {
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
    } catch (error) {
      setErrors({
        code: 1001,
        message: `[ERROR][${ERRORS[1001]}][handleReset]: ${error}`,
      });
    }
  }, [resetTrackings]);
  const handleZoom = useCallback(
    (type: "out" | "in") => {
      try {
        const offset = chosenSectionId !== 0 ? 5 : 2;
        const direction = type === "out" ? -1 : 1;
        const newScale = Math.abs(scale + scaleBy * offset * direction);
        if (newScale >= minScale - 0.25 && newScale <= maxScale) {
          handleChainActions([() => setScale(newScale), checkIfNeedReset]);
        }
      } catch (error) {
        setErrors({
          code: 1001,
          message: `[ERROR][${ERRORS[1001]}][handleZoom]: ${error}`,
        });
      }
    },
    [scale, chosenSectionId, checkIfNeedReset]
  );
  const handlePostMessage = useCallback(
    (
      type: "onSectionClick" | "onSeatClick" | "onError",
      data: PostMessageData
    ) => {
      try {
        if (serviceLocation !== "mobile") return;
        switch (type) {
          case "onSectionClick":
            onPostMessage(JSON.stringify({ type: "onSectionClick", data }));
            return;
          case "onSeatClick":
            onPostMessage(
              JSON.stringify({
                type: "onSeatClick",
                data,
              })
            );
            return;
          default:
            onPostMessage(JSON.stringify({ type: "onError", data: errors }));
            return;
        }
      } catch (error) {
        setErrors({
          code: 1001,
          message: `[ERROR][${ERRORS[1001]}][handlePostMessage]: ${error}`,
        });
      }
    },
    [errors, onPostMessage, serviceLocation]
  );

  // event handlers
  const onStageWheel = (e: KonvaEventObject<WheelEvent>) => {
    try {
      if (!isWheelable || isMinimap) return;
      handleChainActions([
        () => handleOnWheel(e, stageRef),
        () => setScale(layerRef?.current?.scaleX() as number),
      ]);
    } catch (error) {
      setErrors({
        code: 1002,
        message: `[ERROR][${ERRORS[1002]}][onStageWheel]: ${error}`,
      });
    }
  };
  const onStageTouchMove = (e: KonvaEventObject<TouchEvent>) => {
    try {
      e.evt.preventDefault();
      const stage = stageRef.current;
      const layer = layerRef.current;
      const touch1 = e.evt.touches[0];
      const touch2 = e.evt.touches[1];
      if (touch1 && touch2) {
        setTouchDraggable(false);
        if (stage && layer) {
          if (stage.isDragging()) stage.stopDrag();
          if (layer.isDragging()) layer.stopDrag();

          const p1 = {
            x: touch1.clientX,
            y: touch1.clientY,
          };
          const p2 = {
            x: touch2.clientX,
            y: touch2.clientY,
          };

          if (!lastCenter) {
            lastCenter = getCenter(p1, p2);
            return;
          }
          const newCenter = getCenter(p1, p2);
          const dist = getDistance(p1, p2);
          if (!lastDist) lastDist = dist;

          const pointTo = {
            x: (newCenter.x - stage.x()) / stage.scaleX(),
            y: (newCenter.y - stage.y()) / stage.scaleY(),
          };

          const scaleInner = stage.scaleX() * (dist / lastDist);
          stage.scaleX(scaleInner);
          stage.scaleY(scaleInner);
          setScale(layer.scaleX());

          const dx = newCenter.x - lastCenter.x;
          const dy = newCenter.y - lastCenter.y;

          const newPos = {
            x: newCenter.x - pointTo.x * scaleInner + dx,
            y: newCenter.y - pointTo.y * scaleInner + dy,
          };
          stage.position(newPos);

          lastDist = dist;
          lastCenter = newCenter;
        }
      }
    } catch (error) {
      setErrors({
        code: 1002,
        message: `[ERROR][${ERRORS[1002]}][onStageTouchMove]: ${error}`,
      });
    }
  };
  const onStageTouchMoveEnd = (e: KonvaEventObject<TouchEvent>) => {
    try {
      e.evt.preventDefault();
      lastDist = 0;
      lastCenter = null;
      setTouchDraggable(true);
    } catch (error) {
      setErrors({
        code: 1002,
        message: `[ERROR][${ERRORS[1002]}][onStageTouchMoveEnd]: ${error}`,
      });
    }
  };
  const onSectionMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    try {
      if (isMinimap) return;
      const container = e.target?.getStage()?.container();
      if (container) container.style.cursor = "pointer";
    } catch (error) {
      setErrors({
        code: 1002,
        message: `[ERROR][${ERRORS[1002]}][onSectionMouseEnter]: ${error}`,
      });
    }
  };
  const onSectionMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    try {
      if (isMinimap) return;
      const container = e.target?.getStage()?.container();
      if (container) container.style.cursor = "";
    } catch (error) {
      setErrors({
        code: 1002,
        message: `[ERROR][${ERRORS[1002]}][onSectionMouseLeave]: ${error}`,
      });
    }
  };

  // effects
  useEffect(() => {
    const hasNoSeatmapData = !data || Object.keys(data).length <= 0;
    if (hasNoSeatmapData) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: 'data' is compulsory!`,
      });
      return;
    }

    const hasNoWidthHeight = w <= 0 || h <= 0;
    if (hasNoWidthHeight) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: 'width' AND 'height' are compulsory!`,
      });
      return;
    }

    if (!serviceLocation) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: serviceLocation is compulsory!`,
      });
      return;
    }

    const isInValidServiceLocation = !["web", "mobile", "admin"].includes(
      serviceLocation
    );
    if (isInValidServiceLocation) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: serviceLocation can only be 'web', 'mobile' or 'admin'!`,
      });
      return;
    }

    const hasSectionIdButNoData =
      chosenSectionId !== 0 &&
      !isMinimap &&
      (!chosenSectionData || Object.keys(chosenSectionData).length <= 0);
    const hasSectionDataButNoId =
      chosenSectionId === 0 &&
      !isMinimap &&
      chosenSectionData &&
      Object.keys(chosenSectionData).length;
    if (hasSectionIdButNoData) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: Must provide 'chosenSectionData' if 'chosenSectionId' exists!`,
      });
      return;
    }
    if (hasSectionDataButNoId) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: Must provide 'chosenSectionId' if 'chosenSectionData' exists!`,
      });
      return;
    }
    const minimapButNoSectionId = isMinimap && chosenSectionId === 0;
    if (minimapButNoSectionId) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: Must provide 'chosenSectionId' if 'isMinimap' is true!`,
      });
      return;
    }

    if (
      chosenSectionId &&
      !isMinimap &&
      (!selectedSeatsIds || !onSelectSeat || !onDeselectSeat)
    ) {
      setErrors({
        code: 1003,
        message: `[ERROR][${ERRORS[1003]}]: Must provide 'selectedSeatsIds', 'onSelectSeat' AND 'onDeselectSeat' if 'chosenSectionId' exists!`,
      });
    }

    setInitErrorCheck(true);
  }, [
    chosenSectionData,
    chosenSectionId,
    data,
    h,
    isMinimap,
    onDeselectSeat,
    onSelectSeat,
    selectedSeatsIds,
    serviceLocation,
    w,
  ]);
  useEffect(() => {
    if (!hasError) {
      if (errors && Object.keys(errors).length) {
        onError(errors);
        handlePostMessage("onError", errors);
        setHasError(true);
        return;
      }
      setHasError(false);
    }
  }, [errors, handlePostMessage, hasError, onError]);
  useEffect(() => {
    try {
      if (data && Object.keys(data).length && data.viewbox) {
        const stage = stageRef.current;
        if (stage) {
          const stageCenter = stage.getAbsolutePosition() as IRect;
          const centerX = stageCenter.x + stage.width() / 2;
          const centerY = stageCenter.y + stage.height() / 2;
          setStageCenter({ x: centerX, y: centerY });
          setGroupDimensions(extractWHFromViewBox(data?.viewbox as string));
        }
      }
    } catch (error) {
      setErrors({
        code: 1004,
        message: `[ERROR][${ERRORS[1004]}][stageCenter, groupDimensions]: ${error}`,
      });
    }
  }, [data]);
  useEffect(() => {
    try {
      if (groupDimensions && Object.keys(groupDimensions).length) {
        const group = groupRef.current;
        if (group) {
          const groupCenter = group.getAbsolutePosition() as IRect;
          const centerX = groupCenter.x + group.width() / 2;
          const centerY = groupCenter.y + group.height() / 2;
          setGroupCenter({ x: centerX, y: centerY });
        }
      }
    } catch (error) {
      setErrors({
        code: 1004,
        message: `[ERROR][${ERRORS[1004]}][groupCenter]: ${error}`,
      });
    }
  }, [groupDimensions]);
  useEffect(() => {
    const hasStageCenter = stageCenter && Object.keys(stageCenter).length;
    const hasGroupCenter = groupCenter && Object.keys(groupCenter).length;
    if (hasStageCenter && hasGroupCenter) handleReset();
  }, [stageCenter, groupCenter, handleReset]);
  useEffect(() => {
    if (isResetDone && chosenSectionId !== 0) {
      handleChainActions(
        [handleInitChosenSection, () => setInitSectionDone(true)],
        200
      );
    }
  }, [chosenSectionId, handleInitChosenSection, isResetDone]);

  // memos
  const shouldDBeDraggable = useMemo(
    () =>
      (isDraggable && !isMinimap && serviceLocation !== "mobile") ||
      touchDraggable,
    [isDraggable, isMinimap, serviceLocation, touchDraggable]
  );

  // render
  return (
    <SeatmapWrapper
      id="seatmap-container"
      className={`seatmap-container ${customClasses.seatmap || ""}`}
      style={{ opacity: isInitErrorCheck && !hasError ? 1 : 0 }}
    >
      <div
        id="stage-container"
        className={`stage-container ${customClasses.stage || ""}`}
      >
        {/* BUTTONS */}
        {hasTools && !isMinimap && serviceLocation !== "mobile" && (
          <div
            id="btns-container"
            className={`btns-container ${customClasses.buttons || ""}`}
          >
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
          visible={isInitErrorCheck && !hasError}
          // dragging related
          draggable={shouldDBeDraggable}
          onTouchStart={() => setTouchDraggable(true)}
          onDragEnd={checkIfNeedReset}
          // important for mobile, pinch to zoom
          onTouchMove={onStageTouchMove}
          onTouchEnd={onStageTouchMoveEnd}
          // scale using trackpad
          onWheel={(e) => {
            /* STOP EVEMT AUTO CATCHING */
            e.evt.preventDefault();
            e.evt.stopPropagation();
            /* STOP EVEMT AUTO CATCHING */
            if (!isResetDone) return;
            onStageWheel(e);
            checkIfNeedReset();
          }}
        >
          <Layer
            id="seatmap-layer"
            ref={layerRef}
            scale={{ x: scale, y: scale }}
            // dragging related
            draggable={shouldDBeDraggable}
            onTouchStart={() => setTouchDraggable(true)}
            onDragEnd={checkIfNeedReset}
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
                if (hideSection) return null;

                const _handleInnerSectionClick = () => {
                  if (chosenSectionId !== 0 || isStage) return;
                  try {
                    if (section && Object.keys(section).length) {
                      onSectionClick(section);
                      handlePostMessage("onSectionClick", section);
                    }
                  } catch (error) {
                    setErrors({
                      code: 1002,
                      message: `[ERROR][${ERRORS[1002]}][onSectionClick]: ${error}`,
                    });
                  }
                };

                return (
                  <Group
                    visible={
                      chosenSectionId !== 0
                        ? isMinimap
                          ? true
                          : isInitSectionDone
                        : true
                    }
                    key={sectionId}
                    ref={sectionId === chosenSectionId ? chosenGroupRef : null}
                    width={attribute?.width}
                    height={attribute?.height}
                    onClick={_handleInnerSectionClick}
                    onTap={_handleInnerSectionClick}
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
                        return null;

                      const sectionEventsProps = {
                        onMouseEnter: onSectionMouseEnter,
                        onMouseLeave: onSectionMouseLeave,
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

                        const seatDataPack = {
                          sectionId,
                          sectionIsReserveSeat,
                          sectionSeatMapId,
                          rowId,
                          rowName,
                          rowStatus,
                          seatId,
                          seatName,
                          seatPosition,
                        };

                        if (seat)
                          return (
                            <Seat
                              x={x}
                              y={y}
                              id={seatId}
                              name={seatId}
                              key={`seatKey-${uuidv4()}`}
                              displayName={seatName}
                              showName={hasSeatNumbers}
                              visible={isResetDone && !isMinimap}
                              initStatus={status}
                              onClick={() =>
                                handlePostMessage("onSeatClick", seatDataPack)
                              }
                              onSelectSeat={onSelectSeat}
                              onDeselectSeat={onDeselectSeat}
                              isSelected={
                                selectedSeatsIds
                                  ? selectedSeatsIds.indexOf(seatId) >= 0
                                  : false
                              }
                              seatDataPack={seatDataPack}
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
