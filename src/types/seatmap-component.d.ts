import { Result, Section } from "types/seatmap";
import { ClickedSeatData, Result as SectionResult } from "types/section";

export type PostMessageData =
  | Section
  | ClickedSeatData
  | Record<string, string | number>
  | undefined;
export type SeatmapProps = {
  w: number;
  h: number;
  data: Result;
  serviceLocation: "web" | "mobile" | "admin";

  isMinimap?: boolean;
  isWheelable?: boolean;
  isDraggable?: boolean;
  hasTools?: boolean;
  hasSeatNumbers?: boolean;
  chosenSectionId?: number;
  chosenSectionData?: SectionResult;

  onSectionClick?: (arg0: Section) => void;
  onError?: (arg0: Record<string, string | number> | undefined) => void;
  onPostMessage?: (arg0: string) => void;

  onSelectSeat?: (arg0?: number, arg1?: ClickedSeatData) => void;
  onDeselectSeat?: (arg0?: number) => void;
  selectedSeatsIds?: number[];

  customClasses?: {
    seatmap?: string;
    stage?: string;
    buttons?: string;
  };
};
export type ResetTrackings = Record<string, Partial<IRect>>;
export type Point = {
  x: number;
  y: number;
};
