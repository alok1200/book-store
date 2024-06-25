import React from 'react'
import Home from './home/Home'
import Courses from './course/Courses'
import { Routes,Route } from 'react-router-dom'
import Signup from './commponent/Signup'


const hellow = () => {
  return (
    <>  
    <div className='dark:bg-slate-900 dark:text-white '>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Course' element={<Courses/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </div>
    </>
  )
}

export default hellow