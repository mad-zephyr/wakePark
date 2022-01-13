import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Htag from '../../components/Htag/HTag'
import styles from './instaFeedScreen.module.sass'
import P from '../../components/p/p'
import Button from '../../components/button/button'
 

import img1  from './assets/Rectangle 23.jpg'
import img2  from './assets/Rectangle 24.jpg'
import img3  from './assets/Rectangle 25.jpg'
import img4  from './assets/Rectangle 26.jpg'
import img5  from './assets/Rectangle 27.jpg'

const instaData = [
  {id:1, imgLink: img1},
  {id:2, imgLink: img2},
  {id:3, imgLink: img3},
  {id:4, imgLink: img4},
  {id:5, imgLink: img5},
]

const InstaFeedScreen = (props) => {
  const {backGround} = props
  const column = true

  const instaFeed = instaData.map(elem => (
    <img key={elem.id} 
      className={styles.insta__post}
      alt="insta image" 
      src={elem.imgLink}  
    />
  ))

  if(window.innerWidth < 425 ) {
    instaFeed.length = 4
  }
  
  return(
    <section
      className={styles.section} 
      style={{background: `url(${backGround}) center center/cover no-repeat`, objectFit: 'cover'}}>
      
      <div className={cn('container', column && styles.container )}>

        <Htag tag='h3' color='white' center   fontWeight={600} text='Instagram'/>
        <Htag tag='h3' color='white'  type='pre-light' fontWeight={600} text='Instagram'/>
        <P text='#WAKEPARKMD' center color="yellow" />

        <div className={styles.insta__feed}>
          {instaFeed}
        </div>

        <Button iconName='calendar' color='white' text='Забронировать'/>
      </div>
      <div className={styles.waveBorder}></div>
    </section>
  )
}


InstaFeedScreen.propTypes = {
  backGround: PropTypes.string.isRequired,
}

export default InstaFeedScreen