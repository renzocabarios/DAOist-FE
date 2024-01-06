import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getStakingProgram } from "@/utils";
import { NEXT_PUBLIC_STAKINGL_ID } from "@/env";

export async function initializeStakingProgram(
  provider: AnchorProvider,
  seed: BN,
  issuePublickey: PublicKey
) {
  const program = getStakingProgram(NEXT_PUBLIC_STAKINGL_ID, provider);
  return await program.methods.initialize(seed, issuePublickey).accounts({});
}
