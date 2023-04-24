import React, {
  useContext
} from 'react';
import {
  faChartArea
} from '@fortawesome/free-solid-svg-icons';
import DashboardLayout from '@/components/DashboardLayout'
import DashboardMetric from '@/components/DashboardMetric'
import { formatCurrency } from '@/config/index'
import { IoIosSend } from 'react-icons/io'
import { GrTransaction } from 'react-icons/gr'
import Card from '@/components/common/Card'
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import { Button } from '@/components/Button';
import { parseCookies } from '@/config/parseCookies';


const DashboardPage = () => {
  const { authState } = useContext(AuthContext)
  const router = useRouter()

  console.log(authState)

  
  const handlePayment = () => {
    router.push('/dashboard/payment')
  }

  const handleReceivePayment = () => {
    router.push('/dashboard/payment/receive')
  }

  return (
    <DashboardLayout>
      {authState ? 
      <div className="container dashboardHero">
        
        <div className="pt-10 text-left">
          <div className="w-full mb-4 sm:mb-0">
            <p className="pt-5 sm:ml-10 font-semibold capitalize text-white text-lg">{`Welcome back ${authState?.firstName}`}</p>
            <p className="sm:ml-10 mt-5 capitalize text-white text-lg">Managing your money through Internet Banking is quick and secure</p>
            <DashboardMetric
              title={authState.accountType ? authState.accountType : "Premier Savings"}
              acctNumber={authState.acctNum ? authState.acctNum : '9876644687'}
              currency={authState?.currency}
              value={authState.amount ? formatCurrency(authState?.amount) : "200.000"}
              icon={faChartArea}
              status={authState.acctStatus ? authState.acctStatus : "Regular"}
            />
          </div>
        </div>
      </div>
      : "Loading" }


      <div className="container mt-20">
        <div className="items-center grid grid-cols-2  gap-4">
          <Button onClick={handlePayment} className="core-btn mt-6 font-semibold mx-auto sm:w-4/6 w-full shadow-2xl bg-brand text-gray-100 py-3 px-3 sm:text-xl md:py-4 sm:px-6 flex items-center justify-between"><span>Transfer Money</span> <IoIosSend className="playstore-icon sm:ml-2 sm:h-6 sm:w-6" /> </Button>
          <Button onClick={handleReceivePayment} className="core-btn mt-6 font-semibold mx-auto sm:w-4/6 w-full shadow-2xl bg-brand text-gray-100 sm:text-xl py-3 px-3 md:py-4 md:px-7 flex items-center justify-between"><span>Withdraw Money</span> <IoIosSend className="playstore-icon sm:h-6 sm:w-6 sm:ml-2" /> </Button>
        </div>

          <div className="adsCard py-6 sm:py-10 sm:px-8 px-4 mt-20 rounded-lg">
            <h3 className="sm:text-2xl text-gray-100 font-semibold capitalize">A secure way to access your accounts, manage payments, check your statements and much more, 24 hours a day.</h3>
          </div>
      </div>
    </DashboardLayout>
  )
}

export async function getServerSideProps({ req }: any) {
  const { token } = parseCookies(req);


  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token: token
    },
  };
}

export default DashboardPage
