import { PublicKey, SystemProgram } from "@solana/web3.js";
import { AnchorProvider } from "@coral-xyz/anchor";

import { getVotingProgram } from "@/utils";
import { NEXT_PUBLIC_VOTING_ID } from "@/env";

async function initializeVotingProgram(
  provider: AnchorProvider,
  initializer: PublicKey,
  auth: PublicKey,
  config: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);

  await program.methods
    .initialize()
    .accounts({
      initializer: initializer,
      auth: auth,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the voteNft method
async function voteNft(
  provider: AnchorProvider,
  amount: number,
  choice: number,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);

  await program.methods
    .voteNft(amount, choice)
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the cleanupVoteNft method
async function cleanupVoteNft(
  provider: AnchorProvider,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);

  await program.methods
    .cleanupVoteNft()
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the removeVoteNft method
async function removeVoteNft(
  provider: AnchorProvider,
  owner: PublicKey,
  config: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);

  await program.methods
    .removeVoteNft()
    .accounts({
      owner: owner,
      config: config,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
}

// Call the issueTokens method
async function issueTokens(
  provider: AnchorProvider,
  initializer: PublicKey,
  initializerAta: PublicKey,
  auth: PublicKey,
  mint: PublicKey,
  config: PublicKey,
  coreConfig: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);

  // await program.methods
  //   .issueTokens()
  //   .accounts({
  //     initializer: initializer,
  //     initializerAta: initializerAta,
  //     auth: auth,
  //     mint: mint,
  //     config: config,
  //     coreConfig: coreConfig,
  //     tokenProgram: TOKEN_PROGRAM_ID,
  //     associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
  //     systemProgram: SystemProgram.programId,
  //     rentProgram: SYSVAR_RENT_PUBKEY,
  //   })
  //   .rpc();
}
