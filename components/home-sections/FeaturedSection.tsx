import React from 'react'
import FeatureImg from '@/public/home-image/video-overview.jpg'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import playstoreImg from '../assets/playstore.png'
import { AiOutlineCheck } from 'react-icons/ai'

const FeatureSection = () => {
  return (
    <AnimationOnScroll animateIn='animate__backInUp' animateOnce={false}>
      <SectionWrapper>
        <div className='container mx-auto py-20 grid grid-cols-1 md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-2'>
          <div className='img-wrapper'>
            <Image src={FeatureImg} alt="FeatureImg" width={820} height={752} className="md:mt-20 xl:mt-4" />
          </div>
          <div className='content-wrapper lg:pl-10 xl:pl-10 xl:pt-10 pt-10'>
            <div className='card rounded-md p-4 flex sm:items-center'>
              <div className='icon sm:mr-8 mr-4 sm:h-14 h-10 w-20 flex items-center justify-center rounded-md bg-sky-500/30'>
                <AiOutlineCheck className='sm:text-2xl text-sky-600' />
              </div>
              <div>
                <h2 className='sm:text-3xl text-xl sm:mb-4 mb-2 font-bold'>Mortgage Pre-Approval</h2>
                <p className='text-gray-500'>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
              </div>
            </div>
            <div className='card rounded-md sm:my-10 my-2 p-4 flex sm:items-center'>
              <div className='icon sm:mr-8 mr-4 sm:h-14 h-10 w-20 flex items-center justify-center rounded-md bg-sky-500/30'>
                <AiOutlineCheck className='sm:text-2xl text-sky-600' />
              </div>
              <div>
                <h2 className='sm:text-3xl text-xl sm:mb-4 mb-2 font-bold'>House Shopping</h2>
                <p className='text-gray-500'>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
              </div>
            </div>
            <div className='card rounded-md p-4 flex sm:items-center'>
              <div className='icon sm:mr-8 mr-4 sm:h-14 h-10 w-20 flex items-center justify-center rounded-md bg-sky-500/30'>
                <AiOutlineCheck className='sm:text-2xl text-sky-600' />
              </div>
              <div>
                <h2 className='sm:text-3xl text-xl sm:mb-4 mb-2 font-bold'>Loan Application</h2>
                <p className='text-gray-500'>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </AnimationOnScroll>
  )
}

const SectionWrapper = styled.section`
  background-image: url(./sectionbg.png);
  background-position: center;
  background-size: cover;
  margin-top: 5rem;

  .line-height {
    line-height: 56px;
  }
  .capitalize {
    text-transform: uppercase;
  }
`

export default FeatureSection
