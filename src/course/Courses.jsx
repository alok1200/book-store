import React from 'react'
import Navebar from '../commponent/Navebar'
import Course from '../commponent/Course'
import Footer from '../commponent/Footer'
import list from '../../public/list.json'

const Courses = () => {
  return (
<>
  <Navebar/>
   <div className='min-h-screen'>
   <Course/>
   </div>
  <Footer/>      
</>
  )
}

export default Courses