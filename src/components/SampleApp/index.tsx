import SeatMap from "components/SeatMap";
import useGetData from "hooks/useGetData";
import { Data } from "types/seatmap";

const App = () => {
  const [data, error, loading] = useGetData<Data>(
    `/v1/events/showings/20/seatmap`
  );

  if (loading) return <div>Loading seatmap by showing ID...</div>;
  if (error) return <div>Opps! Error: {`${error}`}</div>;
  return <div>{data && <SeatMap data={data?.result} />}</div>;
};

export default App;
