import React, { useState }  from 'react'

import './global/styles.sass'
import './fonts/fonts.sass'
import Header from './page-component/header/header'

import SideMenu from './page-component/side-menu/sideMenu'
import HeroScreen from './page-component/hero-screen/HeroScreen'
import SecondScreen from './page-component/second-screen/secondScreen'

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
      <SecondScreen/>
    </>
  )
}

export default App
