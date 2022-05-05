import React from 'react'
import CreditsSlider from '../common/CreditsSlider'
import Title from '../common/Title'
import style from './CastAndCrew.module.scss'
const CastAndCrew = ({ credits }) => {
  return (
    <div className={style.creditsWrapper}>
      <Title>Cast</Title>
      <div className={style.marginTop}></div>
      <CreditsSlider data={credits.cast} />

      <Title>Crew</Title>
      <div className={style.marginTop}></div>
      <CreditsSlider data={credits.crew} />
    </div>
  )
}

export default CastAndCrew
