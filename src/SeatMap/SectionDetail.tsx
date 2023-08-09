import React from 'react';
import dataSection from '../mock/section.json';
import Section from './components/Section';
import { Stage, Layer } from "./react-konva";


const SectionDetail = () => {
  console.log(dataSection);
  const containerRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const [scale, setScale] = React.useState(1);
  const [scaleToFit, setScaleToFit] = React.useState(1);
  const [size, setSize] = React.useState({
    width: 1000,
    height: 1000,
    virtualWidth: 1000
  });
  const [virtualWidth, setVirtualWidth] = React.useState(1000);

  const [selectedSeatsIds, setSelectedSeatsIds] = React.useState([]);

  const [popup, setPopup] = React.useState({ seat: null });
  // calculate available space for drawing
  React.useEffect(() => {
    const newSize = {
      width: containerRef?.current?.offsetWidth,
      height: containerRef?.current?.offsetHeight
    };
    if (newSize.width !== size.width || newSize.height !== size.height) {
      setSize(newSize);
    }
  });

  // calculate initial scale
  React.useEffect(() => {
    if (!stageRef.current) {
      return;
    }
    const stage: any = stageRef.current;
    const clientRect = stage?.getClientRect({ skipTransform: true });

    const scaleToFit = size.width / clientRect.width;
    setScale(scaleToFit);
    setScaleToFit(scaleToFit);
    setVirtualWidth(clientRect.width);
  }, [dataSection, size]);

  // togle scale on double clicks or taps
  const toggleScale = React.useCallback(() => {
    if (scale === 1) {
      setScale(scaleToFit);
    } else {
      setScale(1);
    }
  }, [scale, scaleToFit]);

  let lastSectionPosition = 0;

  const handleHover = React.useCallback((seat: any, pos: any) => {
    setPopup({
      seat: seat,
      position: pos
    });
  }, []);

  const handleSelect = React.useCallback(
    seatId => {
      const newIds = selectedSeatsIds.concat([seatId]);
      setSelectedSeatsIds(newIds);
    },
    [selectedSeatsIds]
  );

  const handleDeselect = React.useCallback(
    seatId => {
      const ids = selectedSeatsIds.slice();
      ids.splice(ids.indexOf(seatId), 1);
      setSelectedSeatsIds(ids);
    },
    [selectedSeatsIds]
  );

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
    <Stage
      ref={stageRef}
      width={size.width}
        height={size.height}
      draggable={false}
      scaleX={scale}
      scaleY={scale}
    >
      <Layer>
        <Section
          dataSection={dataSection}
        />
      </Layer>  
    </Stage>
    </div>
    
    
  );
}

export default SectionDetail;
