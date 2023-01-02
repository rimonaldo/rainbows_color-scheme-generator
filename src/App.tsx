import React, { useState } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import ColorWheel from './components/ColorWheel'
import { getTriade } from './services/color.service'
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color'
function App() {
   const [hex, setHex] = useState('#ffffff')
   const [triade, setTriade] = useState([hex, 'white', 'white'])

   const onColor = () => {
      let triade = getTriade(hex)
      if (!triade) return null
      console.log(triade)

      setTriade(triade)
   }

   return (
      <div className="App">
         <Wheel
            color={hex}
            onChange={color => {
               setHex(color.hex)
               onColor()
            }}
         />

         <div className="triade">
            <div className="color c-1" style={{ backgroundColor: triade[0] }}></div>
            <div className="color c-2" style={{ backgroundColor: triade[1] }}></div>
            <div className="color c-3" style={{ backgroundColor: triade[2] }}></div>
         </div>
      </div>
   )
}

export default App
