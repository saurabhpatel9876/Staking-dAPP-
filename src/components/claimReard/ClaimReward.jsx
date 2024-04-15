'use client'
import Web3Context from '@/context/Web3Context'
import React, { useContext } from 'react'

const ClaimReward = () => {
    const{stakingContract}=useContext(Web3Context)

    const fetchClaimReward=async()=>{
        try {
            const trasaction = await stakingContract.getReward();
            // await trasaction.wait()
            console.log("transactionnnn:",trasaction)

        } catch (error) {
            console.log("Claim Reward Failed",error)
        }
    }
  return (
    <>
    <div>
        <button type='button' onClick={fetchClaimReward}>claim Reward</button>
    </div>
    </>
  )
}

export default ClaimReward