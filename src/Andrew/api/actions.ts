import { SeatmapAPIData } from "Andrew/types/seatmap";
import tkbApiFetcher from "./tkbApiFetcher";

export const getSeatmapByShowingId = async (showingId: number) => {
  try {
    const seatmapDataRs = await tkbApiFetcher(
      `https://event.ticketbox.dev/api/v1/events/showings/${showingId}/seatmap`
    );
    return seatmapDataRs as SeatmapAPIData;
  } catch (error) {
    console.log(error);
  }
};
