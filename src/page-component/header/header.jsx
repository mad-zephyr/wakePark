import React from 'react'
import styles from './header.module.sass' 

import Button from '../../components/button/button'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import MenuOpener from '../../components/menuOpener/menuOpener'
import PropTypes from 'prop-types'
import Href from '../../components/Href/Href'
import P from '../../components/p/p'



const Header = ({handlerMenuOpen, state, links}) => {
  
  const headerLinks = links.map(link => (
    <li key={link} className={styles.a}> 
      <Href target={`/${link}`}>{link}</Href>
    </li> 
  ))

  return (
    <> 
      <nav className={styles.header}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Href target='/'>
              <Logo/>
            </Href>
          </div>

          <ul className={styles.link__block}>
            {headerLinks}
          </ul>

          <Button iconName='calendar' text='Забронировать' color='yellow'/>
        </div>

        <div className={styles.menu}>
          <P color={state && window.innerWidth > 425  ? 'yellow' : state && window.innerWidth <= 425  ? 'orange' :  'black'} textSize='m' text='Наши услуги'/>
          <MenuOpener handler={handlerMenuOpen} state={state}/>
        </div>

        
      </nav>
    </>
  )
}

Header.propTypes = {
  state: PropTypes.bool,
  handlerMenuOpen: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.string)
}

export default Header