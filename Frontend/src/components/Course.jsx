import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json";
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>
          Online classes have existed in our society for some time now, but the importance of online classes was fully realised only during the lockdowns on account of the pandemic. The online classes were very helpful to all students, teachers, and institutions. They are also beneficial to students who wish to pursue long-distance courses.

          </p>
          <Link to="/">
          <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>

          </Link>
          
        </div>
        <div className='mt-12 grid grid-cols-1 md: grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
    </>
  )
}

export default Course
