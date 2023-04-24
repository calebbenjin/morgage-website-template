import React from 'react'

const SoonSection = () => {
  return (
    <section className='container mx-auto my-40'>
      <h1 className='sm:text-4xl text-2xl font-bold text-center mt-4'>
        How soon do you want to buy a home?
      </h1>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10'>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            I'm ready now, I have found a home.
          </h1>
          <p className='text-center'>
            Apply online to find a home as perfect as that home.
          </p>
        </div>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            I want to start looking at homes to buy
          </h1>
          <p className='text-center'>
            Before house hunting you need an aproval letter. Apply for one online for free.
          </p>
        </div>
        <div className='card shadow-md p-6 rounded-lg'>
          <h1 className='sm:text-xl text-lg font-bold text-center my-4'>
            I'm just researching
          </h1>
          <p className='text-center'>
            Use your to-do list to verify the details and get to closing fast.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SoonSection
