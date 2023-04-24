import React from 'react'

const ProcessSection = () => {
  return (
    <section className='container mx-auto my-40'>
      <h1 className='sm:text-4xl text-2xl font-bold text-center mt-4'>
        Our process puts you in control.
      </h1>
      <p className='text-center my-4'>
        {' '}
        Convenient online access makes it easy to achieve your financial and
        homeownership goals.{' '}
      </p>
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-10 mt-10'>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-4xl text-2xl font-bold rounded-lg mx-auto text-sky-600 shadow-md w-14 h-10 flex items-center justify-center'>
            1.
          </h1>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            Apply Online
          </h1>
          <p className='text-center'>
            Our streamlined application syncs with your bank to get you accurate
            numbers, fast.
          </p>
        </div>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-4xl text-2xl font-bold rounded-lg mx-auto text-sky-600 shadow-md w-14 h-10 flex items-center justify-center'>
            2.
          </h1>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            Get Approved
          </h1>
          <p className='text-center'>
            See how much you’re approved for, then shop for homes or move
            forward with your refinance.
          </p>
        </div>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-4xl text-2xl font-bold rounded-lg mx-auto text-sky-600 shadow-md w-14 h-10 flex items-center justify-center'>
            3.
          </h1>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            Close Your Loan
          </h1>
          <p className='text-center'>
            Use your to-do list to verify the details and get to closing fast.
          </p>
        </div>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-4xl text-2xl font-bold rounded-lg mx-auto text-sky-600 shadow-md w-14 h-10 flex items-center justify-center'>
            4.
          </h1>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            Manage Your Mortgage
          </h1>
          <p className='text-center'>
            Make payments online and put your mortgage to work for you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
