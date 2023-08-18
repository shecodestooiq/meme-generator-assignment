import { useContext } from "react";
import Context from "../store/store";
import { SketchPicker } from "react-color";
import ImageText from "./ImageText";

const InputStyle = () => {
  const {
    showComponent1,
    setShowComponent1,
    showComponent2,
    setShowComponent2,
    setColor,
    setColor2,
  } = useContext(Context);

  const handleClick1 = () => {
    setShowComponent1(!showComponent1);
  };

  const handleClick2 = () => {
    setShowComponent2(!showComponent2);
  };

  return (
    <div className="inputStyleContainer">
      <div>
        <ImageText />
      </div>

      <div>
        <div>
          <button className="colorDiv" onClick={handleClick1}></button>
          <div className={`color-picker ${showComponent1 ? "visible" : ""}`}>
            <SketchPicker
              width={200}
              height={200}
              onChangeComplete={(color) => {
                setColor(color.hex);
              }}
            />
          </div>
        </div>
        <div>
          <button className="colorDiv" onClick={handleClick2}></button>
          <div className={`color-picker ${showComponent2 ? "visible" : ""}`}>
            <SketchPicker
              width={200}
              height={200}
              onChangeComplete={(color) => {
                setColor2(color.hex);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputStyle;
