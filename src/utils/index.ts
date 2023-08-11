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

export const hex2rgb = (hex: string, opacity?: number) => {
  let h: string | RegExpMatchArray | null = hex.replace("#", "");
  h = h.match(new RegExp("(.{" + h.length / 3 + "})", "g"));
  if (h?.length) {
    for (let i = 0; i < h?.length; i++)
      h[i] = String(parseInt(h?.[i].length == 1 ? h[i] + h[i] : h[i], 16));
  }
  if (opacity) h?.push(String(opacity));
  return "rgba(" + h?.join(",") + ")";
};
