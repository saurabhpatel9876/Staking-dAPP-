
import { Inter } from "next/font/google";
import "./globals.css";
import Web3Context from "@/context/Web3Context";
import { StakingProvider } from "@/context/StakingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">
      <body className={inter.className}>
        <StakingProvider>
        {children}
        </StakingProvider>
    
        </body>
    </html>
  );
}
