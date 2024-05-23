import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Parcial de FrontEnd 3</h1>
      <h1>Cuál es tu personaje favorito?</h1>
      <Form />
    </>
  )
}

export default App
