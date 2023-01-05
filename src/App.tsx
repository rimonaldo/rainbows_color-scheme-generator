import React, { useState } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import ColorWheel from './components/ColorWheel'
import { getTriade } from './services/color.service'
import Monochromatic from './components/schemes/Monochromatic'
import Triadic from './components/schemes/Triadic'
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color'
function App() {
   const [hex, setHex] = useState('#FFFFFF')
   const [hsl, setHsl] = useState([])
   const [triad, setTriad] = useState([hex, 'white', 'white'])

   const onColor = () => {
      let triad = getTriade(hex)
      if (!triad) return null
      console.log(triad)

      setTriad(triad)
   }

   return (
      <div className="App">
         <Wheel
            style={{ margin: '3rem auto' }}
            color={hex}
            onChange={color => {
               setHex(color.hex)
               onColor()
            }}
         />
         <h1>Triadic</h1>
         {/* <Monochromatic hex={hex}  /> */}
         <Triadic triad={triad} />
      </div>
   )
}

export default App
