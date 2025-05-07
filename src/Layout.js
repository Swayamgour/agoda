// import Navbar from '../Navbar/Navbar'
import Footer from './component/Footer'
// import Footer from '../Footer/Footer'
import Header from './component/Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
