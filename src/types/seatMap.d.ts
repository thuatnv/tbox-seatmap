export interface Seatmap {
  elements?: ElementNode[];
  sections?: Section[];
  viewBox?: string;
  status?: number;
};
export interface Attribute {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  scaleX?: number;
  scaleY?: number;
  rotate?: number;
}

export interface Row {
  name: string;
  seats: Seat[];
};

export interface Seat {
  name: string;
  x: number;
  y: number;
  r: number;
  location?: string;
  position?: number;
};

export interface Ele {
  id?: string;
  type?: EleType;
  data?: string | null;
  fill?: string;
};

export interface SeatMapData {
  onClickSeat?: () => void;
  onClickSections?: () => void;
  onError?: () => void;
  userId?: string;
  serviceLocation?: 'web' | 'mobile' | 'admin';
  seatSelected?: [];
  wheeLable: boolean;
  viewType: 'miniMap' | 'section'
}

export interface Section {
  name: string;
  elements: ElementNode[];
  rows?: Row[];
  isReservingSeat: boolean;
  isStage?: boolean;
  capacity?: number;
  status?: number;
  attribute?: Attribute;
};
