import { Stage } from "konva/lib/Stage";
import { Layer } from "konva/lib/Layer";
import { KonvaEventObject } from "konva/lib/Node";
import { RefObject } from "react";
import { scaleBy } from "./constants";

export const handleOnWheel = (
  e: KonvaEventObject<WheelEvent>,
  targetRef: RefObject<Stage>,
  scaleRef: RefObject<Layer>
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
  ...targetRefs: (RefObject<Stage> | RefObject<Layer>)[]
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
