'use client'
import StakingContext from '@/context/StakingContext'
import Web3Context from '@/context/Web3Context'
import { ethers } from 'ethers'
import React, { useContext, useRef } from 'react'
import { Button } from '../ui/button'

const Withdraw = () => {
    const{stakingContract}=useContext(Web3Context)
    const {isReload,setIsReload}=useContext(StakingContext)
    const withdrawStakeAmountRef =useRef()

    const withdrawStakeToken=async(e)=>{
        e.preventDefault();
        const amount = withdrawStakeAmountRef.current.value.trim();
        console.log(amount)
        if(isNaN(amount) || amount<=0){
            console.error("Please enter a valid positive number");
            return;
           }

           const amountToWithdraw =ethers.parseUnits(amount,18).toString();
           console.log(amountToWithdraw)
           try {
            const transaction = await stakingContract.withdrawStakedTokens(amountToWithdraw);
            await transaction.wait()
            withdrawStakeAmountRef.current.value = "";
            setIsReload(!isReload);
           } catch (error) {
            console.error(error.message)
           }
    }
  return (
    <>
    <form className="m-2" onSubmit={withdrawStakeToken} >
            <label>Withdraw Token:</label>
            <input className=' text-black p-1' type="text" ref={withdrawStakeAmountRef} />
            <Button onClick={withdrawStakeToken}
            type="submit">withdrwal token</Button>
      </form>
    </>
  )
}

export default Withdraw