import React, { useState, useEffect, useRef } from 'react'
import style from './Search.module.scss'
import { RiListSettingsLine } from 'react-icons/ri'
import { getSearch } from '../../../api/getAllData'
import MovieCard from '../movie-card/MovieCard'

const SearchContent = ({ onClose }) => {
  //definig state
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')
  const [year, setYear] = useState(null)
  const [debounceYear, setDebounceYear] = useState(null)
  const [dropdown, setDropdown] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const dropdownRef = useRef(null)

  //clik outside dropdown close
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false)
    }
  }

  //making query debounced so every time user type doesn't make an api call
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceQuery(query)
      setDebounceYear(year)
    }, 800)

    return () => clearTimeout(timeOut)
  }, [query, year])

  useEffect(() => {
    const searchFunction = async () => {
      if (debounceQuery.length > 2) {
        const response = await getSearch(debounceQuery, 1, debounceYear)
        setLoading(true)
        setTotalPage(response.total_pages)
        setPage(response.page)
        setData(response.results)
        setLoading(false)
      }
    }
    searchFunction()
  }, [debounceQuery, debounceYear])

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  const loadMore = async () => {
    setLoading(true)
    const response = await getSearch(debounceQuery, page + 1, debounceYear)
    setTotalPage(response.total_pages)
    setPage(response.page)
    setData([...data, ...response.results])
    setLoading(false)
  }

  return (
    <div className={style.searchContent}>
      <div className={style.inputWrapper}>
        <input
          type='text'
          className={style.textInput}
          onChange={handleSearch}
        />
        <RiListSettingsLine onClick={() => setDropdown(!dropdown)} />
        {dropdown && (
          <div className={style.dropdown} ref={dropdownRef}>
            <label htmlFor='year'>Year</label>
            <input
              className={style.numberInput}
              id='year'
              type='number'
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className={style.resultsWrapper}>
        <div className={style.results}>
          {data &&
            data.map((card, index) => {
              return <MovieCard key={index} card={card} onClose={onClose} />
            })}
        </div>
        {loading && <div className='loader'></div>}
        {data && totalPage > page && (
          <div className={style.buttonWrapper}>
            <button className='btn loadmore-btn' onClick={loadMore}>
              Load more..
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchContent
