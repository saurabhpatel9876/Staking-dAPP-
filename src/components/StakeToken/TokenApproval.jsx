'use client'

import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useRef } from 'react'
import { Button } from '../ui/button'


const TokenApproval = () => {
    const {stakingContract,stakeTokenContract}=useContext(Web3Context)
    const approvedTokenRef = useRef()

    const approveToken=async(e)=>{
        e.preventDefault();
        const amount = approvedTokenRef.current.value.trim();
        console.log("amounttt:",amount)
        if(isNaN(amount) || amount<=0){
            console.error("Please enter a valid positive number");
            return;
           }

           const amountToSend = ethers.parseUnits(amount,18).toString();
           try {
            const transaction = await stakeTokenContract.approve(stakingContract.target,amountToSend)
            await transaction.wait()

            approvedTokenRef.current.value = "";

            // const receipt = await transaction.wait();
    // if (receipt.status === 1) {
    //     toast.success("Transaction is successful")
    //     approvedTokenRef.current.value = "";
    //   } else {
    //       toast.error("Transaction failed. Please try again.")
    //   }
           } catch (error) {
            console.error(error.message)
           }
    }
  return (
    <div>
    <form onSubmit={approveToken} className='m-2 p-1'>
       <label >Token Approval:</label>
       <input className=' text-black p-1' type="text" ref={approvedTokenRef} />
      <Button  onClick={approveToken} type="submit">
        aproval token
      </Button>
     </form>
</div>
  )
}

export default TokenApproval