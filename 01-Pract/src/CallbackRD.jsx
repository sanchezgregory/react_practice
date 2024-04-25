import { useState } from "react"

const CallbackRD = ( {func} ) => {

    const [newColor, setNewColor] = useState('white')

    const handleColor = (e) => {
        const {value} = e.target
        setNewColor(value)
        func(value)
    }

    return (
        <>
            <div>
                <input type="radio" name="color" onChange={handleColor} value="red" /> red
                <input type="radio" name="color" onChange={handleColor} value="green"/> green
            </div>
        </>
    )
}

export default CallbackRD