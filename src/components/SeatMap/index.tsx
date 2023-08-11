import { useEffect } from "react";
import { Result } from "types/seatmap";

type SeatmapProps = {
  data?: Result;
  loading?: boolean;
};
const SeatMap = ({ data }: SeatmapProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>SeatMap</div>;
};

export default SeatMap;
