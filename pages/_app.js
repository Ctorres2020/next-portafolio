import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <main className="container">
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
  )
}

export default MyApp
