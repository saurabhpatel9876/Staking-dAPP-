'use client'
import StakingContext from '@/context/StakingContext'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useEffect,useState } from 'react'

const StakedAmount = () => {
    const {selectedAccount,stakingContract}=useContext(Web3Context)
    const {isReload}=useContext(StakingContext)
   const [stakedAmount,setStakedAmount]=useState("0");

   useEffect(()=>{
    const fetchStakedAmount = async()=>{
        try {
            const stakedAmountWei = await stakingContract.stakedBalance(selectedAccount)
            const stakedAmountEth =  ethers.formatUnits(stakedAmountWei.toString(),18)
            setStakedAmount(stakedAmountEth)
        } catch (error) {
            console.error(error.message)
        }
    }
    stakingContract && fetchStakedAmount()
   },[stakingContract,selectedAccount,isReload])
  return (
    <div>StakedAmount : {stakedAmount}</div>
  )
}

export default StakedAmount