import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './sideMenu.module.sass'
import Htag from '../../components/Htag/HTag'

import Href from '../../components/Href/Href'
 
const SideMenu = ({state}) => {
  const links = {
    first: ['Вейкборд', 'Вейкскейт', 'Водные лыжи', 'SUP Surf'],
    second: ['Слэклайн', 'Пилотажный кайт', 'Скейтборд', 'Workout зона', 'Слэклайн', 'Пилотажный кайт', 'Водный мотоцикл', 'Квадроциклы', 'Катамаран'],
    third: ['Корпоративы', 'Специальные услуги']
  }

  const firstMenuLinks = <ul> 
    {links.first.map((links, index) => {
      return <li id={links} key={links+index}>
        <Href  target={`${links}#${links}`}>
          <Htag text={links} tag='h2'/>
        </Href> 
      </li>
    })}
  </ul>

  const secondMenuLinks = <ul>
    {links.second.map((links, index) => (
      <li key={links+index}> <Href text={links} target={`${links}#${links}`} >
        <Htag tag='h4' text={links}/> 
      </Href>
      </li>
    ))}
  </ul>

  const thirdMenuLinks = <ul>
    {links.third.map((links, index) => <li key={links+index} >
      <Href text={links} target={links}>
        <Htag tag='h4' text={links}/> 
      </Href>
    </li> )}
  </ul>

  return (
    <div className={cn(styles.menu, state && styles['menu-open'])}>
      <div className="container">
        <div className={styles.menu__wrapper}>
          <div className={styles.first}>
            {firstMenuLinks}
          </div>
          <div className={styles.second}>
            {secondMenuLinks}
          </div>
          <div className={styles.third}>
            {thirdMenuLinks}
          </div>
        </div>
      </div>
      <div className={styles.background__element}/>
    </div>
  )

}

SideMenu.propTypes = {
  state: PropTypes.bool.isRequired
}

export default SideMenu