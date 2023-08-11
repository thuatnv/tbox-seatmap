export interface SMResponse {
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
  name: string;
  status: number;
  code: string;
  viewbox: string;
  description: string;
  regionId: number;
  sections: Section[];
  createdAt: string;
  updatedAt: string;
}

export interface Section {
  id: number;
  seatMapId: number;
  name: string;
  isReservingSeat: boolean;
  isStage: boolean;
  capacity: number;
  status: number;
  elements: Element[];
  attribute: Attribute;
}

export interface Element {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  data: string;
}

export interface Attribute {
  x: number;
  y: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;
  rotate: number;
}
