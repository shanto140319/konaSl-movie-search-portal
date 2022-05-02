import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import firebase from '../utils/firabse'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const router = useRouter()
  useEffect(() => {
    const auth = getAuth()
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)

      setLoading(false)
    })

    return () => {
      setLoading(false)
      unsubscribe()
    }
  }, [])

  //signup function
  const signUp = async (email, password, username) => {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
      displayName: username,
    })
    const user = auth.currentUser
    setCurrentUser({ ...user })
  }

  //login with google account
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then(async () => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //login function
  function login(email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logout function
  function logout() {
    const auth = getAuth()
    return signOut(auth)
  }
  const value = {
    currentUser,
    signUp,
    login,
    logout,
    signInWithGoogle,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
