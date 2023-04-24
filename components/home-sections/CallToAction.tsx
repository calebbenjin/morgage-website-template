import Image from 'next/image'
import React from 'react'
import { FaMoneyCheckAlt, FaLongArrowAltRight } from 'react-icons/fa'
import homeImg from '@/public/home-image/D-NonStock-Pictogram-Buying-02212023.svg'
import sellImg from '@/public/home-image/D-NonStock-Pictogram-Selling-02212023.svg'
import buyImg from '@/public/home-image/D-NonStock-Buy-Sell-03022023.svg'

const CallToAction = () => {
  return (
    <section className="mt-10">
      <div className='container mx-auto sm:px-40 grid gap-10 sm:grid-cols-3 grid-cols-1 w-full'>
        <div className='flex items-center border border-solid border-slate-600 py-8 px-10 rounded-xl'>
          <Image src={homeImg} height={50} width={50} alt="I'm Buying" />
          <div className='ml-6'>
            <h2 className="font-bold text-lg flex items-center">I'm Buying <FaLongArrowAltRight className="ml-4" /></h2>
            <p className='flex items-center'>
              <FaMoneyCheckAlt className='text-green-600 mr-2' /> Get Up To
              $10,000
            </p>
          </div>
        </div>
        <div className='flex items-center border border-solid border-slate-600 py-8 px-10 rounded-xl'>
          <Image src={sellImg} height={50} width={50} alt="I'm Buying" />
          <div className='ml-6'>
            <h2 className="font-bold text-lg flex items-center">I'm Selling <FaLongArrowAltRight className="ml-4" /></h2>
            <p className='flex items-center'>
              <FaMoneyCheckAlt className='text-green-600 mr-2' /> Get 1% back
            </p>
          </div>
        </div>
        <div className='flex items-center border border-solid border-slate-600 py-8 pl-6 rounded-xl'>
          <Image src={buyImg} height={50} width={50} alt="I'm Buying" />
          <div className='ml-6'>
            <h2 className="font-bold text-lg flex items-center">I'm Buying and Selling <FaLongArrowAltRight className="ml-2" /></h2>
            <p className='flex items-center'>
              <FaMoneyCheckAlt className='text-green-600 mr-2' /> Get Both offers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
