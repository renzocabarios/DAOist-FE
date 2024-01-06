import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getProposalProgram } from "@/utils";
import { NEXT_PUBLIC_PROPOSAL_ID } from "@/env";

export async function initializeProposalProgram(
  provider: AnchorProvider,
  seed: BN,
  dao2PublicKey: PublicKey,
  stakingPublicKey: PublicKey
) {
  const program = getProposalProgram(NEXT_PUBLIC_PROPOSAL_ID, provider);
  return await program.methods
    .initialize(seed, stakingPublicKey, dao2PublicKey)
    .accounts({});
}
