import React, { useContext, useState } from "react";
import Context from "../Stor";
import "../App.css";
import { HuePicker } from "react-color";

function Home() {
  const [color, setColor] = useState("#fff");
  const [italic, setItalic] = useState(false);
  const infos = useContext(Context);
  console.log(infos.selected_img);

  return (
    <div>
      <h1>Meme generator App</h1>
      <div className="inputs">
        {" "}
        <input
          type="text"
          value={infos.caption}
          onChange={(e) => infos.setCaption(e.target.value)}
          placeholder="caption"
        ></input>
        <button
          onClick={() => {
            setItalic(!italic);
          }}
        >
          Change fontStyle
        </button>
      </div>
      <br></br>

      <div className="color-picker">
        <HuePicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
        />
      </div>
      <br></br>
      <div className="selected_meme">
        <img src={infos.selected_img.ssimg}></img>
      </div>
      <p
        style={
          infos.selected_img.index === 0
            ? {
                position: "absolute",
                top: "30%",
                right: "46%",
                color,
                fontStyle: `${italic ? "italic" : "normal"}`,
              }
            : { display: "none" }
        }
      >
        {infos.caption}
      </p>
      <p
        style={
          infos.selected_img.index === 1
            ? {
                position: "absolute",
                top: "38%",
                right: "45%",
                color,
                fontStyle: `${italic ? "italic" : "normal"}`,
              }
            : { display: "none" }
        }
      >
        {infos.caption}
      </p>
      <p
        style={
          infos.selected_img.index === 2
            ? {
                position: "absolute",
                top: "72%",
                right: "44%",
                color,
                fontStyle: `${italic ? "italic" : "normal"}`,
              }
            : { display: "none" }
        }
      >
        {infos.caption}
      </p>
      <p
        style={
          infos.selected_img.index === 3
            ? {
                position: "absolute",
                top: "62%",
                right: "42%",
                color,
                fontStyle: `${italic ? "italic" : "normal"}`,
              }
            : { display: "none" }
        }
      >
        {infos.caption}
      </p>

      <div className="memes">
        <div>
          <h3>Select a meme to add capton ^*^</h3>
        </div>
        <div className="meme">
          {infos.imgs.map((img, i) => {
            return (
              <img
                src={img}
                key={i}
                onClick={() => {
                  const newimg = { ...infos.selected_img };
                  newimg.ssimg = img;
                  newimg.index = i;
                  infos.setImg(newimg);
                }}
                style={{ width: "200px", height: "200px" }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
