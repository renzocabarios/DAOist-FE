import { Program, AnchorProvider, Wallet, Address } from "@coral-xyz/anchor";
import { VOTING_IDL_TYPE } from "@/idl/voting";
import { DAO_2_IDL_TYPE } from "@/idl/dao_2";
import { STAKING_IDL_TYPE } from "@/idl/staking";
import { PROPOSAL_IDL_TYPE } from "@/idl/proposal";
import { Connection } from "@solana/web3.js";
import {
  PROPOSAL_IDL,
  STAKING_IDL,
  DAO_2_IDL,
  VOTING_IDL,
  ISSUE_IDL_TYPE,
  ISSUE_IDL,
} from "@/idl";

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
    | DAO_2_IDL_TYPE
    | STAKING_IDL_TYPE
    | PROPOSAL_IDL_TYPE
    | ISSUE_IDL_TYPE,
  programId: Address,
  provider: AnchorProvider
): Program<typeof idl> => {
  return new Program<typeof idl>(idl, programId, provider);
};

export const getIssueProgram = (
  programId: Address,
  provider: AnchorProvider
): Program<ISSUE_IDL_TYPE> => {
  return getProgram(ISSUE_IDL, programId, provider) as Program<ISSUE_IDL_TYPE>;
};

export const getProposalProgram = (
  programId: Address,
  provider: AnchorProvider
): Program<PROPOSAL_IDL_TYPE> => {
  return getProgram(
    PROPOSAL_IDL,
    programId,
    provider
  ) as Program<PROPOSAL_IDL_TYPE>;
};

export const getStakingProgram = (
  programId: Address,
  provider: AnchorProvider
): Program<STAKING_IDL_TYPE> => {
  return getProgram(
    STAKING_IDL,
    programId,
    provider
  ) as Program<STAKING_IDL_TYPE>;
};

export const getDao2Program = (
  programId: Address,
  provider: AnchorProvider
): Program<DAO_2_IDL_TYPE> => {
  return getProgram(DAO_2_IDL, programId, provider) as Program<DAO_2_IDL_TYPE>;
};

export const getVotingProgram = (
  programId: Address,
  provider: AnchorProvider
): Program<VOTING_IDL_TYPE> => {
  return getProgram(VOTING_IDL, programId, provider) as Program<
    typeof VOTING_IDL
  >;
};
