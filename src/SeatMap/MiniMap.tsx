import React, { useEffect, useRef, useState } from "react";
import { Group, Layer, Path, Stage } from "./react-konva";
import Konva from "konva";
import dataSeatMap from '../mock/seatMap.json';

const MiniMap = () => {
  // const containerRef = useRef(null);
  // const [seatmap, setSeatmap] = useState<Seatmap>({});
  // const groupRefs = useRef<Konva.Group[]>([]);
  // const selectRef = useRef<Konva.Transformer>();
  // const layerRef = useRef<Konva.Layer>();
  // const stageRef = useRef<Konva.Stage>();

  useEffect(() => {
    // setSeatmap(dataSeatMap);
    // console.log(dataSeatMap);
  }, []);


  return (
    <div
    style={{
      position: "relative",
      // backgroundColor: "lightgrey",
      width: "90vw",
      height: "100vh"
    }}
    // ref={containerRef}
  >
    <Stage
        width={720}
        height={620}
        // onWheel={handleOnWheel}
        // ref={(node) => {
        //   if (node) {
        //     stageRef.current = node;
        //   }
        // }}
        // onClick={(evt) => {
        //   if (evt.target == stageRef.current) {
        //     selectRef.current?.nodes([]);
        //   }
        // }}
      >
        <Layer>
          <Group name="paths-group">
          {dataSeatMap &&
            Object.keys(dataSeatMap).length &&
            dataSeatMap?.sections?.map((section) =>
              section?.elements?.map(({ data: path, fill }, idx) => {
                return (
                  <Path
                      {...{ key: idx, data: path, fill: "#d3d3d3" }}
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
