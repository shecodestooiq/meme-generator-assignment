import React, { useState, useEffect } from "react";
import './App.css';


import meme1 from "./assets/meme1.jpeg";
import meme2 from "./assets/meme2.jpeg";
import meme3 from "./assets/meme3.jpeg";
import meme4 from "./assets/meme4.jpeg";
import meme5 from "./assets/meme5.jpeg";
import meme6 from "./assets/meme6.jpeg";

const memeTemplates = [
  {
    id: 1,
    name: "Template 1",
    url: meme1,
    width: 500,
    height: 500,
  },
  {
    id: 2,
    name: "Template 2",
    url: meme2,
    width: 500,
    height: 500,
  },
  {
    id: 3,
    name: "Template 3",
    url: meme3,
    width: 500,
    height: 500,
  },
  {
    id: 4,
    name: "Template 4",
    url: meme4,
    width: 500,
    height: 500,
  },
  {
    id: 5,
    name: "Template 5",
    url: meme5,
    width: 500,
    height: 500,
  },
  {
    id: 6,
    name: "Template 6",
    url: meme6,
    width: 500,
    height: 500,
  },
];

const fonts = ["Arial", "Verdana", "Helvetica", "Georgia", "Times New Roman"];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [fontSize, setFontSize] = useState(30);
  const [textColor, setTextColor] = useState("black");
  const [textFont, setTextFont] = useState("Arial");
  const [topTextPositionX, setTopTextPositionX] = useState(0);
  const [topTextPositionY, setTopTextPositionY] = useState(40);
  const [bottomTextPositionX, setBottomTextPositionX] = useState(0);
  const [bottomTextPositionY, setBottomTextPositionY] = useState(20);
  const [generatedMeme, setGeneratedMeme] = useState(null);

  const handleInputChange = (e, type) => {
    const text = e.target.value;
    if (type === "top") {
      setTopText(text);
    } else if (type === "bottom") {
      setBottomText(text);
    }
  };

  const handleFontChange = (e) => {
    setTextFont(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleTopTextPositionXChange = (e) => {
    setTopTextPositionX(parseInt(e.target.value));
  };

  const handleTopTextPositionYChange = (e) => {
    setTopTextPositionY(parseInt(e.target.value));
  };

  const handleBottomTextPositionXChange = (e) => {
    setBottomTextPositionX(parseInt(e.target.value));
  };

  const handleBottomTextPositionYChange = (e) => {
    setBottomTextPositionY(parseInt(e.target.value));
  };

  useEffect(() => {
    if (selectedTemplate) {
       // If a meme template is selected:

    // Create a blank canvas to draw on.
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d"); // Get the drawing tools.
      
 // Load the selected meme template image.
      const templateImage = new Image();
      templateImage.src = selectedTemplate.url;
      templateImage.onload = () => {
        // Set canvas size to match the image.
        canvas.width = templateImage.width;
        canvas.height = templateImage.height;
// Draw the template image on the canvas.
        ctx.drawImage(templateImage, 0, 0);

        ctx.font = `${fontSize}px ${textFont}`;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        // Calculate positions for top and bottom text.
        const xTop = canvas.width / 2 + topTextPositionX;
        const yTop = topTextPositionY;

        const xBottom = canvas.width / 2 + bottomTextPositionX;
        const yBottom = canvas.height - bottomTextPositionY;
    // Draw the top and bottom text on the canvas.
        ctx.fillText(topText, xTop, yTop);
        ctx.fillText(bottomText, xBottom, yBottom);
// Convert the canvas content to a downloadable image.
        const generatedImageUrl = canvas.toDataURL("image/jpeg");

       // Update the state with the generated meme image
        setGeneratedMeme(generatedImageUrl);
      };
    }
  }, [
    selectedTemplate,
    topText,
    bottomText,
    fontSize,
    textColor,
    textFont,
    topTextPositionX,
    topTextPositionY,
    bottomTextPositionX,
    bottomTextPositionY,
  ]);

  const handleDownload = () => {
    if (generatedMeme) {
      const link = document.createElement("a");
      link.href = generatedMeme;
      link.download = "custom-meme.jpg";
      link.click();
    }
  };
  return <div style={{ textAlign: "center", fontFamily: textFont }}>
    <h1>Meme Generator</h1>
    <div className="container">
      {selectedTemplate ? (
        <div className="meme-container">
          <img
            src={selectedTemplate.url}
            alt={selectedTemplate.name}
            className="meme-image"
          />
          <div className="text-inputs">
            <input
              placeholder="Top Text"
              value={topText}
              onChange={(e) => handleInputChange(e, "top")}
            />
            <input
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => handleInputChange(e, "bottom")}
            />
            <label>
              Font Size:
              <input
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </label>
            <label>
              Text Color:
              <input
                type="color"
                value={textColor}
                onChange={handleColorChange}
              />
            </label>
            <label>
              Text Font:
              <select value={textFont} onChange={handleFontChange}>
                {fonts.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </label>
            <div className="position-inputs">
              <div>
                <label>
                  Top Text X Position:
                  <input
                    type="number"
                    value={topTextPositionX}
                    onChange={handleTopTextPositionXChange}
                  />
                </label>
                <label>
                  Top Text Y Position:
                  <input
                    type="number"
                    value={topTextPositionY}
                    onChange={handleTopTextPositionYChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Bottom Text X Position:
                  <input
                    type="number"
                    value={bottomTextPositionX}
                    onChange={handleBottomTextPositionXChange}
                  />
                </label>
                <label>
                  Bottom Text Y Position:
                  <input
                    type="number"
                    value={bottomTextPositionY}
                    onChange={handleBottomTextPositionYChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Pick a meme template</h2>
          <div className="template-container">
            {memeTemplates.map((template) => (
              <div
                key={template.id}
                className="template-item"
                onClick={() => setSelectedTemplate(template)}
              >
                <img
                  src={template.url}
                  alt={template.name}
                  className="template-image"
                />
                <p className="template-name">{template.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    {generatedMeme && (
      <div>
        <h2>Generated Meme</h2>
        <img
          src={generatedMeme}
          alt="Generated Meme"
          className="generated-meme"
        />
        <button className="btn" onClick={handleDownload}>Download Meme</button>
      </div>
    )}

  </div>;
}



export default App;















