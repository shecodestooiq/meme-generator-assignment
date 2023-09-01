import { useState } from "react";
import { useContext } from "react";
import { MemeContext } from "../store/store";

function Preview() {
  const { styling, setStyling } = useContext(MemeContext);

  return (
    <div className="preview">
      <img id="img-preview" src={styling.imgUrl} />
      <h1
        id="meme-text"
        style={{ color: styling.color, fontSize: styling.size }}
      >
        {styling.topText}
      </h1>
    </div>
  );
}

export default Preview;
