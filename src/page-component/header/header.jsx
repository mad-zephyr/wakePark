import React from 'react'
import styles from './header.module.sass'

import Button from '../../components/button/button'
import {ReactComponent as Logo} from './assets/logo.svg'
import MenuOpener from '../../components/menuOpener/menuOpener'
import PropTypes from 'prop-types'
import Href from '../../components/Href/Href'
import P from '../../components/p/p'

const links = ['команда', 'тренировки', 'о вейкпарке', 'партнеры', 'контакты' ]

const Header = ({handlerMenuOpen, state}) => {
  
  const headerLinks = links.map(link => (
    <li key={link} className={styles.a}> 
      <Href target={`/${link}`}>{link}</Href>
    </li> 
  ))

  return (
    <> 
      <nav className={styles.header}>
        <div className="container">
          <div className={styles.main}>
            <div className={styles.logo}>
              <Href target='/'>
                <Logo/>
              </Href>
            </div>

            <ul className={styles.link__block}>
              {headerLinks}
            </ul>

            <div className={styles.header__button}>
              <Button iconName='calendar' text='Забронировать' color='yellow'/>
            </div>
          </div>

          <div className={styles.menu}>
            <P color={state ? 'yellow' : 'black'} textSize='m' text='Наши услуги'/>
            <MenuOpener handler={handlerMenuOpen} state={state}/>
          </div>

        </div>
        
      </nav>
    </>
  )
}

Header.propTypes = {
  state: PropTypes.bool,
  handlerMenuOpen: PropTypes.func,
}

export default Header