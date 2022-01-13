import React from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames'
import Href from '../../components/Href/Href'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import styles from './footer.module.sass'
import Button from '../../components/button/button'

import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import { ReactComponent as InstagragIcon } from '../../assets/instagram.svg'


const Footer = (props) => {
  const {links} = props 
  const headerLinks = links.map(link => (
    <li key={link} className={styles.a}> 
      <Href target={`/${link}`}>{link}</Href>
    </li> 
  ))


  return(
    <section className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.logo}>
          <Href target='/'>
            <Logo/>
          </Href>
        </div>
        <ul className={styles.link__block}>
          {headerLinks}
        </ul>
        <div className={styles.social}>
          <Href href='https://www.facebook.com/wakepark.md'>
            <FacebookIcon />
          </Href>
          <Href href='https://www.facebook.com/wakepark.md'>
            <InstagragIcon />
          </Href>
        </div>
        <Button iconName='calendar' color='yellow' text='Забронировать' />
      </div>
    </section>
  )
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string)
}

export default Footer