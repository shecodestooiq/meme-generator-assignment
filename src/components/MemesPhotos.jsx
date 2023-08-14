import React, { useContext, useState } from "react";
import images from "../data/imagesGetter";
import Masonry from "react-masonry-css";
import InputTextContext from "../data/InputProvider";
import ColorPicker from "./ColorPicker";
import Meme from "./Meme";

function MemesPhotos() {
  const { mainInputText, secondaryInputText } = useContext(InputTextContext);
  const [textColor, setTextColor] = useState("#000000");
  const [showPicker, setShowPicker] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);


  return (
    <>
      <div className="center-container">
        <div className="cp">
          <div
            onClick={() => setShowPicker(!showPicker)}
            className="show-cp"
          ></div>
          {showPicker && (
            <ColorPicker onChange={(color) => setTextColor(color)} />
          )}
        </div>

        <div className="bold" onClick={(e) => setBold(!bold)}>
          <span>Bold</span>
        </div>
        <div className="italic" onClick={(e) => setItalic(!italic)}>
          <span>Italic</span>
        </div>
      </div>

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((photo, index) => (
          <Meme
            key={index}
            index={index}
            photo={photo}
            mainInputText={mainInputText}
            textColor={textColor}
            secondaryInputText={secondaryInputText}
            isBold={bold}
            isItalic={italic}
          />
        ))}
      </Masonry>
    </>
  );
}

export default MemesPhotos;
