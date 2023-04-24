import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../Button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <HeroWrapper>
      <div className='w-full pb-16 pt-16 sm:pb-28 sm:pt-28 px-4 flex-wrap md:flex-wrap lg:flex-nowrap'>
        <div className='container sm:w-3/5 sm:mx-0 mx-auto w-full'>
          <h1 className='text-3xl sm:text-5xl font-bold animate__bounceIn text-white capitalize'>
            Buy a home with confidence.
          </h1>
          <p className='mt-7 mb-10 text-md sm:text-xl md:pr-20 text-gray-100'>
            Start your home buying journey with numbers you can trust.
          </p>
          <Link
            href='/register'
            className='w-full font-bold shadow-2xl rounded-md text-sky-700 bg-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
            Start My Approval ›
          </Link>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow: none;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.689),
      rgba(0, 0, 0, 0)
    ),
    url(./home-image/testimonials/testimonials-bg.jpg);
  background-position: center;
  background-size: cover;

  .playstore-icon {
    font-size: 1.5rem;
  }

  .line-height {
    line-height: 4rem;
  }

  @media (max-width: 1024px) {
    height: 100%;

    .hero-btns {
      width: 100%;
      margin: 0 auto;
    }
  }

  .hero-content {
    width: 70%;
    @media (max-width: 1024px) {
      padding-bottom: 3rem;
      width: 100%;
    }
  }
`

export default HeroSection
