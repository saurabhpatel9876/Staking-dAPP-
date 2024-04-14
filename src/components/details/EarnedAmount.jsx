'use client'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'

const EarnedAmount = () => {
    const {stakingContract,seletedAccount}=useContext(Web3Context)
    const[rewardVal,setRewardVal]=useState("0")

   useEffect(()=>{
    const fetchEarning=async()=>{
        
        try {
            const rewardValueWei = await stakingContract.earned(seletedAccount)
            const rewardValueEth = ethers.formatUnits(rewardValueWei,18).toString()
            const roundedRewarded = parseFloat(rewardValueEth).toFixed(2)
            setRewardVal(roundedRewarded)
        } catch (error) {
            console.error(error.message)
        }
    }
    const interval = setInterval(() => {
        stakingContract && fetchEarning()
    }, 2000)
    return ()=>clearInterval(interval)
   },[stakingContract,seletedAccount])
  return (
    <div>EarnedAmount:{rewardVal}</div>
  )
}

export default EarnedAmount