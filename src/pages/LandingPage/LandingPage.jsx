import React from 'react'
import Header from '../../layout/Header/Header'
import Banner from '../../layout/Banner/Banner'
import Footer from '../../layout/Footer/Footer'
import About from '../About/About'
import Services from '../Services/Services'
import Testimonial from '../../layout/Testimonial/Testimonial'
import TabSection from '../../layout/TabSection/TabSection'
import PhilosophySection from '../PhilosophySection/PhilosophySection'
import Statistics from '../../layout/Statistics/Statistics'
import KnowledgeHub from '../../layout/KnowledgeHub/KnowledgeHub'
import Faq from '../../layout/Faq/Faq'
import WhatsappIcon from '../../components/WhatsappIcon/WhatsappIcon'

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
      <Faq />
      <KnowledgeHub />
      <Footer />
      <WhatsappIcon />
    </div>
  )
}

export default LandingPage