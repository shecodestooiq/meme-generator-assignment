import React, { useContext } from "react";
import Context from "../Stor";
import "../App.css";
function Home() {
  const infos = useContext(Context);
  return (
    <div>
      <h1>Meme generator App</h1>
      <input
        type="text"
        value={infos.caption}
        onChange={(e) => infos.setCaption(e.target.value)}
        placeholder="caption"
      ></input>
      {/* <input
        type="text"
        value={infos.caption2}
        onChange={(e) => infos.setCaption2(e.target.value)}
        placeholder="caption two"
      ></input> */}
      <br></br>
      <div className="selected_meme">
        <img src={infos.simg.ssimg} ></img>
      </div>
      <p style={infos.simg.index===0? {position:'absolute',top:"18%",right:"46%",color:"white"}:{display:"none"}}>{infos.caption}</p>
      <p style={infos.simg.index===1? {position:'absolute',top:"25%",right:"46%",color:"white"}:{display:"none"}}>{infos.caption}</p>
      <p style={infos.simg.index===2? {position:'absolute',top:"60%",right:"44%",color:"white"}:{display:"none"}}>{infos.caption}</p>
      <p style={infos.simg.index===3? {position:'absolute',top:"50%",right:"42%",color:"black"}:{display:"none"}}>{infos.caption}</p>

      <div className="memes">
      <div><h3>Select a meme to add capton ^*^</h3></div>  
       <div className="meme">
       {infos.imgs.map((img,i) => {
          return (
            <img
              src={img}
              key={i}
              onClick={() =>{const newimg={...infos.simg}
              newimg.ssimg=img
              newimg.index=i
              infos.setImg(newimg)
              infos.setCaption('')
            }
            }
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
