import React from 'react'
import BookCarts from './BookCarts'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'


const Course = () => {
  return (
    // dark:bg-slate-100 dark:text-black     it will using for dark or light thim class
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-100 dark:text-black dark:border'>
      <div className=' items-center justify-center text-center '>
      
      <div className=''>
      <h1 className=' text-2xl  md:text-4xl'>we're belling to hear
       <samp className='text-pink-500'>have </samp>
        </h1> 
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut. Totam eligendi 
          ipsum ducimus facilis nobis unde non porro delectus! Nisi doloremque 
          laboriosam modi veritatis explicabo iusto hic quo perferendis!
        </p>
        <Link to='/'>
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 duration-300'>Back</button>
        </Link>

      </div>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       {
        list.map((item)=>(
          <BookCarts key={item.id} item={item} />
        ))
       }

      </div>

    </div>
 
    </>
  )
}

export default Course