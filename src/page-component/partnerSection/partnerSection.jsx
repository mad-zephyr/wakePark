import React from 'react'
import cn from 'classnames'
import Htag from '../../components/Htag/HTag'
import styles from './partnerSection.module.sass'

import * as Logo from './assets/logo/logo'

const PartnerSection = () => {

  const logoPartners = Object.values(Logo)
    .map((elem, index) => (
      <img key={index} src={elem} alt=""/>
    ))

  return (
    <section className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.section__left}>
          <Htag tag='h3' type='pre-dark' color='dark' text={'Наши\n партнеры'}/>
        </div>
        <div className={styles.section__right}>
          <div className={styles.section__partners}>
            {logoPartners}
          </div>
        </div>
      </div>
      <div className={styles.shilloutte}/>
    </section>
  )
}

export default PartnerSection