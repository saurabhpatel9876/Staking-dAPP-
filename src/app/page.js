
import StakeAmount from "@/components/StakeToken/StakeAmount";
import TokenApproval from "@/components/StakeToken/TokenApproval";
import Wallet from "@/components/Wallet";

import ClaimReward from "@/components/claimReard/ClaimReward";
import Details from "@/components/details/Details";
import Navigation from "@/components/navigation/Navigation";
import Withdraw from "@/components/withdrawal/Withdraw";
import { StakingProvider } from "@/context/StakingContext";
import Image from "next/image";

export default function Home() {
  return (
   <>
  <div className="">
  <Wallet>
    <Navigation/>
   <Details/>
 
   <StakeAmount/>
   <TokenApproval/>
   <Withdraw/>
<ClaimReward/>
   </Wallet>
  </div>
   </>
  );
}
