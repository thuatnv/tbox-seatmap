import { cssStrToObj } from "utils";

export const ALL_SEAT_STATUS: string[] = [
  "available",
  "disabled",
  "holding",
  "ordered",
  "readOnly",
  "selected",
];

export const SEAT_STYLES_RAW: Record<string, string> = Object.freeze({
  available: "fill:#ffffff;stroke:#9C9B9B;",
  disabled: "fill:#C2C1C1;stroke:#C2C1C1;",
  holding: "fill:#D32F2F;stroke:#D32F2F;",
  ordered: "fill:#F44336;stroke:#D32F2F;pointer-events:none;",
  readOnly: "fill:#ffffff;stroke:#9C9B9B;pointer-events:none;",
  selected: "fill:#ffffff;stroke:#08CE7C;",
});
export const SEAT_STYLES_PARSED: Record<string, object> = Object.freeze({
  available: cssStrToObj(SEAT_STYLES_RAW.available),
  disabled: cssStrToObj(SEAT_STYLES_RAW.disabled),
  holding: cssStrToObj(SEAT_STYLES_RAW.holding),
  ordered: cssStrToObj(SEAT_STYLES_RAW.ordered),
  readOnly: cssStrToObj(SEAT_STYLES_RAW.readOnly),
  selected: cssStrToObj(SEAT_STYLES_RAW.selected),
});
