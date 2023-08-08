import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEffect, useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import { styled } from "styled-components";

const SeatmapWrapper = styled.div`
  width: 900px;
  height: 750px;
  border: 2px solid #000;
  margin: 2rem auto;
  overflow: hidden;
`;

const minScale = 2;
const maxScale = 20.0;
const scaleBy = 0.8; // smaller -> more scale

const Seatmap = ({ svgFile }: { svgFile: CanvasImageSource | undefined }) => {
  const stageRef = useRef<Konva.Stage>(null);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    const newScale = scale / scaleBy;
    setScale(Math.min(newScale, maxScale));
  };

  const handleZoomOut = () => {
    const newScale = scale * scaleBy;
    setScale(Math.max(newScale, minScale));
  };

  const handleReset = () => {
    const stage = stageRef.current;
    const container = stage?.container();
    const stageWidth = container?.offsetWidth as number;
    const stageHeight = container?.offsetHeight as number;

    const image = stage?.findOne("Image") as Konva.Image;
    const imageWidth = image?.width() * image?.scaleX();
    const imageHeight = image?.height() * image?.scaleY();

    const scaleX = stageWidth / imageWidth;
    const scaleY = stageHeight / imageHeight;
    const scale = Math.min(scaleX, scaleY);

    const newPosition = {
      x: (stageWidth - imageWidth * scale) / 2,
      y: (stageHeight - imageHeight * scale) / 2,
    };

    setScale(scale);
    stage?.scale({ x: scale, y: scale });
    stage?.position(newPosition);
    stage?.batchDraw();
  };

  const handleOnWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const scaleChange = e.evt.deltaY < 0 ? scaleBy : 1 / scaleBy;
    const newScale = scale * scaleChange;

    // Limit the new scale within the specified range
    const limitedScale = Math.min(Math.max(newScale, minScale), maxScale);

    const stage = stageRef.current;
    const oldScale = stage?.scaleX() as number;

    const mousePointTo = {
      x:
        (stage?.getPointerPosition()?.x as number) / oldScale -
        (stage?.x() as number) / oldScale,
      y:
        (stage?.getPointerPosition()?.y as number) / oldScale -
        (stage?.y() as number) / oldScale,
    };

    setScale(limitedScale);
    stage?.scale({ x: limitedScale, y: limitedScale });

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

    stage?.position(newPos);
    stage?.batchDraw();
  };

  useEffect(() => {
    setScale(1);
    handleReset();
  }, [svgFile]);

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
