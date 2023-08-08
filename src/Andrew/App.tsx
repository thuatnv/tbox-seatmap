import { useState, ChangeEvent } from "react";
import Seatmap from "./Seatmap";

const App = () => {
  const [svgFile, setSvgFile] = useState<HTMLImageElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const image = new window.Image();
      image.src = e?.target?.result as string;
      setSvgFile(image);
    };

    reader.readAsDataURL(file as Blob);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/svg+xml" />
      {svgFile && <Seatmap svgFile={svgFile} />}
    </div>
  );
};

export default App;
