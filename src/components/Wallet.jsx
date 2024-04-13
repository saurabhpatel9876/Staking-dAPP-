"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import { ConnectWallet } from '@/utils/connectWallet'
import HandleAccountChange from '@/utils/HandleAccountChange'
import HandleChainChange from '@/utils/HandleChainChange'
import Web3Context from '@/context/Web3Context'
const Wallet = ({children}) => {
    const [state,setState]=useState({
        provider:null,
        account:null,
        stakingContract:null,
        stakeTokenContract:null,
        chianId:null
     })

     const [isLoading,setIsLoading]=useState(false);

     useEffect(()=>{
   window.ethereum.on('accountsChanged',()=>HandleAccountChange(setState))
   window.ethereum.on('chainChanged',()=>HandleChainChange(setState)) 
   
   return()=>{
    window.ethereum.removeListener('accountsChanged',()=>HandleAccountChange(setState))
    window.ethereum.removeListener('chainChanged',()=>HandleChainChange(setState)) 
   }
},[])

     const handleWallet = async()=>{
        try{
            setIsLoading(true);
            const { provider,selectedAccount,stakingContract,stakeTokenContract,chainId} = await ConnectWallet() ;
            console.log(provider,selectedAccount,stakingContract,stakeTokenContract,chainId)
            setState({provider,selectedAccount,stakingContract,stakeTokenContract,chainId})
    
        }catch(error){
        //    toast.error("Error connecting wallet")
           console.error(error.message)
        }finally{
            setIsLoading(false)
        }
     }
  return (
  <>
    <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
   {/* {isLoading && <p>Loading...</p>} */}
  <button onClick={handleWallet}>wallet connect</button>
  </>
  )
}

export default Wallet