'use client'
import React from 'react'
import StakedAmount from './StakedAmount'
import EarnedAmount from './EarnedAmount'
import RewardAmount from './RewardAmount'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Details = () => {

 return(<>
  <Card >
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      <StakedAmount/>
      </CardDescription>
  </CardHeader>
  <CardContent>
    <p><EarnedAmount/></p>

  </CardContent>
  <CardFooter>
    {/* <p>Card Footer</p> */}
    <RewardAmount/>
  </CardFooter>
</Card>
 </>)



  // return (
  //  <>
    
  //   <StakedAmount/>
  //  <EarnedAmount/>
  //  <RewardAmount/>
  
   
  //  </>
  // )
}

export default Details