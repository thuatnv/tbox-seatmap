import { IRect } from "konva/lib/types";

export const extractWHFromViewBox = (viewBox: string): Partial<IRect> => {
  const values = viewBox.split(" ");
  return { width: Number(values[2]), height: Number(values[3]) };
};
