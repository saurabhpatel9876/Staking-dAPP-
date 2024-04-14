'use client'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react'

const RewardAmount = () => {
    const {stakingContract,selectedAccount}=useContext(Web3Context);
    const[rewardRate,setRewardRate]=useState("0")

    useEffect(()=>{
        const fetchRewardRate=async()=>{
            try {
                const rewardRateWei = await stakingContract.REWARD_RATE();
                const rewardRateEth = ethers.formatUnits(rewardRateWei.toString(),18)
                setRewardRate(rewardRateEth)
            } catch (error) {
                console.error(error.message)
            }
        }
        stakingContract && fetchRewardRate()
    },[stakingContract,selectedAccount])
  return (
    <div>RewardAmount:{rewardRate}</div>
  )
}

export default RewardAmount