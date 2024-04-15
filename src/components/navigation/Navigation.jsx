import React from 'react'
import ConnectedAccount from './connectedAccount'
import ConnectedNetwork from './connectedNetwork'
import ClaimReward from '../claimReard/ClaimReward'

const Navigation = () => {
  return (
  <>
  <ClaimReward/>
  <ConnectedAccount/>
  <ConnectedNetwork/>
  </>
  )
}

export default Navigation