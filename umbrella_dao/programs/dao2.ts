import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { getDao2Program } from "@/utils";
import { NEXT_PUBLIC_DAO_2_ID } from "@/env";

export function getDao2ConfigKey(seed: BN) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    new PublicKey(NEXT_PUBLIC_DAO_2_ID)
  )[0];
}

export async function initializeDao2Program(
  provider: AnchorProvider,
  seed: BN,
  proposalFee: Number,
  minQuorum: Number,
  minTreshold: Number,
  maxExpiry: Number,
  minStake: Number,
  minPrevotingPeriod: Number,
  proposalPublicKey: PublicKey,
  votingPublicKey: PublicKey,
  stakingPublicKey: PublicKey,
  issuePublicKey: PublicKey
) {
  const program = getDao2Program(provider);
  return await program.methods
    .initialize(
      seed,
      new BN(proposalFee),
      new BN(minQuorum),
      new BN(minTreshold),
      new BN(maxExpiry),
      new BN(minStake),
      new BN(minPrevotingPeriod),
      proposalPublicKey,
      votingPublicKey,
      stakingPublicKey,
      issuePublicKey
    )
    .accounts({})
    .instruction();
}
