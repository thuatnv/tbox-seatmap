import { IRect } from "konva/lib/types";

export const extractWHFromViewBox = (viewBox: string): Partial<IRect> => {
  const values = viewBox.split(" ");
  return { width: Number(values[2]), height: Number(values[3]) };
};

export const cssStrToObj = (stylesStr: string) =>
  stylesStr
    .split(";")
    .map((cur) => cur.split(":"))
    .reduce((acc: { [key: string]: string }, val) => {
      let key = val[0];
      if (key === "") return acc;
      const value = val[1];
      key = key.replace(/-./g, (css) => css.toUpperCase()[1]);
      acc[key] = value;
      return acc;
    }, {});

export const objToCssStr = (stylesObj: { [key: string]: string }): string => {
  return Object.entries(stylesObj)
    .map(([key, value]) => {
      const cssKey = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      );
      return `${cssKey}:${value}`;
    })
    .join(";");
};
