import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Subservices from '../components/Subservices'
import Teams from '../components/Teams'
import Works from '../components/Works'

const Home = () => {
  return (
    <div className='bg-slate-100 transition-all'>
      <Header />
      <Subservices />
      <Works />
      <Contact />
      <Teams />
      <Footer />
    </div>
  )
}

export default Home
