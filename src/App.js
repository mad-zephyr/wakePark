import React, { useState }  from 'react'

import './global/styles.sass'
import './fonts/fonts.sass'
import './global/styles.sass'

import Header from './page-component/header/header'
import SideMenu from './page-component/side-menu/sideMenu'
import HeroScreen from './page-component/hero-screen/HeroScreen'
import SecondScreen from './page-component/second-screen/secondScreen'
import ThirdScreen from './page-component/third-screen/thirdScreen'
import InstaFeedScreen from './page-component/instaFeed-screen/instaFeedScreen'
import FourthScreen from './page-component/fourth-screen/fourthScreen'

import mainBg from './assets/main-bg.jpg'
import secondBg from './assets/secondBg.jpg'
import backGround from './assets/bg.jpg'

const btnName='Посмотреть видео презентацию нашего вейкпарка'
const desqText = 'Мы всегда рядом с теми, кто объединяется ради любви к спорту, здоровому образу жизни и активному отдыху всей семьей.'


function App () {
  const [open, setOpen] = useState(true)

  const handlerMenuOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <SideMenu state={open} />
      <Header state={open} handlerMenuOpen={handlerMenuOpen} />
      <HeroScreen 
        buttonIcon={'play'} 
        buttonText={btnName} 
        titleText={'WAKE days\nARE GOOD DAYS'} 
        diez='#WAKEPARKMD'  
        desqText={desqText} 
        hero
        backGround={mainBg}
      />
      <SecondScreen title='Философия \n WAKEPARK.md'/>
      <ThirdScreen /> 
      <FourthScreen /> 
      <HeroScreen
        backGround={secondBg}
        titleText={'САМЫЕ КРУТЫЕ\nКОРПОРАТИВЫ'} 
        buttonIcon={'call'}
        buttonText={'Связаться с нашими Event-менеджерами'} 
        desqText={'Мы обожаем праздники! Поэтому наша команда с радостью устроит Вам незабываемый день по любому поводу, от Дня Рождения до рабочего корпоратива.'}
      />
      <InstaFeedScreen backGround={backGround}/> 
    </>
  )
}

export default App
