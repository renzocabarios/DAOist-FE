import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getDao2Program } from "@/utils";
import { NEXT_PUBLIC_DAO_2_ID } from "@/env";

export async function initializeDao2Program(
  provider: AnchorProvider,
  seed: BN,
  proposalPublicKey: PublicKey,
  votingPublicKey: PublicKey,
  stakingPublicKey: PublicKey,
  issuePublicKey: PublicKey
) {
  const program = getDao2Program(NEXT_PUBLIC_DAO_2_ID, provider);
  return await program.methods
    .initialize(
      seed,
      new BN(1e8),
      new BN(70),
      new BN(1000),
      new BN(432000),
      new BN(108000),
      new BN(50),
      proposalPublicKey,
      votingPublicKey,
      stakingPublicKey,
      issuePublicKey
    )
    .accounts({});
}
