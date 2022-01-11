import React from 'react'

import styles from './slider.module.sass'
import bgImg from './assets/slider-image1.jpg'

import Htag from '../../components/Htag/HTag'
import P from '../../components/p/p'

const Slider = () => {


  const data = [
    {id: 1, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 2, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 3, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 4, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  ]

  const sliderImages = data.map(elem => <img key={elem.id} src={bgImg} alt="wakeman"  srcSet={bgImg} />)
  const sliderText = data.map(elem => <div key={elem.id} className={styles['slider__description-text']}> <Htag tag='h3' fontWeight={300} text={elem.title} color='white'/> <P textSize='m' color='white' text={elem.descr}/> </div> )


  return(
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles['slider__wrapper-image']}>
          {sliderImages}
        </div>
        <div className={styles.slider__description}>
          {sliderText}
        </div>
              
      </div>
      <div className="slider__controll">
        
      </div>
    </div>
  )
}

export default Slider