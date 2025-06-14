import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../layout/Banner/Banner'
import Footer from '../../layout/Footer/Footer'
import About from '../About/About'
import Services from '../Services/Services'
import Testimonial from '../../layout/Testimonial/Testimonial'
// import FAQ from '../../layout/Faq/Faq'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Testimonial />
      <About />
      <Services />
      {/* <FAQ /> */}
      <Footer />
    </div>
  )
}

export default LandingPage