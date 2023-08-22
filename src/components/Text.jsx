import { useState } from "react";
import { useContext } from "react";
import { MemeContext } from "../store/store";
import {ReactComponent as SizeUp} from "../assets/font.svg";
import { ReactComponent as Icon } from "../logo.svg";

function TextInput(){
    const {styling, setStyling} = useContext(MemeContext);

return(<div className="text-input">
    <input type="text"
    onChange={(e) => {setStyling(prev => ({...styling, topText: e.target.value}))}}
    >
    </input>
    <div className="font-size">
        <SizeUp  id="size-up-icon"
        onClick={()=> {setStyling(prev => ({...styling, size: `${parseInt(prev.size) + 10}px`}))}}
        />
        <SizeUp id="size-down-icon"
         onClick={()=> {setStyling(prev => ({...styling, size: `${parseInt(prev.size) - 10}px`}))}}/>
    </div>
</div>)
}
export default TextInput;