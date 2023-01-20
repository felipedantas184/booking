import '../styles/globals.css'
import '../styles/nprogress.css'
import NProgress from "nprogress"
import Router, { useRouter } from 'next/router'
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

const noAuthRequired = ['/login', '/signup', '/reset-password']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />      
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />      
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
