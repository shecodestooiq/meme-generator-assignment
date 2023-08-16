import React from "react";
import { useState } from "react";
import { MemeContext } from "../store/store";
import drake from '../images/drake.jpg';
import draw25 from '../images/draw25.jpg';
import homer from '../images/homer.jpg';
import leftExit from '../images/leftexit.jpg';
import pushUp from '../images/pushup.jpg';
import twoButtons from '../images/Two-Buttons.jpg';


function MemeProvider({children}){
    const[styling, setStyling] = useState({
        font: '',
        color: '',
        size: ''});

    const[memeImage, setMemeImage] = useState([
        { 
            id: 1,
            src: drake,
            alt: "Drake Meme",
        },
        {
            id: 2,
            src: draw25,
            alt: "Draw25 Meme",
        },
        {
            id:3,
            src: homer,
            alt: "Homer Meme",
        },
        {
            id:4,
            src: leftExit,
            alt: "Left Exit Meme",
        },
        {
            id:5,
            src: pushUp,
            alt: "One Push Up Meme",
        },
        {
            id:6,
            src: twoButtons,
            alt: "Two Buttons Meme",
        }

    ]);

    return (
        <MemeContext.Provider value={{styling, setStyling, memeImage, setMemeImage}}>
            {children}
        </MemeContext.Provider>
    )
}

export default MemeProvider;