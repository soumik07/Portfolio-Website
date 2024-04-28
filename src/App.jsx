import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
