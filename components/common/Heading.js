import React from 'react'
import Title from './Title'
import style from './common.module.scss'
import ViewAll from './ViewAll'
const Heading = ({ title, url }) => {
  return (
    <div className={style.heading}>
      <Title>{title}</Title>
      <ViewAll url={url} />
    </div>
  )
}

export default Heading
