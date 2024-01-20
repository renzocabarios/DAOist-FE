"use client";
import { CONNECTION } from "@/env";
import { getAllDaoConfig } from "@/programs/dao2";
import { AnchorProvider } from "@coral-xyz/anchor";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  useEffect(() => {
    const start = async () => {
      const { solana } = window as any;

      const provider = new AnchorProvider(CONNECTION, solana, {
        commitment: "finalized",
      });

      console.log(provider);

      console.log(await getAllDaoConfig(provider));
    };
    start();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <p>
          Build in our DAO a sense of Oneness A feeling of Strength to be
          derived from Unity
        </p>
        <div className="flex justify-between items-center gap-4">
          <p>About Us</p>
          <WalletMultiButton />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p>LOGO</p>
      </div>

      <div className="flex justify-evenly items-center gap-4">
        <p>Members</p>
        <p>New Users</p>
      </div>
      <div className="flex justify-center items-center">
        <p>
          Unleashing the Freedom of Decentralized Autonomous Organizations
          through Utility NFTs across Solana
        </p>
      </div>

      <div className="flex justify-evenly items-center">
        <p>Twitter</p>
        <p>Medium</p>
        <p>Discord</p>
        <p>Telegram</p>
        <p>#3Thos by WBA</p>
      </div>
    </>
  );
}
