import { Result } from "Andrew/types/seatmap";
import { useEffect, useState } from "react";
import { getSeatmapByShowingId } from "../api/actions";
import Seatmap from "./Seatmap";

const App = () => {
  const [seatMapData, setSeatMapData] = useState<Result | undefined>();

  // fetch seatmap of showing with id = 19
  useEffect(() => {
    const getData = async () => {
      const rs = await getSeatmapByShowingId(19);
      setSeatMapData(rs?.data?.result);
    };
    getData();
  }, []);

  return (
    <div>
      {seatMapData && Object.keys(seatMapData).length && (
        <Seatmap data={seatMapData} />
      )}
    </div>
  );
};

export default App;
