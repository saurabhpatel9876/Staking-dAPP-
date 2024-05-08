'use client'
import Web3Context from '@/context/Web3Context'
import React, { useContext } from 'react'
import { Button } from '../ui/button'



const ClaimReward = () => {
    const {stakingContract,selectedAccount}=useContext(Web3Context)
 const claimReward = async()=>{
  try{
    const transaction = await stakingContract.getReward();
    transaction.wait()
    // await toast.promise(transaction.wait(),
    // {
    //   loading: "Transaction is pending...",
    //   success: 'Transaction successful 👌',
    //   error: 'Transaction failed 🤯'
    // });
    // if(receipt.status === 1){
    //     setTransactionStatus("Transaction Is Successful")
    //     setTimeout(()=>{
    //       setTransactionStatus("")
    //     },5000) 
    //   } else{
    //     setTransactionStatus("Transaction failed. Please try again.");
    //   }
  }catch(error){
    // console.error("Claim Reward Failed",error.message)
    console.log("err: claimReward:",error)
  }
 }
  return (
    <>
    <Button  type="button" onClick={claimReward}>
        claim reward
    </Button>
    </>
  )
}

export default ClaimReward