import React, {Fragment} from "react";
import { Group, Text } from "../react-konva";
import Seat from "../components/Seat";
import { SEATS_DISTANCE, SUBSECTION_PADDING, SEAT_SIZE } from "../utils/layout";

const Section = (
  {
    x,
    y,
    dataSection,
    onHoverSeat,
    onSelectSeat,
    onDeselectSeat,
    // selectedSeatsIds
  }: any
)=> {
  return (
    <Group x={x} y={y}>
      {Object.keys(dataSection.rows).map((rowKey, rowIndex) => {
        const row = dataSection.rows[rowKey].seats;
        return (
          <Fragment key={rowKey}>
            {row.map((seat: any, seatIndex: number) => {
              return (
                <Seat
                  key={seat.name}
                  // x={seatIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  // y={rowIndex * SEATS_DISTANCE + SUBSECTION_PADDING}
                  x={seat.x - 80}
                  y={seat.y - 120}
                  data={seat}
                  onHover={onHoverSeat}
                  onSelect={onSelectSeat}
                  onDeselect={onDeselectSeat}
                  isSelected={false}
                />
              );
            })}
            <Text
              text={dataSection.rows[rowIndex].name}
              x={dataSection.rows[0].seats[0].x - 90}
              y={dataSection.rows[rowIndex].seats[0].y - 122}
              fontSize={SEAT_SIZE}
              key={"label-left" + rowKey}
            />
          </Fragment>
        );
      })}
    </Group>
  );
};

export default Section;
