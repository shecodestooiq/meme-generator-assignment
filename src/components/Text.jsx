import React,{useState} from 'react'
import Draggable from 'react-draggable'

export default function Text({color,fontSize,bold,italic}) {
    const [editMode,setEditMode] = useState(false);
    const [value,setValue] = useState("Double Click to Edit")
    const style = { color: color,
                    fontSize: fontSize,
                    fontWeight: bold ? 'bold' : 'normal',
                    fontStyle: italic ? 'italic' : 'normal' };
  return (
    <div className='text'>
        <Draggable>
            {editMode ? (
            <input
             value={value}
             onDoubleClick={e=> setEditMode(false)}
             onChange={e=> setValue(e.target.value)}
             style={style}
             />
             ) : (
                <h3 onDoubleClick={e=> setEditMode(true)}
                style={style}
                >
                {value}
                </h3>
                )
            }
        </Draggable>
      
    </div>
  )
}
