import Slider from "@mui/material/Slider";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";

export default function FontSizeSliderPoster() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();

  const handleChange = (_event: Event, fontSize: number | number[]) => {
    if (typeof fontSize === "number") {
      const leftSide = Math.floor(design.posterFont.emSize);
      const newEmSize = parseFloat(
        leftSide.toString() + "." + fontSize.toString()
      );

      designDispatch({
        type: "set-poster-fonts",
        payload: {
          ...design.posterFont,
          emSize: newEmSize,
          sliderSize: fontSize,
        },
      });
    }
  };

  return (
    <Slider
      size="small"
      value={design.posterFont.sliderSize}
      defaultValue={design.posterFont.sliderSize}
      step={1}
      marks
      min={0}
      max={6}
      aria-label="שינוי גודל טקסט"
      valueLabelDisplay="auto"
      onChange={handleChange}
    />
  );
}
