import React from 'react'
import style from './Search.module.scss'
import { FiSearch } from 'react-icons/fi'

const Search = ({ openSearchModal }) => {
  return (
    <div className={style.search} onClick={() => openSearchModal(true)}>
      <FiSearch />
    </div>
  )
}

export default Search
