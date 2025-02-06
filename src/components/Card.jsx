import React from 'react'
import shoes from '../assets/shoes.svg'
import adidas from '../assets/adidas.svg'
import star from '../assets/star.svg'
import blankstar from '../assets/blankstar.svg'
const Card = () => {
  return (
        <div className='container flex justify-center items-center w-6xl sm:w-4xl sm:text-base h-[500px] rounded box-shadow bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600'>
            <div className='w-72 h-auto bg-white box-shadow rounded-2xl'>
                <div className='flex justify-evenly gap-24 mt-6'>
                        <div>
                            <img src={adidas} alt="" />
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        </div>
                </div>
                <div className='ml-10'>
                    <img src={shoes}  width={190} alt="" />
                </div> 
                 <div className='flex justify-start items-start flex-col px-6'>
                    <h2 className='text-gray-900 font-semibold '>ADDIDAS GAZE ZX</h2>
                    <p className='text-gray-700 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ullam.</p>
                    <div className='flex mt-0.5'>
                    <img src={star} alt="" width={15} />
                      <img src={star} alt="" width={15} />
                      <img src={star} alt="" width={15} />
                      <img src={star} alt="" width={15} />
                      <img src={blankstar} alt="" width={15}/>
                    </div>
                 </div>
                 <div className='text-gray-800 flex justify-between px-6 mt-3.5'>
                    <h3>Colour : </h3>
                    <h2 className='font-semibold'>$09.00</h2>
                 </div>
                <button className='border-none w-56 m-8 p-2 rounded-3xl box-shadow bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-semibold'>
                    Add To Cart
                </button>
            </div>
        </div>
  )
}

export default Card