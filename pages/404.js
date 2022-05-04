import React from 'react'
import style from '../styles/Error.module.scss'
import Link from 'next/link'
const Error = () => {
  return (
    <div className={style.error}>
      <h1 className={style.heading}>404</h1>
      <p>Hey captain Looks like You&apos;re heading to a wrong planet!</p>
      <Link href='/' passHref>
        <button className='btn'>Back to home</button>
      </Link>
    </div>
  )
}

export default Error
