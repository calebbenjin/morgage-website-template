import { useContext, useRef, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Modal from './Modal'
import { formatCurrency } from '../util'
import { useRouter } from 'next/router'
import { Button } from './Button'
import { AuthContext } from '@/context/AuthContext'


type PreviewProps = {
  isOpen: boolean,
  isClose: any,
  data: any
}

const PreviewTransferDetails = ({isOpen, isClose, data}:PreviewProps) => {
  const router = useRouter()
  const { authState } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  const cancelButtonRef = useRef(null)

  console.log(authState)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/dashboard/payment/task')
    }, 2000)
  }

  return (
    <Modal isOpen={isOpen} cancelButtonRef={cancelButtonRef} isClose={isClose}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title as="h3" className="text-lg mb-10 font-medium leading-6 text-blue">
              Transactions Review
            </Dialog.Title>
            <div className="mt-2">
              <div className="cardHeader flex items-center justify-between">
                <div className="text-gray-500 text-left">
                  <p className="font-bold text-gray-500">From</p>
                  <p>{authState?.accountNumber}</p>
                  <p>{authState?.firstName}</p>
                </div>
                <div className="receiverAcc text-right text-gray-500">
                  <p className="font-bold text-gray-500">To</p>
                  <p>{data?.accountNumber}</p>
                  <p>{data?.accountName}</p>
                </div>
              </div>

              <div className="details mt-6 bg-light-blue p-3">
                <div className="list flex items-center mb-2 justify-between border-b pb-2">
                  <p className="font-bold text-gray-500">Bank</p>
                  <p>{data?.bankName}</p>
                </div>
                <div className="list flex items-center justify-between">
                  <p className="font-bold text-gray-500">Total Debit</p>
                  <p className="font-bold text-gray-500">${formatCurrency(Number(data?.amount))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
        <Button
          type="button"
          loading={isLoading}
          loadingText='Processing...'
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-brand px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={handleClick}
        >
          Preceed transaction
        </Button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => isClose(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </Modal>
  )
}

export default PreviewTransferDetails
