import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEffect, useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import { styled } from "styled-components";

/* STYLE WRAPPER */
const SeatmapWrapper = styled.div`
  width: 900px;
  height: 750px;
  border: 2px solid #000;
  margin: 2rem auto;
  overflow: hidden;
`;

/* CONSTANTS */
const minScale = 2; // smallest scale that seat map can reach
const maxScale = 20.0; // biggest scale that seat map can reach
const scaleBy = 0.8; // smaller -> more scale
const zoomMultiplier = 0.25; // bigger -> scale faster

/*  MAIN COMPONENT */
const Seatmap = ({ svgFile }: { svgFile: CanvasImageSource | undefined }) => {
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
    // get stage and stage's container dimensions
    const stage = stageRef.current;
    const container = stage?.container();
    const stageWidth = container?.offsetWidth as number;
    const stageHeight = container?.offsetHeight as number;

    // get image component's dimensions
    const image = stage?.findOne("Image") as Konva.Image;
    const imageWidth = image?.width() * image?.scaleX();
    const imageHeight = image?.height() * image?.scaleY();

    // calculate  SCALE TO FIT value
    const scaleX = stageWidth / imageWidth;
    const scaleY = stageHeight / imageHeight;
    const newScale = Math.min(scaleX, scaleY);

    // calculate CENTER POSITION value
    const newPosition = {
      x: (stageWidth - imageWidth * newScale) / 2,
      y: (stageHeight - imageHeight * newScale) / 2,
    };

    // update scaling state
    setScale(newScale);

    // update scaling and position of the stage and draw
    stage?.scale({ x: newScale, y: newScale });
    stage?.position(newPosition);
    stage?.batchDraw();
  };

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
  }, [svgFile]);

  /* RENDER CONTENT */
  return (
    <>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handleReset}>Reset</button>
      <SeatmapWrapper>
        <Stage
          width={900}
          height={750}
          ref={stageRef}
          onWheel={handleOnWheel}
          scale={{ x: scale, y: scale }}
          draggable
        >
          <Layer>
            <Image image={svgFile} />
          </Layer>
        </Stage>
      </SeatmapWrapper>
    </>
  );
};

export default Seatmap;
