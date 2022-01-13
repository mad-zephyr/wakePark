import React from 'react'
import cn from 'classnames'
import styles from './Htag.module.sass'
import PropTypes from 'prop-types'

const Htag = (props) => {
  const {tag, text, color, type, fontWeight, center } = props

  switch (tag) {
  case 'h1':
    return <h1 className={cn(styles.h, styles.h1, {
      [styles.h__dark]: color === 'dark',
      [styles.h__light]: color === 'light',
    })} >{text}</h1>

  case 'h2':
    return <h2 className={cn(styles.h, styles.h2, {
      [styles.h__dark]: color === 'dark',
      [styles.h__light]: color === 'light',
    })}>{text}</h2>

  case 'h3':
    return <h3 className={cn(styles.h, styles.h3, {
      [styles.h__dark]: color === 'dark',
      [styles.h__yellow]: color === 'yellow',

      [styles.white]: color === 'white',
      [styles.light__pre]: type === 'pre-light',
      [styles.dark__pre]: type === 'pre-dark',

      [styles.center]: center === true,
      [styles.light]: fontWeight === 300,
      [styles.bold]: fontWeight === 600
    })}> {text} </h3>

  case 'h4':
    return <h4 className={cn(styles.h, styles.h4)} >{text}</h4>
    
  default:
    return <> </>
  }
}

Htag.defaultProps = {
  tag: 'h3',
  type: 'dark',
  text: 'Default Text',
  fontWeight: 600
}

Htag.propTypes = {
  color: PropTypes.string,
  center: PropTypes.bool,
  tag: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,

  fontWeight: PropTypes.number,
}

export default Htag