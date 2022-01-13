import React from 'react'

import cn from 'classnames'
import SuperEllipse from 'react-superellipse'
import Htag from '../../components/Htag/HTag'
import styles from './fourthScreen.module.sass'

import { ReactComponent as WakeManSVG } from './assets/border-shillouette.svg'
import P from '../../components/p/p'

import shilloueteBlack from './assets/shillouette-black.png'
import shilloueteWhite from './assets/shillouette-white.png' 

import dmirtiiFace from './assets/dmitrii.jpg'
import alexFace from './assets/alex.jpg'
import nataliaFace from './assets/natalia.jpg'


const FourthScreen = () => {
  const data = [
    {id: 1, name: 'Дмитрий', job: 'инструктор-оператор', img: dmirtiiFace},
    {id: 2, name: 'Алекс', job: 'инструктор', img: alexFace},
    {id: 3, name: 'Наталья', job: 'менеджер', img: nataliaFace},
  ]

  const sliderFace = data.map(person => (

    <div key={person.id} className={styles.person}>
      <SuperEllipse 
        className={styles.person__face} 
        r1={0.0586} 
        r2={0.332} 
        style={{width: 196, height: 196, background: `url(${person.img}) center center/cover no-repeat`, objectFit: 'cover'}} 
      />
       
      <P center textSize='m' text={person.name}/>
      <P center textSize='s' text={person.job}/>
  
    </div>
  ))

  return (
    <section className={styles.section}>
      <img className={styles.shillouete__black} src={shilloueteBlack} alt='wakePark' srcSet={shilloueteBlack} />
      <img className={styles.shillouete__white} src={shilloueteWhite} alt='wakePark' srcSet={shilloueteWhite} />
      <div className={cn('container', styles.container)}>
        <div className={styles.section__left}>
          <Htag 
            tag='h3' 
            type='pre-dark' 
            color='dark' 
            text={'Наша\nкоманда'}
          />
          <WakeManSVG className={styles.section__img}/>
        </div>
        <div className={styles.section__right}>
          <div className={styles.person__block}>
            {sliderFace}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FourthScreen