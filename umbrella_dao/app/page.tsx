"use client";
import { CONNECTION } from "@/env";
import { getAllDaoConfig } from "@/programs/dao";
import { AnchorProvider } from "@coral-xyz/anchor";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";
import style from "./style.module.css";
import { Button } from "@/components";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const { solana } = window as any;
    const provider = new AnchorProvider(CONNECTION, solana, {
      commitment: "finalized",
    });
    console.log(await getAllDaoConfig(provider));
  };

  return (
    <main className="">
      <div className={style.header}>
        <p>
          Build in our DAO a sense of Oneness A feeling of Strength to be
          derived from Unity
        </p>
        <div className="flex justify-between items-center gap-4">
          <p>About Us</p>
          <WalletMultiButton />
        </div>
      </div>

      <div className={style.body}>
        <p>LOGO</p>

        <div className="flex justify-between items-center gap-20">
          <Button>Members</Button>
          <Button>New Users</Button>
        </div>
        <div className="flex justify-center items-center">
          <p>
            Unleashing the Freedom of Decentralized Autonomous Organizations
            through Utility NFTs across Solana
          </p>
        </div>
      </div>

      <div className={style.footer}>
        <p>Twitter</p>
        <p>Medium</p>
        <p>Discord</p>
        <p>Telegram</p>
        <p>#3Thos by WBA</p>
      </div>
    </main>
  );
}
