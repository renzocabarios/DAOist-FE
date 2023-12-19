import { Program, AnchorProvider, Wallet, Address } from "@coral-xyz/anchor";
import { VOTING_IDL_TYPE } from "@/idl/voting";
import { TREASURY_IDL_TYPE } from "@/idl/treasury";
import { STAKING_IDL_TYPE } from "@/idl/staking";
import { PROPOSAL_IDL_TYPE } from "@/idl/proposal";
import { Connection } from "@solana/web3.js";
import { PROPOSAL_IDL, STAKING_IDL, TREASURY_IDL, VOTING_IDL } from "@/idl";

export const getAnchorProvider = (connection: Connection, wallet: Wallet) => {
  return new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions()
  );
};

export const getProgram = (
  idl:
    | VOTING_IDL_TYPE
    | TREASURY_IDL_TYPE
    | STAKING_IDL_TYPE
    | PROPOSAL_IDL_TYPE,
  programId: Address,
  provider: AnchorProvider
) => {
  return new Program<typeof idl>(idl, programId, provider);
};

export const getProposalProgram = (
  programId: Address,
  provider: AnchorProvider
) => {
  return getProgram(PROPOSAL_IDL, programId, provider);
};

export const getStakingProgram = (
  programId: Address,
  provider: AnchorProvider
) => {
  return getProgram(STAKING_IDL, programId, provider);
};

export const getTreasuryProgram = (
  programId: Address,
  provider: AnchorProvider
) => {
  return getProgram(TREASURY_IDL, programId, provider);
};

export const getVotingProgram = (
  programId: Address,
  provider: AnchorProvider
) => {
  return getProgram(VOTING_IDL, programId, provider);
};
