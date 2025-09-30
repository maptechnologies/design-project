import React from 'react'
import PricingSection from '../components/PackagesData'
import Herosection from '../components/portfolio/Herosection'
import Awards from '../components/Awards'
import ContactForm from '../components/Form'
import AnimatedContact from '../components/Contact'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Herosection/>
      <PricingSection/>
      <Awards/>
      <ContactForm/>
      <AnimatedContact/>
      <Footer/>
    </div>
  )
}

export default page

