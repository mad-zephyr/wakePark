import React from 'react'
import styles from './secondScreen.module.sass'
import bgImage from './assets/cablepark53.jpeg'
import { ReactComponent as Man } from './assets/man-shillouette.svg'
import Htag from '../../components/Htag/HTag'
import P from '../../components/p/p'
import Button from '../../components/button/button'

const SecondScreen = () => {

  const descr = 'Наш вейк-парк создан для того, чтобы продвигать летние экстремальные виды спорта, а также расширять границы активного отдыха на природе.\n\nМы занимаемся тренировками для профессиональных спортсменов, организовываем детско-юношеские школы по вейкборду, а также тренируем спорстменов-любителей. Наши опытные инструкторы совершенно бесплатно обучат детей катанию на доске.'

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__left}>
          <img src={bgImage} alt="wakepark man on board" srcSet={bgImage} />
        </div>
        
        <div className={styles.section__right}>
          <div className={styles.section__wrapper}>
            <Htag tag='h3' type='pre-dark' color='dark' text={'Философия \n WAKEPARK.md'}/>
            <P textSize='m' text={descr}/>
            <Button iconName='calendar' text='Забронировать' fill color='blue'/>
          </div>

          <div className={styles.section__element}>
            <Man/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondScreen