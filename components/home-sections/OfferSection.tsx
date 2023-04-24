import Link from 'next/link'
import React from 'react'

const OfferSection = () => {
  return (
    <section>
      <div className='banner-section sm:px-40 px-10 my-20'>
        <div className='bg-slate-900 rounded-lg shadow-lg mx-auto grid sm:grid-cols-2 grid-cols-1 items-center h-full'>
          <div className='content container mx-auto px-10 pb-14 pt-8'>
            <h1 className='sm:text-4xl text-2xl font-bold text-white'>
              Refinance to get money from your home
            </h1>
            <p className='text-white mt-4 mb-10'>
              If you want more financial freedom, refinancing could be a great
              option even at today's rates. Apply today to see if you could
              consolidate debt or free up cash for whatever life has in store.
            </p>
            <Link
              href='/register'
              className='w-full font-bold shadow-2xl rounded-md bg-sky-700 text-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
              Apply for Refinance ›
            </Link>
          </div>
          <div className='offerImgOne h-full rounded-lg'></div>
        </div>
      </div>
      <div className='banner-section sm:px-40 px-10 my-20'>
        <div className='bg-slate-900 rounded-lg shadow-lg mx-auto grid sm:grid-cols-2 grid-cols-1 items-center h-full'>
          <div className='content container mx-auto px-10 pb-14 pt-8'>
            <h1 className='sm:text-4xl text-2xl font-bold text-white'>
              Experience you can trust when refinancing to consolidate debt
            </h1>
            <p className='text-white mt-4 mb-10'>
              We have debt consolidation solutions for you. With our
              industry-leading tools and expert guidance, we can help you work
              toward financial wellness.
            </p>
            <Link
              href='/register'
              className='w-full font-bold shadow-2xl rounded-md bg-sky-700 text-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
              Apply for Refinance ›
            </Link>
          </div>
          <div className='offerImgTwo h-full rounded-lg'></div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection
