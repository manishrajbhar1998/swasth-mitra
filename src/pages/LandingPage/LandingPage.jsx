import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../layout/Banner/Banner'
import Footer from '../../layout/Footer/Footer'
import About from '../About/About'
import Services from '../Services/Services'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default LandingPage