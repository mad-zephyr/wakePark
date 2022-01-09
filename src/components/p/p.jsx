import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import styles from './p.module.sass'
import '../../global/_colors.sass'

const P = (props) => {
  const { text, textSize, color } = props
  return (
    <div className={cn(styles.p, {
      [styles.l]: textSize === 'l',
      [styles.m]: textSize === 'm',
      [styles.s]: textSize === 's',
      [styles.p__yellow]: color === 'yellow',
      [styles.p__blue]: color === 'blue',
      [styles.p__white]: color === 'white'
    })}
    >
      {text}
    </div>
  )
}

P.defaultProps = {
  text: 'Default paragraph text',
  textSize: 'l',
  color: '#000'

}

P.propTypes = {
  text: PropTypes.string,
  textSize: PropTypes.string,
  color: PropTypes.string
}

export default P
