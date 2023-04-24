import React from 'react'
import Image from 'next/image'
import offerImg1 from '@/public/home-image/offer/offer-1.jpg'
import offerImg2 from '@/public/home-image/offer/offer-2.jpg'
import offerImg3 from '@/public/home-image/offer/offer-3.jpg'

const ChooseSection = () => {
  return (
    <section>
      <div className='container mx-auto mt-20'>
        <div className='sm:mt-20 mt-10 sm:mx-40 flex flex-col md:flex-col lg:flex-row mx-auto gap-4 sm:gap-20'>
          <div className='mb-4 relative sm:w-2/4 w-full'>
            <div className='relative h-96'>
              <Image src={offerImg1} alt='offer1' fill />
            </div>
            <div className='p-6 w-full bg-gray-100/50'>
              <h3 className='font-bold text-xl mb-4'>
                From Experiencing Homelessness To Being Home
              </h3>
              <p>
                Right now, over half a million of Americans are experiencing
                homelessness. But with help from Rocket Mortgage and Built for
                Zero, communities nationwide are working together to solve it.
              </p>
            </div>
          </div>
          <div className='mb-4 relative sm:w-2/4 w-full'>
            <div className='relative h-96 '>
              <Image src={offerImg2} alt='offer1' fill />
            </div>
            <div className='p-6 w-full bg-gray-100/50'>
              <h3 className='font-bold text-xl mb-4'>
                Connect with a mortgage broker in your community.
              </h3>
              <p>
                A mortgage broker can be your trusted guide close to home. They
                can really get to know you and tailor loan options to meet your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseSection
