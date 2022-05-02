import React from 'react'
import CreditsSlider from '../common/CreditsSlider'
import Title from '../common/Title'
import style from './CastAndCrew.module.scss'
const CastAndCrew = ({ credits }) => {
  return (
    <div className={style.creditsWrapper}>
      <Title>Cast</Title>
      <div style={{ marginTop: 15 }}></div>
      <CreditsSlider data={credits.cast} />
      <Title>Crew</Title>
      <div style={{ marginTop: 15 }}></div>
      <CreditsSlider data={credits.crew} />
    </div>
  )
}

export default CastAndCrew
