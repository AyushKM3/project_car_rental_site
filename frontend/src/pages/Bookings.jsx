import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Bookings = () => {
  return (
    <div className='dark:bg-black dark:text-white'>
    <Nav/>
    <div className='h-screen'>
      <h1 className='text-3xl font-bold text-center mt-10'>Bookings</h1>
    </div>
    <Footer/>
    </div>
  )
}

export default Bookings