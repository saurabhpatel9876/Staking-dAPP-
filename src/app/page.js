import Wallet from "@/components/Wallet";
import ClaimReward from "@/components/claimReard/ClaimReward";
import Details from "@/components/details/Details";
import Navigation from "@/components/navigation/Navigation";
import { StakingProvider } from "@/context/StakingContext";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Wallet>
    <Navigation/>
   <Details/>
   <ClaimReward/>
   </Wallet>
   </>
  );
}
