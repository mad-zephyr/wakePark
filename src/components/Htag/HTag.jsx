import React from 'react'
import cn from 'classnames'
import styles from './Htag.module.sass'
import PropTypes from 'prop-types'

const Htag = (props) => {
  const {tag, text, color, type, fontWeight } = props

  switch (tag) {
  case 'h1':
    return <h1 className={cn(styles.h, styles.h1, {
      [styles.h__dark]: color === 'dark',
      [styles.h__light]: color === 'light',
    })} >{text}</h1>

  case 'h2':
    return <h2 className={cn(styles.h, styles.h2)} >{text}</h2>

  case 'h3':
    return <h3 className={cn(styles.h, styles.h3, {
      [styles.h3__dark]: color === 'dark',
      [styles.h3__light]: color === 'light',
      [styles.white]: color === 'white',
      [styles.light__pre]: type === 'pre-light',
      [styles.dark__pre]: type === 'pre-dark',
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
  type: 'dark',
  fontWeight: 600
}

Htag.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  fontWeight: PropTypes.string,
}

export default Htag