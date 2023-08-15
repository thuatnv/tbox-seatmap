import { Circle } from "react-konva";

const Seat = ({
  id = "",
  name = "",
  visible = true,
  x = 0,
  y = 0,
  radius = 4.5,
  fill = "blue",
  stroke = "red",
  strokeWidth = 1,
}) => {
  return (
    <Circle
      id={id}
      name={name}
      visible={visible}
      x={x}
      y={y}
      radius={radius}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
    />
  );
};

export default Seat;
