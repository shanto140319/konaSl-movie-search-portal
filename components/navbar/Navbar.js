import Link from 'next/link'
import React from 'react'
import { useAuth } from '../../context/authcontext'
import style from './nav.module.scss'

const Navbar = () => {
  const { currentUser, logout, signInWithGoogle } = useAuth()
  return (
    <nav className={style.root}>
      <Link href='/'>
        <a className={style.logo}> Movie Search Portal</a>
      </Link>

      {currentUser ? (
        <div className={style.user}>
          <img
            className={style.profileImg}
            src={currentUser && currentUser?.photoURL}
            alt=''
          />
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className='btn' onClick={signInWithGoogle}>
          Login
        </button>
      )}
    </nav>
  )
}

export default Navbar
