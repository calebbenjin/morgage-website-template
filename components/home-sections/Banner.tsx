import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section className='banner-section sm:px-40 px-10 my-20'>
      <div className='bg-slate-900 rounded-lg shadow-lg mx-auto grid sm:grid-cols-2 grid-cols-1 items-center h-full'>
        <div className='content container mx-auto px-10 pb-14 pt-8'>
          <h1 className='sm:text-4xl text-2xl font-bold text-white'>
            Get Mortgage Quote
          </h1>
          <p className='text-white mt-4 mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipisicing eltsed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Link
            href='/register'
            className='w-full font-bold shadow-2xl rounded-md bg-sky-700 text-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
            Apply For Home Purchase
          </Link>
        </div>
        <div className='bannerImg h-full rounded-lg'></div>
      </div>
    </section>
  )
}

export default Banner
