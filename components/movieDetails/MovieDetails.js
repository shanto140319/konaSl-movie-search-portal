import React, { useState } from 'react'
import { getVideos } from '../../api/getAllData'
import style from './MovieDetails.module.scss'
import Modal from '../common/Modal'
import Trailer from '../common/Trailer'

const MovieDetails = ({ movie }) => {
  const { id, title, release_date, genres, overview, production_companies } =
    movie

  const [loading, setLoading] = useState(false)
  const [showTrailer, setShowTrailer] = useState(false)
  const [video, setVideo] = useState(null)

  //close player
  const onClose = () => {
    setShowTrailer(false)
  }

  const handelTrailer = async () => {
    setLoading(true)
    const data = await getVideos(id)

    const trailer = data.results.find((item) => item.type === 'Trailer')
    setLoading(false)
    setVideo(trailer || data.results[0] || {})
    setShowTrailer(true)
  }

  return (
    <div className={style.details}>
      <h2 className={style.moivieTitle}>
        {title} &#40; {new Date(release_date).getFullYear()} &#41;
      </h2>
      <p className={style.genres}>
        {genres.map(({ name, id }, index) => {
          return (
            <React.Fragment key={id}>
              <span>{name}</span>
              {genres.length - 1 != index && ' . '}
            </React.Fragment>
          )
        })}
      </p>
      <div className={style.overview}>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div className={style.overview}>
        <h3>Production Companies</h3>
        <p>
          {production_companies.map(({ name, id }, index) => {
            return (
              <React.Fragment key={id}>
                <span>{name}</span>
                {production_companies.length - 1 != index && ' , '}
              </React.Fragment>
            )
          })}
        </p>
      </div>

      {showTrailer && !loading && (
        <Modal onClose={onClose}>
          <Trailer id={video.key} />{' '}
        </Modal>
      )}

      <button className='btn trailer-btn' onClick={handelTrailer}>
        Watch Trailer
      </button>
    </div>
  )
}

export default MovieDetails
