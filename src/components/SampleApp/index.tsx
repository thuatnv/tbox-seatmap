import SeatMapComponent from "components/SeatMap/SeatMapComponent";
import { initStageH, initStageW } from "components/SeatMap/constants";
// import useGetData from "hooks/useGetData";
import { Data } from "types/seatmap";
interface AppProps {
  dataMap?: Data
}
const SampleApp = (props: AppProps) => {
  const { dataMap } = props;
  //   `/v1/events/showings/22/seatmap`
  // );
  // if (loading) return <div className="dark-wrap">Loading seat map data...</div>;
  // if (error) return <div className="dark-wrap">Opps! Error: {`${error}`}</div>;
  return (
    <div className="App dark-wrap">
      {dataMap && (
        <SeatMapComponent
          w={initStageW}
          h={initStageH}
          data={dataMap?.result}
          isDraggable
          isWheelable
          hasTools
          isMinimap={false}
          chosenSectionId={0}
          />
      )}
      {dataMap && (
        <SeatMapComponent
          w={200}
          h={200}
          data={dataMap?.result}
          isMinimap
          chosenSectionId={436}
          isWheelable={false}
          isDraggable={false}
          hasTools={false}
          />
      )}
    </div>
  );
};

export default SampleApp;

