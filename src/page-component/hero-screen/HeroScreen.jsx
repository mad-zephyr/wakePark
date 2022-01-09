import React from 'react'
import Button from '../../components/button/button'
import Htag from '../../components/Htag/HTag'
import styles from './HeroScreen.module.sass'
import P from '../../components/p/p'

const btnName='Посмотреть видео презентацию нашего вейкпарка'
const desqText = 'Мы всегда рядом с теми, кто объединяется ради любви к спорту, здоровому образу жизни и активному отдыху всей семьей.'

const HeroScreen = () => {

  return(
    <section className={styles.hero}>

      <div className="container">
        <div className={styles.hero__wrapper}>
          <Htag tag='h1' color='white' type='light' text={'WAKE days\nARE GOOD DAYS'}/>
          <P color='yellow' text='#WAKEPARKMD'/>

          <div className={styles.descriptor}>
            <P textSize='m' color='white' text={desqText}/>
          </div>

          <Button type='left' iconName='play' color='yellow' textSize='s' text={btnName}/>
        </div>
        
        
        <div className={styles.overlay}/>
      </div>
      <div className={styles.hero__img}/>
      <div className={styles.background}/>
    </section>
  )
}

export default HeroScreen