import React, { useState } from "react"

import Layout from "../layouts/Layout"
import { SuccessModal, TransferForm } from "../organisms"
import { BASE_URL, profiles } from "../../constants/apiEndpoint"
import { TApiResponse, useApiGet } from "../../hooks/useFetch"
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from "react-toastify"

type ResponseType = {
  amount?: number
  description?: string
  recipient_name?: string
}

const Transfer = () => {
  const [cookie] = useCookies(['token']);
  
  const [showModal, setShowModal] = useState<boolean>(false)
  
  const profileData: TApiResponse = useApiGet(`${BASE_URL}${profiles}`, cookie.token)
  const [response, setResponse] = useState<{
    data: ResponseType,
    message: string
  }>({
    data: {},
    message: ''
  })
  
  const handleTransfer = async (to: number, amount: number, desc: string) => {
    const headers = {'Authorization': `Bearer ${cookie.token}`}

    try {
      const transferRequest = await fetch("http://localhost:8090/transfer", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          to: to,
          amount: amount,
          description: desc
        })
      })
      const jsonData = await transferRequest.json()
      setResponse(jsonData)

      if (transferRequest.ok) {
        setShowModal(true)
      } else {
        toast.error(jsonData.data)
      }
    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  return (
    <Layout>
      <TransferForm
        onSubmit={handleTransfer}
        accountNumber={profileData?.data?.WalletID}
      />

      <SuccessModal
        showModal = {showModal}
        onClose={() => setShowModal(false)}
        title="Transfer Success"
        amount={response?.data?.amount}
        transactionId={100000019}
        from={100000001}
        to={100000002}
        description="Kopi Kenangan"
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  )
}

export default Transfer