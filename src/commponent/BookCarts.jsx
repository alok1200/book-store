import React from 'react'

export const BookCarts = ({item}) => {
  return (
    <div className='mt-4 p-3'>
        <div className="card w-93 dark:bg-slate-900 dark:text-white shadow-xl hover:scale-105 duration-200">
  <figure>
    <img src={item.image} alt='Books' /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.catogery}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="cursor-pointer py-1 px-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}
 export default BookCarts