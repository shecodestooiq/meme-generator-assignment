import { createContext, useState } from "react";

const Context=createContext();

export function DataProvider({children}){
    const imgs=[];
    for (let index = 1; index <= 4; index++) {
       imgs.push(require(`./assets/meme${index}.png`));
    }
    const [caption,setCaption]=useState("");
    const [selected_img,setImg]=useState({ssimg:imgs[1],index:1});

    return <Context.Provider value={{caption,setCaption,imgs,selected_img,setImg}}>{children}</Context.Provider>
}

export default  Context;