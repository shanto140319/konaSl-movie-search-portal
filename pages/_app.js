import Layout from '../components/common/Layout'
import RouterWrapper from '../components/common/RouterWrapper'
import { AuthProvider } from '../context/authcontext'
import '../styles/globals.css'
const layouts = {
  L1: Layout,
}
function MyApp({ Component, pageProps }) {
  const LayoutWrapper =
    layouts[Component.layout] || (({ children }) => <>{children}</>)
  return (
    <AuthProvider>
      <RouterWrapper>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </RouterWrapper>
    </AuthProvider>
  )
}

export default MyApp
