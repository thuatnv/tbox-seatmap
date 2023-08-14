import SeatMapComponent from "components/SeatMap/SeatMapComponent";
import { initStageH, initStageW } from "components/SeatMap/constants";
import useGetData from "hooks/useGetData";
import { Data } from "types/seatmap";

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/22/seatmap`
  );
  if (loading) return <div className="dark-wrap">Loading seat map data...</div>;
  if (error) return <div className="dark-wrap">Opps! Error: {`${error}`}</div>;
  const chosenId = 436;
  return (
    <div className="App dark-wrap">
      {data && (
        <SeatMapComponent
          w={700 || initStageW}
          h={700 || initStageH}
          data={data?.result}
          isDraggable
          isWheelable
          hasTools
          chosenSectionId={chosenId}
        />
      )}
      {dataMap && (
        <SeatMapComponent
          w={200}
          h={200}
          data={data?.result}
          isMinimap
          chosenSectionId={chosenId}
        />
      )}
    </div>
  );
};

export default SampleApp;

