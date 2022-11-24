import '../styles/globals.css'
import '../styles/nprogress.css'
import NProgress from "nprogress"
import Router from 'next/router'
import { AuthContextProvider } from '../context/AuthContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />      
    </AuthContextProvider>
  )
}

export default MyApp
