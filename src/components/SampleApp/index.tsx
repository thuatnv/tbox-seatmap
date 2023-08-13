import SeatMap from "components/SeatMap";
import { initStageH, initStageW } from "components/SeatMap/constants";
import useGetData from "hooks/useGetData";
import { Data } from "types/seatmap";

const SampleApp = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/20/seatmap`
  );

  if (loading) return <div className="dark-wrap">Loading seat map data...</div>;
  if (error) return <div className="dark-wrap">Opps! Error: {`${error}`}</div>;
  return (
    <div className="App dark-wrap">
      {data && (
        <SeatMap
          w={initStageW}
          h={initStageH}
          data={data?.result}
          isDraggable
          isWheelable
          hasTools
        />
      )}
    </div>
  );
};

export default SampleApp;
