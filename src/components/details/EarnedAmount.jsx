'use client'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useEffect, useState } from 'react'

const EarnedAmount = () => {
    const {stakingContract,selectedAccount}=useContext(Web3Context)
    const[rewardVal,setRewardVal]=useState("0")

   useEffect(()=>{
    const fetchEarning=async()=>{
        
        try {
            const rewardValueWei = await stakingContract.earned(selectedAccount);
           const rewardValueEth = ethers.formatUnits(rewardValueWei,18).toString();
           const roundedReward = parseFloat(rewardValueEth).toFixed(2)
            console.log("earnedddd wala:",roundedReward)
            setRewardVal(roundedReward)
        } catch (error) {
            // console.error(error.message)
            console.log("err",error)
        }
    }
    // const interval = setInterval(()=>{
    //     stakingContract && fetchEarning();
    //   },20000)
    //   return ()=> clearInterval(interval)

    stakingContract && fetchEarning();
   },[stakingContract,selectedAccount])
  return (
    <div>EarnedAmount:{rewardVal}</div>
  )
}

export default EarnedAmount