export interface SectionResponse {
  status: number;
  message: string;
  data: Data;
  code: number;
  traceId: string;
}

export interface Data {
  result: Result;
}

export interface Result {
  id: number;
  seatMapId: number;
  name: string;
  isReservingSeat: boolean;
  isStage: boolean;
  capacity: number;
  status: number;
  rows: Row[];
}

export interface Row {
  id: number;
  name: string;
  sectionId: number;
  status: number;
  seats: Seat[];
}

export interface Seat {
  id: number;
  name: string;
  rowId: number;
  status: number;
  position: number;
  x: number;
  y: number;
}

export type ClickedSeatData = Record<string, string | number | boolean>;
