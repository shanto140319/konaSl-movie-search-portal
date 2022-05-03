import Link from 'next/link'
import React from 'react'
import { useAuth } from '../../context/authcontext'
import style from './nav.module.scss'
import { BiMovie } from 'react-icons/bi'
import { BiLogOutCircle } from 'react-icons/bi'
import { BiLogInCircle } from 'react-icons/bi'
const Navbar = () => {
  const { currentUser, logout, signInWithGoogle } = useAuth()
  return (
    <nav className={`section ${style.root}`}>
      <Link href='/'>
        <a className={style.logo}>
          <BiMovie /> <span className={style.hideMobile}>Movie App</span>
        </a>
      </Link>

      {currentUser ? (
        <div className={style.user}>
          <img
            className={style.profileImg}
            src={currentUser && currentUser?.photoURL}
            alt=''
          />

          <BiLogOutCircle
            style={{ fontSize: 32 }}
            className={style.hideDesktop}
            onClick={logout}
          />

          <button className={`btn ${style.hideMobile}`} onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <BiLogInCircle
            style={{ fontSize: 32 }}
            className={style.hideDesktop}
            onClick={signInWithGoogle}
          />

          <button
            className={`btn ${style.hideMobile}`}
            onClick={signInWithGoogle}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
