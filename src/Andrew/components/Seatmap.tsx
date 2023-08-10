import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEffect, useRef, useState } from "react";
import { Group, Layer, Path, Stage } from "react-konva";
import { styled } from "styled-components";
import { Result } from "Andrew/types/seatmap";
import {
  minScale,
  maxScale,
  scaleBy,
  zoomMultiplier,
} from "../helpers/constants";

/* STYLE WRAPPER */
const SeatmapWrapper = styled.div`
  width: 800px;
  height: 650px;
  border: 2px solid #000;
  margin: 2rem auto;
  overflow: hidden;
`;

/* PROP TYPES */
type SeatmapProps = {
  data?: Result;
};

/*  MAIN COMPONENT */
const Seatmap = ({ data }: SeatmapProps) => {
  const stageRef = useRef<Konva.Stage>(null);
  const [scale, setScale] = useState(1);

  /* METHODS */
  // handle zoom in onClick
  const handleZoomIn = () => {
    const newScale = scale / scaleBy;
    setScale(Math.min(newScale, maxScale));
  };
  // handle zoom out onClick
  const handleZoomOut = () => {
    const newScale = scale * scaleBy;
    setScale(Math.max(newScale, minScale));
  };
  // handle reset onClick and first render
  const handleReset = () => {
    const stage = stageRef.current;

    // Get the group that contains the paths
    const group = stage?.findOne(".paths-group");

    if (group) {
      // Get the bounding box of the group
      const groupBoundingBox = group.getClientRect();

      // Calculate the new position to center the group
      const stageWidth = stage?.width() as number;
      const stageHeight = stage?.height() as number;
      const groupWidth = groupBoundingBox.width;
      const groupHeight = groupBoundingBox.height;
      const newX = (stageWidth - groupWidth) / 2;
      const newY = (stageHeight - groupHeight) / 2;

      // Update the position of the group
      group.position({ x: newX, y: newY });
      stage?.batchDraw();
    }

    setScale(1);
  };

  // handle scaling by swiping
  const handleOnWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    // determine the direction of scaling (zoom in or zoom out)
    const scaleOffset = e.evt.deltaY > 0 ? -zoomMultiplier : zoomMultiplier;

    // calculate new scale and new limited scale
    const newScale = scale + scaleOffset;
    const limitedScale = Math.min(Math.max(newScale, minScale), maxScale);

    // calculate current and new positions to scale the stage correctly
    // at pointer's position
    const stage = stageRef.current;
    const oldScale = stage?.scaleX() as number;
    // current position of pointer
    const mousePointTo = {
      x:
        (stage?.getPointerPosition()?.x as number) / oldScale -
        (stage?.x() as number) / oldScale,
      y:
        (stage?.getPointerPosition()?.y as number) / oldScale -
        (stage?.y() as number) / oldScale,
    };
    const newPos = {
      x:
        -(
          mousePointTo.x -
          (stage?.getPointerPosition()?.x as number) / limitedScale
        ) * limitedScale,
      y:
        -(
          mousePointTo.y -
          (stage?.getPointerPosition()?.y as number) / limitedScale
        ) * limitedScale,
    };

    // update scaling state
    setScale(limitedScale);

    // update scaling and position of the stage and draw
    stage?.scale({ x: limitedScale, y: limitedScale });
    stage?.position(newPos);
    stage?.batchDraw();
  };

  // when svg file changed, reset scale,
  // scale to fit and center the content
  useEffect(() => {
    setScale(1);
    handleReset();
  }, []);

  // log to check the data when done
  useEffect(() => {
    if (!(data && Object.keys(data).length)) return;
    console.log({ data }); // in BUILD version, it runs ONCE
  }, [data]);

  /* RENDER CONTENT */
  return (
    <>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handleReset}>Reset</button>
      <SeatmapWrapper>
        <Stage
          width={800}
          height={650}
          ref={stageRef}
          onWheel={handleOnWheel}
          scale={{ x: scale, y: scale }}
          draggable
        >
          <Layer>
            <Group name="paths-group">
              {data &&
                Object.keys(data).length &&
                data?.sections?.map((section) =>
                  section?.elements?.map(({ data: path, fill }, idx) => {
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
      </SeatmapWrapper>
    </>
  );
};

export default Seatmap;
