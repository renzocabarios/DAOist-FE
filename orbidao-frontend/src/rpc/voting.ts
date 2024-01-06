import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getVotingProgram } from "@/utils";
import { NEXT_PUBLIC_VOTING_ID } from "@/env";

export async function initializeVotingProgram(
  provider: AnchorProvider,
  seed: BN,
  porposalPublicKey: PublicKey,
  stakingPublicKey: PublicKey,
  issuePublickey: PublicKey
) {
  const program = getVotingProgram(NEXT_PUBLIC_VOTING_ID, provider);
  return await program.methods
    .initialize(seed, stakingPublicKey, porposalPublicKey, issuePublickey)
    .accounts({});
}
