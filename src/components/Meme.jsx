import React from "react";
import mainTextStyle from "./styles/MainTextStyle";
import secondTextStyle from "./styles/SecondTextStyle";
import { saveAs } from "file-saver";

function Meme(props) {
  const {
    index,
    photo,
    mainInputText,
    textColor,
    secondaryInputText,
    isBold,
    isItalic,
  } = props;

  const commonStyles = {
    color: textColor,

    fontWeight: isBold ? "900" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    // whiteSpace: "nowrap"
  };

  const handleDownload = () => {
    // console.log(index);
    let url = `..images/meme${index}.png`;
    saveAs(url, "some-meme");
  };

  return (
    <div key={index} className="image-container">
      <img src={photo} alt={`Meme ${index}`} />
      {mainInputText && (
        <div className="image-text">
          <span
            style={{
              ...mainTextStyle[index],
              ...commonStyles,
            }}
          >
            {mainInputText}
          </span>
        </div>
      )}

      {secondaryInputText && (
        <span
          style={{
            ...secondTextStyle[index],
            ...commonStyles,
          }}
        >
          {secondaryInputText}
        </span>
      )}
      <br />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Meme;
