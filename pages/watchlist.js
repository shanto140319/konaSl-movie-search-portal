import React, { useState, useEffect } from 'react'
import MovieCard from '../components/common/movie-card/MovieCard'
import Title from '../components/common/Title'
import style from '../styles/ViewAll.module.scss'
import Head from 'next/head'

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([])
  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    setWatchlist(watchlist)
  }, [])

  return (
    <section className='section' style={{ marginTop: 30 }}>
      <Head>
        <title>WatchList</title>
      </Head>
      <Title>WatchList</Title>
      <div className={style.cardWrapper}>
        {watchlist &&
          watchlist.map((card, index) => {
            return <MovieCard key={index} card={card} />
          })}
      </div>
    </section>
  )
}
Watchlist.layout = 'L1'
export default Watchlist
