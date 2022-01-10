import React from 'react'
import cn from 'classnames'
import P from '../p/p'
import PropTypes from 'prop-types'

import { ReactComponent as CalendarIcon } from './assets/Calendar.svg'
import { ReactComponent as Play } from './assets/fad_play.svg'
import { ReactComponent as Call } from './assets/carbon_phone.svg'

import styles from './button.module.sass'

const Button = (props) => {
  const { iconName, text, color, textSize, type, border, fill } = props

  return (
    <button  
      className={cn(styles.btn,
        {
          [styles.btn__yellow]: border === 'yellow',
          [styles.btn__blue]: border === 'blue',
          [styles.btn__white]: border === 'white',
          [styles.left]: type === 'left',
          [styles.center]: type === 'center',
          [styles.fill]: fill === true,
        }
      )}
    >
      {iconName === 'calendar' &&
        <CalendarIcon
          className={cn(
            {
              [styles.yellow]: color === 'yellow',
              [styles.blue]: color === 'blue',
              [styles.white]: color === 'white'
            }
          )}
        />
      }
      {iconName === 'call' &&
        <div className={styles.round}>
          <Call
            className={cn(
              {
                [styles.yellow]: color === 'yellow',
                [styles.blue]: color === 'blue',
                [styles.white]: color === 'white'
              }
            )}
          />
        </div>
      }
      {iconName === 'play' &&
        <div className={styles.round}>
          <Play
            className={cn(
              {
                [styles.yellow]: color === 'yellow',
                [styles.blue]: color === 'blue',
                [styles.white]: color === 'white'
              }
            )}
          />
        </div>
      }

      <P text={text} textSize={textSize} color={color}/>
    </button>
  )
}

Button.defaultProps = {
  text: 'Default Text',
  color: 'red',
  textSize: 'l',
  type: 'center',
  border: 'white'
}

Button.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.string,
  type: PropTypes.string,
  border: PropTypes.string,
  fill: PropTypes.bool
}

export default Button
