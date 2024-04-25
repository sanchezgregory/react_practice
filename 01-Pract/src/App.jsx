import { useState } from "react"
import CallbackCB from "./CallbackCB.jsx"
import CallbackIP from "./CallbackIP.jsx"
import CallbackRD from "./CallbackRD.jsx"
import './App.css'

function App() {

  const [colorCB, setColorCB] = useState()
  const [colorIP, setColorIP] = useState()
  const [colorRD, setColorRD] = useState()

  const changeColorByCB = (color) => {
    setColorCB(color)
  }

  const changeColorByInput = (color) => {
    setColorIP(color)
  }

  const changeColorByRadio = (color) => {
    setColorRD(color)
  }

  return (
    <>
    <div className="textBoxes"><h1>Pratica de JS Flex y React</h1></div>
    <div id="boxes" className="boxes">
      <div className="box1" style={{ background: colorCB }}>
        <CallbackCB func = {changeColorByCB} />
      </div>

      <div className="box2" style={{ background: colorIP}}> box2 <CallbackIP func = {changeColorByInput} /> </div>
      <div className="box3" style={{ background: colorRD}}> box3 <CallbackRD func = {changeColorByRadio} /> </div>
    </div>
    </>
  )
}

export default App
