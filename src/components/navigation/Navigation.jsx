'use client'
import React from 'react'
import ConnectedAccount from './ConnectedAccount'
import ConnectedNetwork from './ConnectedNetwork'
import ClaimReward from '../claimReard/ClaimReward'
import { useState } from 'react';
import Link from 'next/link'
import { Button } from '../ui/button'

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        {/* <Link href="/" className="text-white text-lg font-bold">
         logo
        </Link> */}

        {/* Responsive toggle button */}
        {/* <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button> */}

        {/* Navbar links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center`}
        >
          <div href="/" className="text-white hover:text-gray-300 ml-4">
           <ConnectedAccount/>
          </div>
          <div href="/about" className="text-white hover:text-gray-300 ml-4">
           <ConnectedNetwork/>
          </div>
        
          {/* Add more navigation links as needed */}

        
        </div>
        <button
          className="lg:hidden text-white focus:outline-none "
          onClick={toggleNavbar}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>
  );
    

//   return (
//   <>
//  <div className=' '>
//  <ClaimReward/>
//   <ConnectedAccount/>
//   <ConnectedNetwork/>
//  </div>
//   </>
//   )
}

export default Navigation