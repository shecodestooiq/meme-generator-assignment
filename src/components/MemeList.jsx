import { useState } from "react";
import { useContext } from "react";
import { MemeContext } from "../store/store";

function MemeList(){
const {memeImage, setMemeImage} = useContext(MemeContext);
const {styling, setStyling} = useContext(MemeContext);

    return (<div className="image-selection"> 
         {memeImage.map((image) => (
        <img 
        key={image.id} 
        src={image.src} 
        alt={image.alt}
        style={{ height: '6rem' }}
        onClick={()=> {setStyling(prev => ({...styling, imgUrl: image.src}))}} />
      ))}
    </div>);
}

export default MemeList;