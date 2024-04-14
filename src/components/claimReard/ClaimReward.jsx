'use client'
import Web3Context from '@/context/Web3Context'
import React, { useContext } from 'react'

const ClaimReward = () => {
    const{stakingContract}=useContext(Web3Context)

    const fetchClaimReward=async()=>{
        try {
            const trasaction = await stakingContract.getReward();

        } catch (error) {
            console.error("Claim Reward Failed",error.message)
        }
    }
  return (
    <>
    <div>
        <button onClick={fetchClaimReward}>claim Reward</button>
    </div>
    </>
  )
}

export default ClaimReward