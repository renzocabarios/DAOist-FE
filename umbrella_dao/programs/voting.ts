import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getVotingProgram } from "@/utils";
import { NEXT_PUBLIC_VOTING_ID } from "@/env";

export function getVotingConfigKey(seed: BN) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    new PublicKey(NEXT_PUBLIC_VOTING_ID)
  )[0];
}

export async function initializeVotingProgram(
  provider: AnchorProvider,
  seed: BN,
  stakingPublicKey: PublicKey,
  proposalPublicKey: PublicKey
) {
  const program = getVotingProgram(provider);
  return await program.methods
    .initialize(seed, stakingPublicKey, proposalPublicKey)
    .accounts({})
    .instruction();
}
