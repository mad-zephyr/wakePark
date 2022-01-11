import React, { useState }  from 'react'

import './global/styles.sass'
import './fonts/fonts.sass'
import Header from './page-component/header/header'

import SideMenu from './page-component/side-menu/sideMenu'
import HeroScreen from './page-component/hero-screen/HeroScreen'
import SecondScreen from './page-component/second-screen/secondScreen'
import ThirdScreen from './page-component/third-screen/thirdScreen'
import './global/styles.sass'
import FourthScreen from './page-component/fourth-screen/fourthScreen'

function App () {
  const [open, setOpen] = useState(true)

  const handlerMenuOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <SideMenu state={open} />
      <Header state={open} handlerMenuOpen={handlerMenuOpen} />
      <HeroScreen/>
      <SecondScreen title='Философия \n WAKEPARK.md'/>
      <ThirdScreen /> 
      <FourthScreen />
      <ThirdScreen /> 
    </>
  )
}

export default App
