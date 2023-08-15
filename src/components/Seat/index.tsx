import { KonvaEventObject } from "konva/lib/Node";
import { Circle as CircleType } from "konva/lib/shapes/Circle";
import { useRef, useState } from "react";
import { Circle } from "react-konva";
import { getSeatStyles, seatStatusNumToStr } from "./helpers";

const Seat = ({
  id = "",
  name = "",
  visible = true,
  x = 0,
  y = 0,
  radius = 4.5,
  strokeWidth = 1,
  initStatus = 1,
  onClick = () => {},
}) => {
  // states
  const [currentStatus, setCurrentStatus] = useState<number>(initStatus);

  // refs
  const seatRef = useRef<CircleType>(null);

  // methods
  const onSeatMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    if (!(currentStatus === 1 || currentStatus === 6)) return;
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "pointer";
  };
  const onSeatMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    if (!(currentStatus === 1 || currentStatus === 6)) return;
    const container = e.target?.getStage()?.container();
    if (container) container.style.cursor = "";
  };
  const onSeatClickInside = () => {
    if (!(currentStatus === 1 || currentStatus === 6)) return;
    setCurrentStatus((prev) => (prev === 1 ? 6 : 1));
  };

  // render
  return (
    <Circle
      ref={seatRef}
      onMouseEnter={onSeatMouseEnter}
      onMouseLeave={onSeatMouseLeave}
      onClick={() => {
        onSeatClickInside();
        onClick && onClick();
      }}
      id={id}
      name={name}
      visible={visible}
      x={x}
      y={y}
      radius={radius}
      strokeWidth={strokeWidth}
      {...(getSeatStyles(seatStatusNumToStr(currentStatus)) as object)}
    />
  );
};

export default Seat;
