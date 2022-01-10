import React from 'react'
import styles from './secondScreen.module.sass'
import bgImage from './assets/cablepark53.jpeg'

const SecondScreen = () => {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__left}>
          <img src={bgImage} alt="" srcSet={bgImage} />
        </div>
        <div className={styles.section__right}>

        </div>
      </div>
    </section>
  )
}

export default SecondScreen