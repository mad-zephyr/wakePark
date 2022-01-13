import React,{ useState }  from 'react'
import Htag from './components/Htag/HTag'

import './global/styles.sass'
import './fonts/fonts.sass'
import './global/styles.sass'

import Header from './page-component/header/header'
import SideMenu from './page-component/side-menu/sideMenu'
import HeroScreen from './page-component/hero-screen/HeroScreen'
import SecondScreen from './page-component/second-screen/secondScreen'
import ThirdScreen from './page-component/third-screen/thirdScreen'
import FourthScreen from './page-component/fourth-screen/fourthScreen'
import InstaFeedScreen from './page-component/instaFeed-screen/instaFeedScreen'
import PartnerSection from './page-component/partnerSection/partnerSection'
import Footer from './page-component/footer/footer'

import mainBg from './assets/main-bg.jpg'
import secondBg from './assets/secondBg.jpg'
import backGround from './assets/bg.jpg'

const btnName='Посмотреть видео презентацию нашего вейкпарка'
const desqText = 'Мы всегда рядом с теми, кто объединяется ради любви к спорту, здоровому образу жизни и активному отдыху всей семьей.'
const links = ['команда', 'тренировки', 'о вейкпарке', 'партнеры', 'контакты' ]

function App () {
  const [open, setOpen] = useState(true)

  const handlerMenuOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <SideMenu state={open} />
      <Header state={open} handlerMenuOpen={handlerMenuOpen} links={links} />
      <HeroScreen 
        buttonIcon={'play'} 
        buttonText={btnName}
        diez='#WAKEPARKMD'  
        desqText={desqText} 
        hero
        backGround={mainBg}
      >  <Htag tag='h1' color='light' type='light' text={'WAKE days\nARE GOOD DAYS'}/>
      </HeroScreen>
      <SecondScreen title='Философия \n WAKEPARK.md'/>
      <ThirdScreen /> 
      <FourthScreen /> 
      <HeroScreen
        backGround={secondBg} 
        buttonIcon={'call'}
        buttonText={'Связаться с нашими Event-менеджерами'} 
        desqText={'Мы обожаем праздники! Поэтому наша команда с радостью устроит Вам незабываемый день по любому поводу, от Дня Рождения до рабочего корпоратива.'}
      > 
        <Htag tag='h2' color='light' type='light' text={'САМЫЕ КРУТЫЕ\nКОРПОРАТИВЫ'}/>
      </HeroScreen>
      <InstaFeedScreen backGround={backGround}/> 
      <PartnerSection /> 

      <Footer links={links}/>  
      
    </>
  )
}

export default App
