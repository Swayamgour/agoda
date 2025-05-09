import React from 'react'
import Header from '../Header/Header'
import Masthead from '../Masthead'
import FeatureIconsSection from '../FeatureIconsSection'
import TravellersSliderSection from '../TravellersSliderSection'
import BestSellerSection from '../BestSellerSection'
import TestimonialSection from '../TestimonialSection'
import BlogInspirationSection from '../BlogInspirationSection'
import DownloadAppSection from '../DownloadAppSection'
import JoinSection from '../JoinSection'
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
      <Footer />
    </>
  )
}

export default Home
