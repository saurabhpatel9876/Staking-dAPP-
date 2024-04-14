"use client"
import Web3Context from '@/context/Web3Context'
import React, { useContext } from 'react'

const ConnectedAccount = () => {
    const {selectedAccount}=useContext(Web3Context)
  return (
   <>
   {selectedAccount?selectedAccount:"connect account"}
   </>
  )
}

export default ConnectedAccount