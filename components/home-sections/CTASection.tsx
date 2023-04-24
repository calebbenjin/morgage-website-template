import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const CTASection = () => {
  return (
    <Section>
      <div className='container'>
        <div className='py-10 rounded-6 grid grid-cols-1 md:grid-cols-1 md:gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='content'>
            <h1 className='text-3xl text-white my-5 lg:text-4xl xl:text-5xl md:my-4 xl:my-10 font-bold tracking-normal'>
              Get started now on your financial goals.
            </h1>
            <p className='text-lg text-gray-200 mb-10'>
            Provide some basic information and we'll match you with a loan option and mortgage rate that meet your needs.
            </p>
            <Link
              href='/register'
              className='w-full font-bold shadow-2xl rounded-md text-sky-700 bg-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
              Apply For Home Purchase ›
            </Link>
            <Link
              href='/register'
              className='w-full font-bold shadow-2xl rounded-md text-sky-700 bg-gray-100 py-4 px-4 md:py-5 sm:px-7 sm:mr-4 '>
              Apply For Refinance ›
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url('./home-image/subscribers/subscribe-bg.jpg');
  background-position: center;
  background-size: cover;

  .form-container {
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 15px;
      margin-bottom: 1rem;
      outline: none;
      background: #f2f3f4;
      color: #ffff;
      border-radius: 5px;

      &:placeholder {
        color: #ffff;
      }
    }
  }
`

export default CTASection
