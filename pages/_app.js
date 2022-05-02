import Layout from '../components/common/Layout'
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
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </AuthProvider>
  )
}

export default MyApp
