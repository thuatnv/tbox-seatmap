import SeatMap from "components/SeatMap";
import { initStageH, initStageW } from "components/SeatMap/constants";
import useGetData from "hooks/useGetData";
import { Data } from "types/seatmap";

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/22/seatmap`
  );
  if (loading) return <div className="dark-wrap">Loading seat map data...</div>;
  if (error) return <div className="dark-wrap">Opps! Error: {`${error}`}</div>;
  return (
    <div className="App dark-wrap">
      {data && (
        <SeatMap
          w={750 || initStageW}
          h={750 || initStageH}
          data={data?.result}
          isDraggable
          isWheelable
          hasTools
          chosenSectionId={435}
        />
      )}
      {data && (
        <SeatMap
          w={200}
          h={200}
          data={data?.result}
          isMinimap
          chosenSectionId={435}
        />
      )}
    </div>
  );
};

export default SampleApp;
