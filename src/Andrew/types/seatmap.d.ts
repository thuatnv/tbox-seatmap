export interface SeatmapAPIData {
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
  ticketTypeId?: number;
  ticketType?: TicketType;
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

export interface TicketType {
  id: number;
  name: string;
  showingId: number;
  originalId: number;
  backgroundURL: string;
  status: number;
  bookingStatus: string;
  description: string;
  isFree: boolean;
  price: number;
  originalPrice: number;
  quantity: number;
  quantitySold: number;
  quantityLocking: number;
  maxQtyPerOrder: number;
  minQtyPerOrder: number;
  startTime: string;
  endTime: string;
  position: number;
  color: string;
  seatSections: SeatSection[];
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface SeatSection {
  id: number;
  ticketTypeId: number;
  sectionId: number;
  capacity: number;
  status: number;
  createdAt: string;
  updatedAt: string;
}
