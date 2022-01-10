import React from 'react'
import styles from './secondScreen.module.sass'
import bgImage from './assets/cablepark53.jpeg'
import { ReactComponent as Man } from './assets/man-shillouette.svg'

const SecondScreen = () => {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__left}>
          <img src={bgImage} alt="wakepark man on board" srcSet={bgImage} />
        </div>
        
        <div className={styles.section__right}>
          
          <div className={styles.section__element}>
            <Man/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondScreen