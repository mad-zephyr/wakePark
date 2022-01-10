import React from 'react'
import cn from 'classnames'
import styles from './Htag.module.sass'
import PropTypes from 'prop-types'

const Htag = (props) => {
  const {tag, text, type} = props

  switch (tag) {
  case 'h1':
    return <h1 className={cn(styles.h, styles.h1, {
      [styles.h3__dark]: type === 'dark',
      [styles.h3__light]: type === 'light',
    })} >{text}</h1>

  case 'h2':
    return <h2 className={cn(styles.h, styles.h2)} >{text}</h2>

  case 'h3':
    return <h3 className={cn(styles.h, styles.h3, {
      [styles.h3__dark]: type === 'dark',
      [styles.h3__light]: type === 'light',
    })} >{text}</h3>

  case 'h4':
    return <h4 className={cn(styles.h, styles.h4)} >{text}</h4>
    
  default:
    return <> </>
  }
}

Htag.defaultProps = {
  type: 'dark'
}

Htag.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string
}

export default Htag