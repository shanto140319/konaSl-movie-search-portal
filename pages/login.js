import Head from 'next/head'
import React from 'react'
import { useAuth } from '../context/authcontext'
import style from '../styles/Login.module.scss'

const Login = () => {
  const { signInWithGoogle } = useAuth()

  return (
    <section className={style.loginWrapper}>
      <Head>
        <title>Login</title>
      </Head>
      <main className={style.container}>
        <button className='btn' onClick={signInWithGoogle}>
          sign in with google
        </button>
      </main>
    </section>
  )
}

export default Login
