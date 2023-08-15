import { createContext, useState } from "react";

const Context=createContext();

export function DataProvider({children}){
    const imgs=[];
    for (let index = 1; index <= 4; index++) {
       imgs.push(require(`./assets/meme${index}.png`));
    }
    const [caption,setCaption]=useState("");
    const [caption2,setCaption2]=useState("");
    const [simg,setImg]=useState([{ssimg:<img src={imgs[1]}/>,index:1}]);
    return <Context.Provider value={{caption,setCaption,caption2,setCaption2,imgs,simg,setImg}}>{children}</Context.Provider>
}

export default  Context;