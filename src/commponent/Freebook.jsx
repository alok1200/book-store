import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import list from "../../public/list.json"
import BookCarts from "../commponent/BookCarts"

const Freebook = () => {
    const filterdata = list.filter((data)=>data.catogery== "free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>free books sometime!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In fugit nisi voluptatum esse magnam, possimus iste natus quis optio tempora tenetur minima inventore facilis</p>
      </div>
    <div>
    <Slider {...settings}>
   { filterdata.map((item)=> (
    <BookCarts item={item} key={item.id}  />
   ))}
      </Slider>
    </div>
    </div>

    </>
  )
}

export default Freebook