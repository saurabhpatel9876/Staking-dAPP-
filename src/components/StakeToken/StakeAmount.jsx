'use client'

import StakingContext from '@/context/StakingContext'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useRef } from 'react'
import { Button } from '../ui/button'

const StakeAmount = () => {
    const {stakingContract}=useContext(Web3Context)
    const {isReload,setIsReload}=useContext(StakingContext)
    const stakeAmountRef = useRef()

    const stakeToken=async(e)=>{
        e.preventDefault();
        const amount = stakeAmountRef.current.value.trim();
        console.log(amount)
   if(isNaN(amount) || amount<=0){
    toast.error("Please enter a valid positive number.");
    return;
   }

   const amountToStake = ethers.parseUnits(amount,18).toString();

   try {
    const transaction = await stakingContract.stake(amountToStake)
    await transaction.wait()

    stakeAmountRef.current.value = "";
    setIsReload(!isReload);

    // if (receipt.status === 1) {
    //     setIsReload(!isReload);
    //     stakeAmountRef.current.value = "";
    //   } else {
    //       toast.error("Transaction failed. Please try again.")
    //   }
   } catch (error) {
    console.error(error.message)
   }
    }
  return (
   <>
   <form onSubmit={stakeToken} className="m-2">
        <label className="">Enter Staked Amount:</label>
        <input className=' text-black p-1' type="text" ref={stakeAmountRef} />
       {/* <button onClick={stakeToken} type="submit">
        stake token
       </button> */}
       <Button onClick={stakeToken} type="submit">
        stake Token
       </Button>
      </form>
   </>
  )
}

export default StakeAmount