import React from 'react'
import Htag from '../../components/Htag/HTag'
import styles from './thirdScreen.module.sass'

import bgImg from './assets/slider-image1.jpg'
import P from '../../components/p/p'

const ThirdScreen = () => {

  const data = [
    {id: 1, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 2, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 3, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
    {id: 4, img: bgImg, title: 'Вейкборд', descr: 'То, ради чего и появилось наше место. Отличная альтернатива для сноубордистов и крутейший летний вид спорта для каждого! Вейкборд не только...'},
  ]

  const sliderImages = data.map(elem => <img key={elem.id} src={bgImg} alt="wakeman"  srcSet={bgImg} />)
  const sliderText = data.map(elem => <div key={elem.id} className="slider-description"> <Htag tag='h3' fontWeight={300} text={elem.title} color='white'/> <P /> </div> )

  return(
    <section className={styles.section}> 
      <div className={styles.container}>
        <div className={styles.section__left}>
          <Htag tag='h3' type='pre-light' color='light' text={'Услуги\nнашего парка'}/>
        </div>
        <div className={styles.section__right}>

          <div className={styles.slider}>
            <div className={styles.slider__wrapper}>
              <div className={styles['slider__wrapper-image']}>
                {sliderImages}
              </div>
              <div className="slider__wrapper-text">
                {sliderText}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ThirdScreen