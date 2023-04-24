import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import DashboardNav from './common/DashboardNav'
import MobileNavbar from './common/MobileNavbar'
import PageLoader from './common/PageLoader'

type LayoutProps = {
  children: React.ReactElement | React.ReactNode
}

const DashboardLayout = ({children}: LayoutProps) => {
  const [pageLoader, setPageLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPageLoader(false)
    }, 2000)
  },[])

  return (
    <div>
      {pageLoader && <PageLoader />}
      <div className="flex">
        <div className="sm:w-64 shadow-xl px-4 hidden md:block sm:px-8 pt-6 bg-white">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="">
            <DashboardNav />
          </div>
          <div>
            {children}
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
