import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './href.module.sass'

const Href = (props) => {
  const {target, text, children, href} = props
  
  if (href && children) {
    return <a className={styles.link} href={href} rel="noreferrer" target='_blank'>{children}</a>
  }
  
  if (children) {
    return <Link className={styles.link} to={target}>{children}</Link> 
  }

  if (text) {
    return <Link className={styles.link} to={target}>{text}</Link> 
  }
}

Href.propTypes = {
  target: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string,
}

export default Href