import React from "react";
import { SketchPicker } from "react-color";

function ColorPicker({ onChange }) {

  const handleChangeComplete = (newColor) => {
    onChange(newColor.hex);
  };

  return (
    <div>
      <SketchPicker
        color="#000000"
        width={200}
        height={200}
        className="color-picker"
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}

export default ColorPicker;
