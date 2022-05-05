import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/authcontext'
import style from './Watchlist.module.scss'
import Toolip from '../common/Toolip'

const WatchList = ({ id, title, poster, date }) => {
  const [watchlist, setWatchlist] = useState([])
  const [message, setMessage] = useState('')

  const { currentUser } = useAuth()
  useEffect(() => {
    const localvalue = JSON.parse(localStorage.getItem('watchlist'))
    if (localvalue) {
      setWatchlist(localvalue)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage('')
    }, 2000)
    return () => clearTimeout(timeout)
  })
  const handleWatchlist = () => {
    if (!currentUser) {
      setMessage('You have to login first!')
    } else {
      const existingList = JSON.parse(localStorage.getItem('watchlist')) || []

      const newlist = [
        {
          id: id,
          title: title,
          poster_path: poster,
          release_date: date,
        },
      ]
      const exist = existingList.find((list) => list.id === id)

      if (exist) {
        setMessage('Already Exist')
      } else {
        setMessage('Added to Watchlist')
        setWatchlist((prevlist) => [...prevlist, ...newlist])
      }
    }
  }

  useEffect(() => {
    if (watchlist.length) {
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }
  }, [watchlist])

  return (
    <div className={style.watchlistWrapper}>
      <button className='btn' onClick={handleWatchlist}>
        Add watchlist
      </button>
      {message && <Toolip>{message}</Toolip>}
    </div>
  )
}

export default WatchList
