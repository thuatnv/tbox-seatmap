import { KonvaEventObject } from "konva/lib/Node";
import { useState } from "react";
import { Circle, Group, Text } from "react-konva";
import { getSeatStyles, seatStatusNumToStr } from "./helpers";
import { ClickedSeatData } from "types/section";

type SeatProps = {
  id: number;
  name: number;
  displayName: string;
  visible: boolean;
  showName: boolean;
  x: number;
  y: number;
  radius: number;
  strokeWidth: number;
  initStatus: number;
  onClick?: (arg0: KonvaEventObject<MouseEvent>) => void;

  onSelectSeat: (arg0?: number, arg1?: ClickedSeatData) => void;
  onDeselectSeat: (arg0?: number) => void;
  isSelected: boolean;
  seatDataPack: ClickedSeatData;
};

const getStyles = (initStatus: number, isSelected: boolean | undefined) => {
  if (!(initStatus === 1 || initStatus === 6))
    return getSeatStyles(seatStatusNumToStr(initStatus)) as object;
  if (isSelected) {
    return getSeatStyles(seatStatusNumToStr(6)) as object;
  } else {
    return getSeatStyles(seatStatusNumToStr(1)) as object;
  }
};

const Seat: React.FC<Partial<SeatProps>> = ({
  id = 0,
  name = 0,
  displayName = "",
  visible = true,
  showName = true,
  x = 0,
  y = 0,
  radius = 4.5,
  strokeWidth = 1,
  initStatus = 1,
  onClick = () => {},

  onSelectSeat = () => {},
  onDeselectSeat = () => {},
  isSelected = false,
  seatDataPack = {},
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
  const onSeatClickInside = (e: KonvaEventObject<MouseEvent>) => {
    if (!(currentStatus === 1 || currentStatus === 6)) return;
    setCurrentStatus((prev) => (prev === 1 ? 6 : 1));
    if (isSelected) {
      onDeselectSeat && onDeselectSeat(name);
    } else {
      onSelectSeat && onSelectSeat(name, seatDataPack);
    }
    onClick && onClick(e);
  };

  // render
  return (
    <Group
      id={`${id}`}
      onMouseEnter={onSeatMouseEnter}
      onMouseLeave={onSeatMouseLeave}
      onClick={onSeatClickInside}
      onTap={onSeatClickInside}
    >
      <Circle
        x={x}
        y={y}
        visible={visible}
        radius={radius}
        strokeWidth={strokeWidth}
        {...getStyles(initStatus, isSelected)}
      />
      {showName && (
        <Text
          text={displayName}
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
