import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { FaBandcamp } from 'react-icons/fa'
import { LinkButton } from './Button'
import playstoreImg from '../assets/playstore.png'
import Image from 'next/image'
import Logo from './common/Logo'

const Footer = () => {
  return (
    <div className='bg-slate-800'>
      <div className='container mx-auto w-full py-6 flex justify-between'>
        <Logo />
        <div className='w-80'>
          <div className='flex text-white align-center justify-between'>
            <Link href=''>About us</Link>
            <Link href=''>How it works</Link>
            <Link href=''>Blog</Link>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='container sm:px-20 border-t border-solid border-gray-100 py-4 mx-auto flex text-center align-center justify-between'>
          <p className='text-white text-sm'>
            2022 AR KFX. All rights reserved. -- Privacy Policy - Terms of
            Services
          </p>
          <p className='text-white text-sm'>Supported by KFX Startup</p>
        </div>
      </div>
    </div>
  )
}

const FooterSection = styled.footer`
  .footer {
    border-top: solid 1px #f2f3f4;
  }

  .playstore-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  .nav-link a {
    display: block;
    margin-bottom: 1rem;
    color: #f2f3f4;
  }
`

const BrandLogo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #fff;
  font-size: 1.2rem;

  .logo {
    font-size: 2rem;
  }
`

export default Footer
