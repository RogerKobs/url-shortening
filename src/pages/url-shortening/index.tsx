import React from 'react'
import CardStatistics from './components/cardStatistics'
import Footer from './components/footer'
import Menu from './components/menu'
import Shortening from './components/shortening'

import style from './home.module.scss'

export default function UrlShortening() {
  return (
    <div>
      <div className={style.container}>
        <Menu />

        <div className={style.containerApresentation}>
          <div className={style.containerText}>
            <div className={style.title}>
              <p>More than just </p>
              <p>shorter links</p>
            </div>

            <div className={style.subTitle}>
              <p>Build your brand's recognition and get detailed </p>
              <p>insights on how your links are performing</p>
            </div>

            <button className={style.button}>Get started</button>
          </div>

          <img src="./images/illustration-working.svg" alt="Illustration working" />
        </div>

        <Shortening />

        <div className={style.containerStatistics}>
          <p className={style.titleStatistics}>Advanced Statistics</p>

          <div className={style.subTitle}>
            <p>Track how your links are performing acrros the web with</p>
            <p>out advanced statistics dashboard</p>
          </div>

          <div className={style.cardStatistics}>
            <CardStatistics
              icon="icon-brand-recognition.svg"
              title="Brand Recignition"
              message="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />

            <CardStatistics
              icon="icon-detailed-records.svg"
              title="Detail Records"
              message="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />

            <CardStatistics
              icon="icon-fully-customizable.svg"
              title="Fully Customizable"
              message="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
          </div>
        </div>

      </div>

      <div className={style.containerBoost}>
        <p>Boost your links today</p>

        <button className={style.button}>Get Started</button>
      </div>

      <Footer />
    </div>
  )
}
