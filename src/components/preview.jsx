import { useState } from "react";
import { useContext } from "react";
import { MemeContext } from "../store/store";

function Preview(){
const {memeImage, setMemeImage} = useContext(MemeContext);

    return (<div>
         {memeImage.map((image) => (
        <img 
        key={image.id} 
        src={image.src} 
        alt={image.alt}
        style={{ height: '25rem' }} />
      ))}
    </div>);
}

export default Preview;