import { Layer } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage } from "konva/lib/Stage";
import { RefObject } from "react";
import { maxScale, minScale } from "./constants";
import { Point } from "types/seatmap-component";

export const handleOnWheel = (
  e: KonvaEventObject<WheelEvent>,
  targetRef: RefObject<Stage>
) => {
  e.evt.preventDefault();
  if (!targetRef.current || !targetRef.current) return;

  const oldScale = targetRef.current.scaleX();
  const pointer = targetRef.current.getPointerPosition();
  const mousePointTo = {
    x: ((pointer?.x || 0) - targetRef.current.x()) / oldScale,
    y: ((pointer?.y || 0) - targetRef.current.y()) / oldScale,
  };

  let direction = e.evt.deltaY < 0 ? 1 : -1;
  if (e.evt.ctrlKey) direction = -direction;
  const newScale = direction > 0 ? oldScale * 0.95 : oldScale / 0.95;
  const newPos = {
    x: (pointer?.x || 0) - mousePointTo.x * newScale,
    y: (pointer?.y || 0) - mousePointTo.y * newScale,
  };
  if (newScale >= minScale && newScale <= maxScale) {
    targetRef?.current?.scale({ x: newScale, y: newScale });
    targetRef?.current?.position({ ...newPos });
  }
};

export const handleResetRefs = (
  ...targetRefs: (RefObject<Stage> | RefObject<Layer>)[]
) => {
  for (const targetRef of targetRefs) {
    targetRef?.current?.offsetX(0);
    targetRef?.current?.offsetY(0);
    targetRef?.current?.x(0);
    targetRef?.current?.y(0);
    targetRef?.current?.scale({ x: 1, y: 1 });
  }
};

export const handleChainActions = (actions: (() => void)[], ms = 100) => {
  for (let i = 0; i < actions.length; i++) {
    setTimeout(() => {
      const action = actions[i];
      action();
    }, ms * i + 1);
  }
};

export const createError = (error: Error | string | unknown) =>
  error || error instanceof Error ? `[ErrorCore]${error}` : "";

export const getDistance = (p1: Point, p2: Point) =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
export const getCenter = (p1: Point, p2: Point) => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2,
});
