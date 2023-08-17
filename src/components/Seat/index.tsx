import { KonvaEventObject } from "konva/lib/Node";
import { useState } from "react";
import { Circle, Group, Text } from "react-konva";
import { getSeatStyles, seatStatusNumToStr } from "./helpers";

type SeatProps = {
  id: string;
  name: string;
  visible: boolean;
  showName: boolean;
  x: number;
  y: number;
  radius: number;
  strokeWidth: number;
  initStatus: number;
  onClick?: (arg0: KonvaEventObject<MouseEvent>) => void;
};

const Seat: React.FC<Partial<SeatProps>> = ({
  id = "",
  name = "",
  visible = true,
  showName = true,
  x = 0,
  y = 0,
  radius = 4.5,
  strokeWidth = 1,
  initStatus = 1,
  onClick = () => {},
}) => {
  // states
  const [currentStatus, setCurrentStatus] = useState<number>(initStatus);

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
    <Group
      id={id}
      onMouseEnter={onSeatMouseEnter}
      onMouseLeave={onSeatMouseLeave}
      onClick={(e) => {
        onSeatClickInside();
        onClick && onClick(e);
      }}
    >
      <Circle
        x={x}
        y={y}
        visible={visible}
        radius={radius}
        strokeWidth={strokeWidth}
        {...(getSeatStyles(seatStatusNumToStr(currentStatus)) as object)}
      />
      {showName && (
        <Text
          text={name}
          x={x - (radius / 2) * 2}
          y={y - (radius / 2) * 1.8}
          visible={visible}
          fontSize={radius}
          fontStyle="bold"
          align="center"
          verticalAlign="middle"
          width={radius * 2}
          height={radius * 2}
        />
      )}
    </Group>
  );
};

export default Seat;
