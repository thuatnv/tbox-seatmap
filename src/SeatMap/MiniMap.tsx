import { useEffect, useRef, useState } from "react";
import { Circle, Group, Layer, Stage, Text, Path } from "./react-konva";
import Konva from "konva";
import {Seatmap, Row, Seat} from '../types/seatMap';
import dataSeatMap from '../mock/seatMap.json';
import Section from "./components/Section";
import React from "react";

const MiniMap = () => {
  const containerRef = React.useRef(null);
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
    <div
    style={{
      position: "relative",
      backgroundColor: "lightgrey",
      width: "100vw",
      height: "100vh"
    }}
    ref={containerRef}
  >
    dasdasdasd
    <Stage
        width={720}
        height={620}
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
        <Layer>
          <Group>
              {dataSeatMap &&
                Object.keys(dataSeatMap).length &&
                dataSeatMap?.sections?.map((section) =>
                  section?.elements?.map(({ data: path, fill }, idx) => {
                    console.log(path, 1111111);
                    return (
                      <Path
                        {...{ key: idx, data: path, fill: fill || "#d3d3d3" }}
                      />
                    );
                  })
                )}
            </Group>
        </Layer>
      </Stage>
    </div>
    
  )
}

export default MiniMap
