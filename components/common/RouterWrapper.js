import { NextShield } from 'next-shield'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/authcontext'
const RouterWrapper = ({ children }) => {
  const router = useRouter()
  const { currentUser, loading } = useAuth()
  return (
    <NextShield
      isAuth={currentUser ? true : false}
      isLoading={loading}
      router={router}
      privateRoutes={['/watchlist']}
      publicRoutes={['/login']}
      accessRoute='/'
      loginRoute='/login'
      LoadingComponent={<div className='loader'></div>}
    >
      {children}
    </NextShield>
  )
}

export default RouterWrapper
