import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { RefObject } from "react";
import { scaleBy } from "./constants";

export const handleOnWheel = (
  e: KonvaEventObject<WheelEvent>,
  targetRef: RefObject<Konva.Stage>,
  scaleRef: RefObject<Konva.Layer>
) => {
  e.evt.preventDefault();
  if (!targetRef.current || !scaleRef.current) return;

  const oldScale = scaleRef.current.scaleX();
  const pointer = targetRef.current.getPointerPosition();
  const mousePointTo = {
    x: ((pointer?.x || 0) - scaleRef.current.x()) / oldScale,
    y: ((pointer?.y || 0) - scaleRef.current.y()) / oldScale,
  };

  let direction = e.evt.deltaY < 0 ? 1 : -1;
  if (e.evt.ctrlKey) direction = -direction;
  const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;
  const newPos = {
    x: (pointer?.x || 0) - mousePointTo.x * newScale,
    y: (pointer?.y || 0) - mousePointTo.y * newScale,
  };
  scaleRef.current.scale({ x: newScale, y: newScale });
  scaleRef.current.position(newPos);
};

export const handleResetRefs = (
  ...targetRefs: (RefObject<Konva.Stage> | RefObject<Konva.Layer>)[]
) => {
  for (const targetRef of targetRefs) {
    targetRef?.current?.offsetX(0);
    targetRef?.current?.offsetY(0);
    targetRef?.current?.x(0);
    targetRef?.current?.y(0);
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
