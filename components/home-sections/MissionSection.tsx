import React from 'react'
import Image from 'next/image'
import MissionImg from '@/public/home-image/get-introduced.jpg'
import { AiOutlineUser } from 'react-icons/ai'
import { SlSettings } from 'react-icons/sl'
import { FaHandPointRight } from 'react-icons/fa'
import { BsHouseFill } from 'react-icons/bs'

// Incomplete mini screen reponsiveness not working
const MissionSection = () => {
  return (
    <section className='mt-20 h-full relative'>
      <div className='flex flex-col'>
        <div className=''>
          <div className='bg-sky-500 py-20 lg:pl-20 lg:pr-80 md:pl-10 lg:pr-40 lg:w-5/6 w-full px-6'>
            <div className='lg:mr-40 xl:mr-96 m-0'>
              <p className='text-white'>Get Introduced</p>
              <h2 className='sm:text-5xl text-white text-2xl font-bold my-4'>
                We pioneered online mortgage lending. <br /> And it keeps getting
                better.
              </h2>
              <p className='text-white sm:pr-40 my-10'>
                Mauris blandit aliquet elit eget tincidunt nibh pulvinar.
                Praesent sapien massa convallis pellentesque nec egestas non
                nisi curabitur non nulla sit nisl tempus convallis quis ac
                lectus.
              </p>
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                <div className='card text-white bg-sky-600 rounded-md p-4 flex items-center'>
                  <div className='icon mr-8 h-12 w-12 flex items-center justify-center rounded-full bg-sky-500'>
                    <AiOutlineUser className='sm:text-2xl' />
                  </div>
                  <p>Speak With Loan Officer</p>
                </div>
                <div className='card text-white bg-sky-600 rounded-md p-4 flex items-center'>
                  <div className='icon  mr-8 h-12 w-12 flex items-center justify-center rounded-full bg-sky-500'>
                    <SlSettings className='sm:text-2xl' />
                  </div>
                  <p>Tools Resource</p>
                </div>
                <div className='card text-white bg-sky-600 rounded-md p-4 flex items-center'>
                  <div className='icon  mr-8 h-12 w-12 flex items-center justify-center rounded-full bg-sky-500'>
                    <FaHandPointRight className='sm:text-2xl' />{' '}
                  </div>
                  <p>Get Started With Pento</p>
                </div>
                <div className='card text-white bg-sky-600 rounded-md p-4 flex items-center'>
                  <div className='icon  mr-8 h-12 w-12 flex items-center justify-center rounded-full bg-sky-500'>
                    <BsHouseFill className='sm:text-2xl' />
                  </div>
                  <p>See Home Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='imageWrapper lg:absolute sm:right-0 sm:top-20 top-10 rounded-lg'></div>
      </div>
    </section>
  )
}

export default MissionSection
