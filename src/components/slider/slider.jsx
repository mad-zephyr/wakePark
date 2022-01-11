import React, { useState, useRef } from 'react'
import cn from 'classnames'

import { ReactComponent as Right } from './assets/bi_arrow-left.svg'
import { ReactComponent as Left } from './assets/bi_arrow-right.svg'

import styles from './slider.module.sass'
import bgImg from './assets/slider-image1.jpg'

import Htag from '../../components/Htag/HTag'
import P from '../../components/p/p'

const data = [
  {id: 1, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 2, img: bgImg, title: 'Вейкскейт', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 3, img: bgImg, title: 'Водные лыжи', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  {id: 4, img: bgImg, title: 'SUP Surf', descr: 'Сапсёрфинг (от SUP — англ. Standup paddleboarding; — водный вид спорта, разновидность сёрфинга, в котором серфер, стоя на доске, катается на волнах и при этом гребет веслом, а не руками, как в классическом серфинге....'},
]

const Slider = () => {
  const [sliderPos, setSliderPos] = useState(0)
  const imageTrack = useRef(null)
  const descriptTrack = useRef(null)

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
    setSliderPos(index)
  }

  const sliderImages = data.map(elem => <img key={elem.id} src={bgImg} alt="wakeman"  srcSet={bgImg} />)
  const sliderText = data.map(elem => (
    <div key={elem.id} className={styles['slider__description-text']}> 
      <Htag tag='h3' fontWeight={300} text={elem.title} color='white'/> 
      <P textSize='m' color='white' text={elem.descr}/> 
    </div>
  ) )
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
        <div ref={imageTrack} 
          style={{transform: `translateY(-${(sliderPos ) * 208}px)`}} 
          className={styles['slider__wrapper-image']}>
          {sliderImages}
        </div>
        <div 
          ref={descriptTrack} 
          style={{transform: `translateY(-${(sliderPos) * (168 + 24)}px)`}} 
          className={styles.slider__description}>
          {sliderText}
        </div>
              
      </div>
      <div className={styles.slider__control}>
        <div className={styles['slider__control-arrow']}>
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