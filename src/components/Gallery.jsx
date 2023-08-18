import { useContext, useState } from "react";
import InputStyle from "./InputStyle";
import Context from "../store/store";

const Gallery = () => {
  const { mainImg, setMainImg, images, color, color2, text1, text2 } =
    useContext(Context);
  const [textStyle1, setTextStyle1] = useState({});
  const [textStyle2, setTextStyle2] = useState({});

  const handleImgClick = (id) => {
    images.forEach((img) => {
      if (id === img.id && img.id === 0) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "25%",
          right: "65%",
          maxWidth: "200px",
        });
        setTextStyle2({
          color: "white",
          top: "67%",
          right: "70%",
          maxWidth: "200px",
        });
      } else if (id === img.id && img.id === 1) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "45%",
          right: "60%",
          maxWidth: "120px",
        });
        setTextStyle2({
          color: "white",
          top: "73%",
          right: "61%",
          maxWidth: "200px",
        });
      } else if (id === img.id && img.id === 2) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "20%",
          right: "57%",
          maxWidth: "400px",
        });
        setTextStyle2({
          color: "white",
          top: "60%",
          right: "64%",
          maxWidth: "200px",
        });
      } else if (id === img.id && img.id === 3) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "maroon",
          top: "27%",
          right: "58%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
        setTextStyle2({
          color: "maroon",
          top: "51%",
          right: "58%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
      } else if (id === img.id && img.id === 4) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "50%",
          right: "60%",
          maxWidth: "300px",
          textShadow: "0px 0px 4px #000000",
        });
        setTextStyle2({
          color: "white",
          top: "79%",
          right: "64%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
      } else if (id === img.id && img.id === 5) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "27%",
          right: "55%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
        setTextStyle2({
          color: "maroon",
          top: "27%",
          right: "70%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
      } else if (id === img.id && img.id === 6) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "20%",
          right: "55%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
        setTextStyle2({
          color: "maroon",
          top: "20%",
          right: "70%",
          maxWidth: "200px",
          textShadow: "0px 0px 4px #000000",
        });
      } else if (id === img.id && img.id === 7) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "22%",
          right: "56%",
          maxWidth: "170px",
        });
        setTextStyle2({
          color: "maroon",
          top: "22%",
          right: "70%",
          maxWidth: "170px",
        });
      } else if (id === img.id && img.id === 8) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "39%",
          right: "62%",
          maxWidth: "400px",
        });
        setTextStyle2({
          color: "maroon",
          top: "62%",
          right: "70%",
          maxWidth: "200px",
        });
      } else if (id === img.id && img.id === 9) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "22%",
          right: "60%",
          maxWidth: "200px",
        });
        setTextStyle2({
          color: "maroon",
          top: "69%",
          right: "59%",
          maxWidth: "400px",
        });
      } else if (id === img.id && img.id === 10) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "36%",
          right: "71%",
          maxWidth: "100px",
        });
        setTextStyle2({
          color: "maroon",
          top: "22%",
          right: "56%",
          maxWidth: "180px",
        });
      } else if (id === img.id && img.id === 11) {
        setMainImg(images[id].img);
        setTextStyle1({
          color: "white",
          top: "29%",
          right: "62%",
          maxWidth: "100px",
        });
        setTextStyle2({
          color: "maroon",
          top: "29%",
          right: "73%",
          maxWidth: "100px",
        });
      }
    });
  };

  return (
    <>
      <div className="mainContainer">
        <div className="mainMeme">
          <img src={mainImg} alt="meme" />
          <div className="textStyle" style={{ ...textStyle1, color: color }}>
            <h1 style={{ color: { color } }}>{text1}</h1>
          </div>
          <div className="textStyle" style={{ ...textStyle2, color: color2 }}>
            <h1 style={{ color: { color2 } }}>{text2}</h1>
          </div>
        </div>
        <div className="secondSection">
          <div className="galleryContainer">
            {images.map((img) => {
              return (
                <div className="imgContainer">
                  <img
                    src={img.img}
                    alt="meme"
                    onClick={() => handleImgClick(img.id)}
                  />
                </div>
              );
            })}
          </div>
          <InputStyle />
        </div>
      </div>
    </>
  );
};
export default Gallery;
