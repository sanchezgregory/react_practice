import { useState } from "react"

const CallbackCB = ( {func} ) => {

    const [newColor, setNewColor] = useState()

    const handleColor = (e) => {
        const {checked} = e.target
       if (checked) {
           setNewColor('yellow')
       } else setNewColor('green')
        func(newColor)
    }

    return (
        <>
            <div>
                <input type="checkbox" name="" id="" onChange={handleColor} /> Change color
            </div>
        </>
    )
}

export default CallbackCB