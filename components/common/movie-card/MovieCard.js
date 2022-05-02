import React from 'react'
import Image from 'next/image'
import style from './MovieCard.module.scss'
import Link from 'next/link'
const MovieCard = ({ card }) => {
  const {
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    genre_ids,
    name,
    first_air_date,
  } = card
  return (
    <Link href={`/details/${id}`} passHref>
      <article className={style.card}>
        <Image
          src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_500}${poster_path}`}
          alt=''
          width={500}
          height={750}
          layout='responsive'
          className={style.poster}
        />
        <h4 className={style.title}>{title || name}</h4>
        <p className={style.date}>{release_date || first_air_date}</p>

        <div
          className={` ${
            vote_average >= 0 && vote_average < 5
              ? 'red'
              : vote_average > 4 && vote_average < 7
              ? 'orange'
              : vote_average > 6
              ? 'green'
              : null
          } ${style.rating}`}
        >
          <p>{vote_average}</p>
        </div>
      </article>
    </Link>
  )
}

export default MovieCard
