import React, { useState , createRef} from 'react'
import { Link , useSearchParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SketchPicker } from 'react-color';


import Text from '../components/Text'
import { Button } from 'react-bootstrap';

export default function EditPage() {
    const [params]= useSearchParams();
    const [count,setCount] = useState(0);
    const [color, setColor] = useState('#000'); 
    const [bold,setBold] = useState(false);
    const [italic,setItalic] = useState(false);
    const [fontSize, setFontSize] = useState('16px');

    const [showColorPicker, setShowColorPicker] = useState(false);
    const toggleColorPicker = () => setShowColorPicker(!showColorPicker);

    const memeRef = createRef();
    const addText = () =>{
        setCount(count+1)
    }
  return (
    <>
    <Link to=".." relative="path" className='back'><FontAwesomeIcon className='fa' icon={faChevronLeft} />
         Back</Link>
    <div className='edit-card'>
        <div ref={memeRef} className='meme-card mt-5 mb-5'>
            <img src={params.get('url')} width="400px"/>
            {
            Array(count).fill(0).map(e=> <Text fontSize={fontSize} color={color} bold={bold} italic={italic} />)
            }
        </div>
        <div className="text-style">
            <div
            className='color-btn'
            onClick={toggleColorPicker}
            style={{ backgroundColor: color }}>
            </div>
            <div className="font-size">
            <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                <option value="12px">12</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
                <option value="24px">24</option>
            </select>
            </div>
            <div 
            className="bold"
            onClick={e=>  bold ? setBold(false): setBold(true) }
            style={{ fontWeight: bold ? 'bold' : 'normal' }}
            >
                B
            </div>
            <div 
            className="italic"
            onClick={e=> { italic ? setItalic(false): setItalic(true) }}
            style={{ fontStyle: italic ? 'italic' : 'normal' }}
            >
                I
            </div>
        </div>

        <Button className='edit-btn' onClick={addText}>Add Text</Button>
        <Button className='save-btn' onClick={e=> exportComponentAsJPEG(memeRef)}>Save</Button>
        {showColorPicker && (
             <div className="color-picker-container">
               <SketchPicker color={color} onChange={c => setColor(c.hex)} />
             </div>
           )}
    </div>
    </>
    
  )
}
