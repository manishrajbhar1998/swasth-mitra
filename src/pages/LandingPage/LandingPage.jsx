import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../layout/Banner/Banner'
import Footer from '../../layout/Footer/Footer'
import About from '../About/About'
import Services from '../Services/Services'
import Testimonial from '../../layout/Testimonial/Testimonial'
import FAQ from '../../layout/Faq/Faq'
import TabSection from '../../layout/TabSection/TabSection'
import PhilosophySection from '../PhilosophySection/PhilosophySection'
import Statistics from '../../layout/Statistics/Statistics'
import KnowledgeHub from '../../layout/KnowledgeHub/KnowledgeHub'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <TabSection />
      <Testimonial />
      <Statistics />
      <Services />
      <PhilosophySection />
      <FAQ />
      <KnowledgeHub />
      <Footer />
    </div>
  )
}

export default LandingPage