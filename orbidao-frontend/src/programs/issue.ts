import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, BN } from "@coral-xyz/anchor";
import { NEXT_PUBLIC_ISSUE_ID } from "@/env";
import { getIssueProgram } from "@/utils";

export function getIssueConfigKey(seed: BN) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    new PublicKey(NEXT_PUBLIC_ISSUE_ID)
  )[0];
}
export async function initializeIssueProgram(
  provider: AnchorProvider,
  seed: BN,
  name: string,
  symbol: string,
  uri: string,
  issuePrice: Number,
  issueAmount: Number
) {
  const program = getIssueProgram(NEXT_PUBLIC_ISSUE_ID, provider);
  return await program.methods
    .initialize(
      seed,
      name,
      symbol,
      uri,
      new BN(issuePrice),
      new BN(issueAmount)
    )
    .accounts({});
}
