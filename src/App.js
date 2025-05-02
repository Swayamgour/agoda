import './App.css'
import Header from './component/Header/Header'
import Navbar from './component/Navbar/Navbar'
import Masthead from './component/Masthead'
import FeatureIconsSection from './component/FeatureIconsSection'
import TravellersSliderSection from './component/TravellersSliderSection'
import BestSellerSection from './component/BestSellerSection'
import TestimonialSection from './component/TestimonialSection'
import BlogInspirationSection from './component/BlogInspirationSection'
import DownloadAppSection from './component/DownloadAppSection'
import JoinSection from './component/JoinSection'
import Footer from './component/Footer'

function App () {
  return (
    <>
      <Header />
      <Masthead />
      <FeatureIconsSection />
      <TravellersSliderSection />
      <BestSellerSection />
      <TestimonialSection />
      <BlogInspirationSection />
      <DownloadAppSection />
      <JoinSection />
      <Footer />
    </>
  )
}

export default App
