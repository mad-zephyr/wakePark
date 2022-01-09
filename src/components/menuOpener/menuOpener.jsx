import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './menuOpener.module.sass'

const MenuOpener = ({handler, state}) => {

  return (
    <div onClick={() => handler()} className={cn(styles.menu, state ? styles.menu__open : styles.menu__close)}>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

MenuOpener.propTypes = {
  handler: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired
}

export default MenuOpener