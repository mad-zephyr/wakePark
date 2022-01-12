import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Htag from '../../components/Htag/HTag'
import styles from './instaFeedScreen.module.sass'
import P from '../../components/p/p'
import Button from '../../components/button/button'

const InstaFeedScreen = (props) => {
  const {backGround} = props

  const column = true
  
  return(
    <section 
      className={styles.section} 
      style={{background: `url(${backGround}) center center/cover no-repeat`, objectFit: 'cover'}}>
      <div className={cn('container', column && styles.container )}>
        <Htag tag='h3' color='light' center fontWeight={600} text='Instagram'/>
        <P text='#WAKEPARKMD' center color="yellow" />
        <Button iconName='calendar' color='white' text='Забронировать'/> 
      </div>
      
    </section>
  )
}


InstaFeedScreen.propTypes = {
  backGround: PropTypes.string.isRequired,
}

export default InstaFeedScreen