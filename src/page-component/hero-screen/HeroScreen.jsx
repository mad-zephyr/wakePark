/* eslint-disable react/prop-types */
import React from 'react'

import PropTypes from 'prop-types'
import Button from '../../components/button/button'
import Htag from '../../components/Htag/HTag'
import styles from './HeroScreen.module.sass'
import P from '../../components/p/p'


const HeroScreen = (props) => {
  const {buttonIcon, buttonText, titleText, diez, desqText, hero, backGround } = props

  return(
    <section className={styles.hero}>

      <div className="container">
        <div className={styles.hero__wrapper}>
          <Htag tag='h1' color='light' type='light' text={titleText}/>
          {diez && <P color='yellow' text={diez}/>}

          <div className={styles.descriptor}>
            <P textSize='m' color='white' text={desqText}/>
          </div>

          <Button type='left' iconName={buttonIcon} color='yellow' textSize='s' text={buttonText}/>
        </div>
        
        <div className={styles.overlay}/>
      </div>
      {hero && <div className={styles.hero__img}/>}
      <img className={styles.background} src={backGround} alt="bacground" srcSet={backGround} />
    </section>
  )
}

HeroScreen.propTypes = {
  titleText: PropTypes.string,
  desqText: PropTypes.string,
  buttonIcon: PropTypes.string,
  buttonText: PropTypes.string,
  diez: PropTypes.string,
  backGround: PropTypes.string,
  hero: PropTypes.bool,
}

export default HeroScreen