import React from 'react'
import Header from '../Header/Header'     
import Masthead from '../Hotel/Masthead'
import FeatureIconsSection from '../FeatureIconsSection'
import TravellersSliderSection from '../Hotel/TravellersSliderSection'
import BestSellerSection from '../Hotel/BestSellerSection'
import TestimonialSection from '../TestimonialSection'
import BlogInspirationSection from '../Hotel/BlogInspirationSection'
import DownloadAppSection from '../Hotel/DownloadAppSection'
import JoinSection from '../Hotel/JoinSection'
import Footer from '../Footer'




function Home () {
  return (
    <>
      <Header />
      <Masthead />
      <TravellersSliderSection />
      <BestSellerSection />
      <BlogInspirationSection />
      <DownloadAppSection />
      <JoinSection />
      {/* <Footer /> */}
    </>
  )
}

export default Home
