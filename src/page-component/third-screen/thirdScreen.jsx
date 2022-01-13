import React from 'react'
import cn from 'classnames'
import styles from './thirdScreen.module.sass'
import Href from '../../components/Href/Href'

import Htag from '../../components/Htag/HTag'
import Slider from '../../components/slider/slider'

const ThirdScreen = () => {
  
  return(
    <section className={styles.section}> 
      <div className={cn('container', styles.container)}>
        <div className={styles.section__left}>
          <Htag 
            tag='h3' 
            type='pre-light' 
            color='yellow' 
            text={'Услуги\nнашего парка'}
          />
          <Href 
            target='/services' 
            text='Показать все услуги'
          />
        </div>
        <div className={styles.section__right}>
          <Slider/>
        </div>
      </div>
    </section>
  )
}

export default ThirdScreen