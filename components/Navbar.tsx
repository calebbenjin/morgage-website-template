import React from 'react'
import NextLink from 'next/link';
import MobileMenu from './MobileMenu';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link'
import styled from 'styled-components'
import { SiFsecure } from 'react-icons/si'
import Logo from './common/Logo';


type NavProps = {
  href: string,
  text: string,
  isBtn?: boolean
}

function NavItem({ href, text, isBtn }: NavProps) {
  // const [isBtn, setIsBtn] = useState(false)
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cn(
        isActive
          ? 'font-bold bg-gray-100 text-gray-800'
          : 'font-semibold text-gray-800 sm:ml-8', 
        isBtn ? 'shadow-md ml-6 bg-white border border-2 border-gray-500 py-3 px-6 hidden md:inline-block' : 'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-md hover:text-red-500 transition-all'
      )}
    >
      <span className="capsize md:text-1xl">{text}</span>
    </NextLink>
  );
}

const Navbar = () => {
  return (
    <NavWrapper>
        <div className="container">
          <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700 mx-auto py-2 sm:p-4 text-gray-900 bg-white text-black">
            <Logo />
            <div className="ml-[-0.60rem]">
              <MobileMenu />
              <NavItem href="/buyahome" text="Buy a Home" />
              <NavItem href="/refinance" text="Refinance" />
              <NavItem href="/about" text="Personal Loan" />
              <NavItem href="/about" text="Talks To Us" />
              <NavItem href="/login" isBtn text="Sign in" />
            </div>
          </nav>
        </div>
      </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export default Navbar
