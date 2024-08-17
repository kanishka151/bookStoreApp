import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";



import Cards from './Cards';
function FreeBook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
      const res  = await axios.get("http://localhost:4001/book");
      
      const data=res.data.filter((data)=>data.category==="Free");
      console.log(res.data);
      setBook(data);

      }catch(error){
        console.log(error);

      }
    };

    getBook();
  },[])
    //const filterData=list.filter((data)=>data.category==="Free");

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
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div><h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p> Books are wonderful companions. Books belong to various genres, and therefore we have a wide spectrum to choose from to read and enjoy and understand. They can take us on voyages to unexplored areas of the world as also of the mind and the spirit.</p> 
      </div>
    
    <div>
      <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
  </> 
  )
}

export default FreeBook

//Props (properties) are a way to pass data from a parent component to a child component.
//Props allows, components to be dynamic and flexible once they receive different data and render accordingly.
