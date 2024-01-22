"use client";
import { CONNECTION } from "@/env";
import { initializeDaoProgram } from "@/programs/dao";
import { initializeProposalProgram } from "@/programs/proposal";
import { initializeVotingProgram } from "@/programs/voting";
import { createTransaction } from "@/utils";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Keypair, PublicKey } from "@solana/web3.js";
import { randomBytes } from "crypto";
import { useEffect } from "react";
require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  const { publicKey, sendTransaction } = useWallet();
  const create = async () => {
    const { solana } = window as any;
    const provider = new AnchorProvider(CONNECTION, solana, {
      commitment: "finalized",
    });
    const seed = new BN(randomBytes(8));

    const proposalKeypair = Keypair.generate();
    const votingKeypair = Keypair.generate();
    const stakingKeypair = Keypair.generate();
    const daoKeypair = Keypair.generate();
    const collectionMint = new PublicKey(
      "9v9gYTGVaY7f5RXwHNPd7yMdKJ98HWaq456G6HeaShVA"
    );

    const instructions = [
      await initializeVotingProgram(
        provider,
        seed,
        stakingKeypair.publicKey,
        proposalKeypair.publicKey
      ),
      await initializeProposalProgram(
        provider,
        seed,
        stakingKeypair.publicKey,
        daoKeypair.publicKey
      ),
      await initializeDaoProgram(
        provider,
        seed,
        1,
        1,
        1,
        1,
        1,
        1,
        proposalKeypair.publicKey,
        votingKeypair.publicKey,
        stakingKeypair.publicKey,
        collectionMint
      ),
      await initializeDaoProgram(
        provider,
        seed,
        1,
        1,
        1,
        1,
        1,
        1,
        proposalKeypair.publicKey,
        votingKeypair.publicKey,
        stakingKeypair.publicKey,
        collectionMint
      ),
    ];

    await sendTransaction(await createTransaction(instructions), CONNECTION);
  };

  return (
    <>
      <button onClick={create}>Create DAO</button>
    </>
  );
}
