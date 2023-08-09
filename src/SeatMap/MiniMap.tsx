import { useEffect, useRef, useState } from "react";
import { Circle, Group, Layer, Stage, Text, Transformer } from "react-konva";
import Konva from "konva";
import {Seatmap, Row, Seat} from '../types/seatMap';
import dataSeatMap from '../mock/seatMap.json';
import Section from "./components/Section";

const scaleBy = 1.05;
const defaultScale = 1.5;

function drawSeat(seat: Seat, index: number) {
  return (
    <>
      <Circle key={"seat_" + index} x={seat.x} y={seat.y} radius={4} fill="white" stroke="black" strokeWidth={0.5} />
      <Text
        key={"text_" + index}
        x={seat.x - 4.1}
        y={seat.y - 2.3}
        width={8}
        text={"" + index}
        fontSize={6}
        align="center"
        fontStyle="bold"
      />
    </>
  );
}


function drawRow(row: Row, index: number) {
  return <Group key={"row_" + index}>{row.seats && row.seats.length > 0 && row.seats.map(drawSeat)}</Group>;
}

const MiniMap = () => {
  const [seatmap, setSeatmap] = useState<Seatmap>({});
  const groupRefs = useRef<Konva.Group[]>([]);
  const selectRef = useRef<Konva.Transformer>();
  const layerRef = useRef<Konva.Layer>();
  const stageRef = useRef<Konva.Stage>();

  useEffect(() => {
    setSeatmap(dataSeatMap);
    console.log(dataSeatMap);
  }, []);


  return (
    <Stage
        width={720}
        height={620}
        draggable
        // onWheel={handleOnWheel}
        ref={(node) => {
          if (node) {
            stageRef.current = node;
          }
        }}
        onClick={(evt) => {
          if (evt.target == stageRef.current) {
            selectRef.current?.nodes([]);
          }
        }}
      >
        <Layer
          scale={{ x: defaultScale, y: defaultScale }}
          ref={(node) => {
            if (node) {
              layerRef.current = node;
            }
          }}
        >
          {seatmap.sections &&
            seatmap.sections.length > 0 &&
            seatmap.sections.map((section, index) => (
              <Section
                
              />
            ))}
          <Transformer
            ref={(node) => {
              if (node) {
                selectRef.current = node;
              }
            }}
          ></Transformer>
        </Layer>
      </Stage>
  )
}

export default MiniMap
