import React from 'react'
import style from './movie-card/MovieCard.module.scss'
import Image from 'next/image'

const Creditscard = ({ card }) => {
  const { profile_path, name } = card
  return (
    <article className={style.card} style={{ maxWidth: 200 }}>
      <Image
        src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_500}${profile_path}`}
        alt=''
        width={500}
        height={750}
        layout='responsive'
        className={style.poster}
      />
      <p>{name}</p>
    </article>
  )
}

export default Creditscard
