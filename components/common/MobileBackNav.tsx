import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const MobileBackNav = () => {
  const router = useRouter()

  return (
    <button className="sm:hidden fixed top-8 left-10" onClick={() => router.back()}>
      <FaLongArrowAltLeft className="w-5 h-5" />
    </button>
  )
}

export default MobileBackNav
