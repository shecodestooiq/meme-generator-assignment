

import React, { useState } from "react";
import image1 from "./7zybxm.jpg";
import image2 from "./download (1).png";
import image3 from "./download.png";
import TextField from "@mui/material/TextField";

import "./App.css";

function ImageZoom() {
  const [selectedImage, setSelectedImage] = useState(null); 
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [font, setFont] = useState("Arial"); 
  const [textColor, setTextColor] = useState("black"); 

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleTextChange2 = (e) => {
    setText2(e.target.value);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const toggleSelectedImage = (image) => {
    setSelectedImage(image === selectedImage ? null : image);
  };

  const fontOptions = ["Arial", "Times New Roman", "Verdana", "Tahoma", "Courier New"];

  return ( <>
    <div className="imga">
      <div onClick={() => toggleSelectedImage(image1)}>
        <img
          src={image1}
          alt="my"
          style={{
            width: selectedImage === image1 ? "200px" : "100px",
          }}
        />
        {selectedImage === image1 && (
          <div className="text-overlay">
            <p
              style={{//
                fontFamily: font,  
                color: textColor, 
              }}
            >
              {text}
            </p>
            <div className="text-overlay2">
              <p
                style={{
                  fontFamily: font, 
                  color: textColor, 
                }}
              >
                {text2}
              </p>
            </div>
          </div>
        )}
      </div>

      <div onClick={() => toggleSelectedImage(image2)}>
        <img
          src={image2}
          alt="my"
          style={{
            width: selectedImage === image2 ? "300px" : "200px",
          }}
        />
        {selectedImage === image2 && (
          <div className="text-overlay">
            <p
              style={{
                fontFamily: font, 
                color: textColor, 
              }}
            >
              {text}
            </p>
            <div className="text-overlay2">
              <p
                style={{
                  fontFamily: font, 
                  color: textColor, 
                }}
              >
                {text2}
              </p>
            </div>
          </div>
        )}
      </div>

      <div onClick={() => toggleSelectedImage(image3)}>
        <img
          src={image3}
          alt="my"
          style={{
            width: selectedImage === image3 ? "200px" : "100px",
          }}
        />
        {selectedImage === image3 && (
          <div className="text-overlay">
            <p
              style={{
                fontFamily: font, 
                color: textColor, 
              }}
            >
              {text}
            </p>
            <div className="text-overlay2">
              <p
                style={{
                  fontFamily: font, 
                  color: textColor, 
                }}
              >
                {text2}
              </p>
            </div>
          </div>
        )}
      </div>
</div>
      <div className="text">
        <TextField
          id="text"
          label="text 1"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="text">
        <TextField
          id="text2"
          label="text 2"
          variant="outlined"
          value={text2}
          onChange={handleTextChange2}
        />
      </div>
      <div className="font-controls">
        <label>Font: </label>
        <select value={font} onChange={handleFontChange}>
          {fontOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="color-controls">
        <label>Text Color: </label>
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </div>
   </>
  );
}

export default ImageZoom;

