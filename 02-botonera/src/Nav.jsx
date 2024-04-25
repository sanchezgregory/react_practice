import { useState, useEffect } from "react";
import './Nav.css'
export default function Nav({name, username}) {

    const [newStyle, setNewStyle] = useState('')
    
    function handleClic() {
        let st = ['brown', '5px solid white']
        setNewStyle(st)
    }

    const background = newStyle[0] != undefined ? newStyle[0] : 'white'
    const border = newStyle[1] != undefined ? newStyle[1] : 'red'

    return (
        <tr className='card' onClick={handleClic} style={{ background: background, border:border }} >
            <td>
                {name}
            </td>
            <td>
                {username}
            </td>
        </tr>
    )
}