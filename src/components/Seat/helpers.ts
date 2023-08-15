import {
  ALL_SEAT_STATUS,
  SEAT_STYLES_PARSED,
  SEAT_STYLES_RAW,
} from "./constants";

export const seatStatusNumToStr = (status: number) =>
  !(status < 1 || status > 6) ? ALL_SEAT_STATUS[status - 1] : "disabled";

export const seatStatusStrToNum = (statusStr: string) =>
  ALL_SEAT_STATUS.indexOf(statusStr) + 1;

export const getSeatStyles = (
  statusStr: string = "disabled",
  styleType: "raw" | "parsed" = "raw"
) =>
  styleType === "raw"
    ? SEAT_STYLES_RAW[statusStr]
    : SEAT_STYLES_PARSED[statusStr];
