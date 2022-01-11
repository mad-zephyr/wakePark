import React from 'react'
import styles from './thirdScreen.module.sass'

import Htag from '../../components/Htag/HTag'
import Slider from '../../components/slider/slider'

const ThirdScreen = () => {
  
  return(
    <section className={styles.section}> 
      <div className={styles.container}>
        <div className={styles.section__left}>
          <Htag tag='h3' type='pre-light' color='light' text={'Услуги\nнашего парка'}/>
        </div>
        <div className={styles.section__right}>

          <Slider/>

        </div>
      </div>
    </section>
  )
}

export default ThirdScreen