import React from 'react'

const TopNavbar = () => {
  return (
    <div className='bg-gray-800 py-4 sm:py-3 text-gray-200 px-20 flex flex-row items-center justify-between'>
      <div className='flex flex-col sm:flex-row items-center'>
        <p className="mr-4 text-sm">
          <b>Call Us:</b> +4 234-543 123 678
        </p>
        <p className="text-sm">
          {' '}
          <b>Mail Us:</b> info@pento.com
        </p>
      </div>
      <div className='flex items-center'>
      </div>
    </div>
  )
}

export default TopNavbar
