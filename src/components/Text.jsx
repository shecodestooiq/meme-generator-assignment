import { useState } from "react";
import { useContext } from "react";
import { MemeContext } from "../store/store";
import {ReactComponent as SizeUp} from "../assets/font.svg";

function TextInput(){
return(<div className="text-input">
    <input type="text">
    </input>
    <div className="font-size">
    <SizeUp width={24}></SizeUp>
    <SizeUp width= {28}></SizeUp>
    </div>
</div>)
}

export default TextInput;