import React, { useState } from "react";
import { SketchPicker } from "react-color";

import "./App.css"; // Make sure to have a CSS file for styling

export default function App() {
  
  const imageUrls = [
    "https://images.pexels.com/photos/346886/pexels-photo-346886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1643843/pexels-photo-1643843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/812955/pexels-photo-812955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/545682/pexels-photo-545682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/398469/pexels-photo-398469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
  const [textInputs, setTextInputs] = useState(["", ""]);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [textColor, setTextColor] = useState(" "); // Default text color
  const [showColorPicker, setShowColorPicker] = useState(false);


  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleTextInputChange = (index, value) => {
    const newInputs = [...textInputs];
    newInputs[index] = value;
    setTextInputs(newInputs);
  };

  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage;
      link.download = "selected-image.jpg";
      link.click();
    }  
  };
  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };

  return (
    <div className="image-container">
      <div className="thumbnails">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`img${index}`}
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>
      <div className="selected-image">
        {selectedImage && (
          <div className="selected-image-wrapper">
            <img src={selectedImage} alt="selected-img" />
            <div
              className={`overlay-text input-1 ${isBold ? "bold" : ""} ${
                isItalic ? "italic" : ""
              }`}
              style={{ color: textColor }}

            >
              {textInputs[0]}
            </div>
          </div>
        )}
        <input
          type="text"
          placeholder="Enter text"
          value={textInputs[0]}
          onChange={(e) => handleTextInputChange(0, e.target.value)}
        />

<button onClick={handleBoldToggle}>Bold</button>
        <button onClick={handleItalicToggle}>Italic</button>
        <button onClick={() => setShowColorPicker(!showColorPicker)}>
          Toggle Color Picker
        </button>
        {showColorPicker && (
          <div className="color-picker">
            <SketchPicker color={textColor} onChange={handleColorChange} />
          </div>
        )}
        <button onClick={handleDownload}>Download Image</button>
      </div>
    </div>
  );
}
