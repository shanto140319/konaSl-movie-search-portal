import Link from 'next/link'
import React from 'react'
import style from './common.module.scss'

const ViewAll = ({ url }) => {
  return (
    <Link href={url}>
      <a className={style.viewAll}>View all</a>
    </Link>
  )
}

export default ViewAll
