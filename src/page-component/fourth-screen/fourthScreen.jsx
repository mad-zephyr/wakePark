import React from 'react'
import Htag from '../../components/Htag/HTag'
import styles from './fourthScreen.module.sass'

import { ReactComponent as WakeManSVG } from './assets/border-shillouette.svg'



const FourthScreen = () => {

  return(
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__left}>
          <Htag tag='h3' type='pre-dark' color='dark' text={'Наша\nкоманда'}/>
          <WakeManSVG className={styles.section__img}/>
        </div>
        <div className={styles.section__right}>

        </div>
      </div>
    </section>
  )
}

export default FourthScreen