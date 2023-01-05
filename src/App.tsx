import { useState } from 'react'
import './styles/main.scss'
import { getTriade } from './services/color.service'
import Triadic from './components/schemes/Triadic'
import Hero from './features/header/Header'
import { Wheel } from '@uiw/react-color'
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
         <Hero />
         <Wheel
            style={{ margin: '3rem auto' }}
            color={hex}
            onChange={color => {
               setHex(color.hex)
               onColor()
            }}
         />
         <h2>Triadic</h2>
         {/* <Monochromatic hex={hex}  /> */}
         <Triadic triad={triad} />
      </div>
   )
}

export default App
