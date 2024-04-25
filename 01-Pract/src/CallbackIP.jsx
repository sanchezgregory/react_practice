import { useState } from "react"

const CallbackIP = ( {func} ) => {

    const [newColor, setNewColor] = useState()

    const handleColor = (e) => {
       const {value} = e.target
       setNewColor(value)
       func(value)
    }

    return (
        <>
            <div>
                <input type="text" onChange={handleColor} />
            </div>
        </>
    )
}

export default CallbackIP