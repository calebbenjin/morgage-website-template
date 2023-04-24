import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FaBandcamp } from 'react-icons/fa'

const PageLoader = () => {
  return (
    <div className="loadingPage h-screen fixed text-center top-0 bottom-0 z-10 flex items-center justify-center w-full bg-brand">
      <div>
        <FaBandcamp className="spiner text-white mt-40 h-24 w-24" />

        <FontAwesomeIcon className="spiner text-white mt-40 h-12 w-12" icon={faCircleNotch} spin />
      </div>
    </div>
  )
}

export default PageLoader
