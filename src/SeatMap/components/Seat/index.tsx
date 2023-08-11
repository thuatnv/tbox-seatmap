import React from "react";
import { Circle } from "../../react-konva";
import { SEAT_SIZE } from "../../utils/layout";
import { SeatProps } from "../../../types/seatMap";

function getColor(isBooked: boolean, isSelected: boolean): string {
  if (isSelected) {
    return "red";
  } else if (isBooked) {
    return "lightgrey";
  } else {
    return "#1b728d";
  }
}

const Seat = (props: SeatProps)=> {
  const isBooked = props.data.status === "booked";
  const { onHover, onDeselect, onSelect, isSelected} = props;
  return (
    <Circle
      x={props.x}
      y={props.y}
      radius={SEAT_SIZE / 2}
      fill={getColor(isBooked, isSelected)}
      strokeWidth={1}
      onMouseEnter={e => {
        e.target._clearCache();
        onHover(props.data.name, e.target.getAbsolutePosition());
        const container: any = e.target?.getStage()?.container();
        if (isBooked) {
          container.style.cursor = "not-allowed";
        } else {
          container.style.cursor = "pointer";
        }
      }}
      onMouseLeave={e => {
        onHover("", null);
        const container: any = e.target?.getStage()?.container();
        container.style.cursor = "";
      }}
      onClick={e => {
        console.log(e)
        if (isBooked) {
          return;
        }
        if (isSelected) {
          onDeselect(props.data.name);
        } else {
          onSelect(props.data.name);
        }
      }}
      onTap={(e: any) => {
        console.log(e);
        if (isBooked) {
          return;
        }
        if (props.isSelected) {
          props.onDeselect(props.data.name);
        } else {
          props.onSelect(props.data.name);
        }
      }}
    />
  );
};

export default Seat;
