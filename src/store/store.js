import meme1 from "../assets/images/meme1.png";
import meme2 from "../assets/images/meme2.png";
import meme3 from "../assets/images/meme3.png";
import meme4 from "../assets/images/meme4.png";
import meme5 from "../assets/images/meme5.png";
import meme6 from "../assets/images/meme6.png";
import meme7 from "../assets/images/meme7.png";
import meme8 from "../assets/images/meme8.png";
import meme9 from "../assets/images/meme9.png";
import meme10 from "../assets/images/meme10.png";
import meme11 from "../assets/images/meme11.png";
import meme12 from "../assets/images/meme12.png";
import defaultMeme from "../assets/images/defaultMeme.png";
import { createContext, useState } from 'react'

const Context = createContext();

export function ImagesProvider({ children }) {
    const [showComponent1, setShowComponent1] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const [color, setColor] = useState({});
    const [color2, setColor2] = useState({});
    const [mainImg, setMainImg] = useState(defaultMeme);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const images = [
        {
            id: 0,
            img: meme1,
        },
        {
            id: 1,
            img: meme2,
        },
        {
            id: 2,
            img: meme3,
        },
        {
            id: 3,
            img: meme4,
        },
        {
            id: 4,
            img: meme5,
        },
        {
            id: 5,
            img: meme6,
        },
        {
            id: 6,
            img: meme7,
        },
        {
            id: 7,
            img: meme8,
        },
        {
            id: 8,
            img: meme9,
        },
        {
            id: 9,
            img: meme10,
        },
        {
            id: 10,
            img: meme11,
        },
        {
            id: 11,
            img: meme12,
        }
    ];
    return (
        <Context.Provider value={
            {
                showComponent1, setShowComponent1,
                showComponent2, setShowComponent2,
                color, setColor,
                color2, setColor2,
                text1, setText1,
                text2, setText2,
                mainImg, setMainImg, images
            }
        }>
            {children}
        </Context.Provider>
    );
}
export default Context;