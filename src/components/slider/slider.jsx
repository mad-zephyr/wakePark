/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import cn from 'classnames'

import { ReactComponent as Right } from './assets/bi_arrow-left.svg'
import { ReactComponent as Left } from './assets/bi_arrow-right.svg'

import styles from './slider.module.sass'
import bgImg1 from './assets/Rectangle 28.jpg'
import bgImg2 from './assets/Rectangle 29.jpg'
import bgImg3 from './assets/Rectangle 28-2.jpg'
import bgImg4 from './assets/Rectangle 28-3.jpg'
import bgImg5 from './assets/Rectangle 28-1.jpg'
import bgImg6 from './assets/Rectangle 29-1.jpg'
import bgImg7 from './assets/Rectangle 28-3.jpg'
import bgImg8 from './assets/Rectangle 29-3.jpg'


import Htag from '../../components/Htag/HTag'
import P from '../../components/p/p'

const data = [
  {id: 1, img: bgImg1, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 2, img: bgImg2, title: 'Вейкскейт', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 3, img: bgImg3, title: 'Водные лыжи', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 4, img: bgImg4, title: 'SUP Surf', descr: 'Сапсёрфинг (от SUP — англ. Standup paddleboarding; — водный вид спорта, разновидность сёрфинга, в котором серфер, стоя на доске, катается на волнах и при этом гребет веслом, а не руками, как в классическом серфинге....'},
  {id: 5, img: bgImg5, title: 'Слэклайн', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 6, img: bgImg6, title: 'Пилотажный кайт', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 7, img: bgImg7, title: 'Workout зона', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 8, img: bgImg8, title: 'Квадроцикл', descr: 'Сапсёрфинг (от SUP — англ. Standup paddleboarding; — водный вид спорта, разновидность сёрфинга, в котором серфер, стоя на доске, катается на волнах и при этом гребет веслом, а не руками, как в классическом серфинге....'},

]

const Slider = () => {
  const [sliderPos, setSliderPos] = useState(0)

  const onClickLeftArrow = () => {
    setSliderPos(prevPos => {
      return prevPos === 0 
        ? (data.length - 1)
        : (prevPos -= 1)
    })
  }

  const onClickRightArrow = () => {
    setSliderPos(prevPos => {
      if (prevPos === data.length - 1){
        prevPos = 0
        return prevPos
      }
      return ++prevPos
    })
  }

  const onClickDot = (index) => {
    console.log(index)
    setSliderPos(index)
  }

  const sliderImages = data.map(elem => (
    <div key={elem.id} 
      className={styles.slider__slide} 
      style={{transform: `translateY(-${(sliderPos ) * 208}px)`}} 
    >

      <img src={elem.img} alt="wakeman"  srcSet={elem.img}/>
      <div key={elem.id} className={styles['slider__description-text']}> 
        <Htag tag='h3' fontWeight={300} text={elem.title} color='white'/> 
        <P textSize='m' color='white' text={elem.descr}/> 
      </div>
    </div>
  ))


  const navDots = data.map((elem, index) => (
    <span 
      key={elem.id} 
      className={cn(styles.nav__dot, {
        [styles.nav__dot_active]: sliderPos + 1 === elem.id
      })} 
      onClick={() => onClickDot(index)}>
    </span>
  ))


  return(
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>

        {sliderImages}
              
      </div>
      <div className={styles.slider__control}>
        <div className={styles['slider__control-arrows']}>
          <div onClick={onClickLeftArrow} className={styles['slider__control-left']}>
            <Left />
          </div>
          <div onClick={onClickRightArrow} className={styles['slider__control-right']}>
            <Right />
          </div>
        </div>
        <div className={styles['slider__control-nav']}>
          {navDots}
        </div>
      </div>
    </div>
  )
}

export default Slider