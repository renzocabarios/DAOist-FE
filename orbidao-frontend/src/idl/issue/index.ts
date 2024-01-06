export type ISSUE_IDL_TYPE = {
  version: "0.1.0";
  name: "issue";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "initializer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "auth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: true;
          isSigner: false;
        },
        {
          name: "token";
          isMut: true;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "edition";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mplProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rentProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "seed";
          type: "u64";
        },
        {
          name: "name";
          type: "string";
        },
        {
          name: "symbol";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        },
        {
          name: "issuePrice";
          type: "u64";
        },
        {
          name: "issueAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "issueTokens";
      accounts: [
        {
          name: "initializer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "initializerAta";
          isMut: true;
          isSigner: false;
        },
        {
          name: "auth";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "verifyNft";
      accounts: [
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "auth";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collectionEdition";
          isMut: false;
          isSigner: false;
        },
        {
          name: "collectionMetadata";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nftMetadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nftEdition";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mplProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "issueNft";
      accounts: [
        {
          name: "initializer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "auth";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nft";
          isMut: true;
          isSigner: true;
        },
        {
          name: "token";
          isMut: true;
          isSigner: false;
        },
        {
          name: "metadata";
          isMut: true;
          isSigner: false;
        },
        {
          name: "edition";
          isMut: true;
          isSigner: false;
        },
        {
          name: "collection";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "treasury";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mplProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rentProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        },
        {
          name: "symbol";
          type: "string";
        },
        {
          name: "uri";
          type: "string";
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "DefaultError";
      msg: "Default Error";
    },
    {
      code: 6001;
      name: "BumpError";
      msg: "Bump Error";
    },
    {
      code: 6002;
      name: "Overflow";
      msg: "Overflow";
    },
    {
      code: 6003;
      name: "Underflow";
      msg: "Underflow";
    },
    {
      code: 6004;
      name: "AccountsOpen";
      msg: "You can't unstake with open accounts";
    },
    {
      code: 6005;
      name: "Expired";
      msg: "Proposal expired";
    },
    {
      code: 6006;
      name: "InvalidSlot";
      msg: "Invalid slot";
    },
    {
      code: 6007;
      name: "InsufficientStake";
      msg: "Insufficient stake";
    },
    {
      code: 6008;
      name: "InvalidName";
      msg: "Invalid name";
    },
    {
      code: 6009;
      name: "InvalidGist";
      msg: "Invalid gist";
    },
    {
      code: 6010;
      name: "InvalidProposalSeed";
      msg: "Invalid proposal seed";
    },
    {
      code: 6011;
      name: "InvalidQuorum";
      msg: "Invalid quorum";
    },
    {
      code: 6012;
      name: "InvalidExpiry";
      msg: "Invalid expiry";
    },
    {
      code: 6013;
      name: "ProposalClosed";
      msg: "Proposal closed";
    },
    {
      code: 6014;
      name: "InvalidVoteAmount";
      msg: "You can't vote 0!";
    },
    {
      code: 6015;
      name: "InvalidProposalStatus";
      msg: "Invalid proposal status";
    },
    {
      code: 6016;
      name: "InvalidStakeAmount";
      msg: "Invalid stake amount";
    },
    {
      code: 6017;
      name: "InvalidThreshold";
      msg: "Invalid Threshold";
    },
    {
      code: 6018;
      name: "InvalidRequiredTime";
      msg: "Invalid Required Time";
    },
    {
      code: 6019;
      name: "InvalidVoteType";
      msg: "Invalid Vote Type";
    },
    {
      code: 6020;
      name: "SingleChoice";
      msg: "AlreadyVoted";
    },
    {
      code: 6021;
      name: "InvalidChoicesAmount";
      msg: "Invalid choices amount";
    },
    {
      code: 6022;
      name: "InvalidChoice";
      msg: "Invalid choice";
    }
  ];
};

export const ISSUE_IDL: ISSUE_IDL_TYPE = {
  version: "0.1.0",
  name: "issue",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "auth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: true,
          isSigner: false,
        },
        {
          name: "token",
          isMut: true,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "edition",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mplProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rentProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "seed",
          type: "u64",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "symbol",
          type: "string",
        },
        {
          name: "uri",
          type: "string",
        },
        {
          name: "issuePrice",
          type: "u64",
        },
        {
          name: "issueAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "issueTokens",
      accounts: [
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "initializerAta",
          isMut: true,
          isSigner: false,
        },
        {
          name: "auth",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "verifyNft",
      accounts: [
        {
          name: "signer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "auth",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collectionEdition",
          isMut: false,
          isSigner: false,
        },
        {
          name: "collectionMetadata",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nftMetadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nftEdition",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mplProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "issueNft",
      accounts: [
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "auth",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nft",
          isMut: true,
          isSigner: true,
        },
        {
          name: "token",
          isMut: true,
          isSigner: false,
        },
        {
          name: "metadata",
          isMut: true,
          isSigner: false,
        },
        {
          name: "edition",
          isMut: true,
          isSigner: false,
        },
        {
          name: "collection",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "treasury",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mplProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rentProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "symbol",
          type: "string",
        },
        {
          name: "uri",
          type: "string",
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "DefaultError",
      msg: "Default Error",
    },
    {
      code: 6001,
      name: "BumpError",
      msg: "Bump Error",
    },
    {
      code: 6002,
      name: "Overflow",
      msg: "Overflow",
    },
    {
      code: 6003,
      name: "Underflow",
      msg: "Underflow",
    },
    {
      code: 6004,
      name: "AccountsOpen",
      msg: "You can't unstake with open accounts",
    },
    {
      code: 6005,
      name: "Expired",
      msg: "Proposal expired",
    },
    {
      code: 6006,
      name: "InvalidSlot",
      msg: "Invalid slot",
    },
    {
      code: 6007,
      name: "InsufficientStake",
      msg: "Insufficient stake",
    },
    {
      code: 6008,
      name: "InvalidName",
      msg: "Invalid name",
    },
    {
      code: 6009,
      name: "InvalidGist",
      msg: "Invalid gist",
    },
    {
      code: 6010,
      name: "InvalidProposalSeed",
      msg: "Invalid proposal seed",
    },
    {
      code: 6011,
      name: "InvalidQuorum",
      msg: "Invalid quorum",
    },
    {
      code: 6012,
      name: "InvalidExpiry",
      msg: "Invalid expiry",
    },
    {
      code: 6013,
      name: "ProposalClosed",
      msg: "Proposal closed",
    },
    {
      code: 6014,
      name: "InvalidVoteAmount",
      msg: "You can't vote 0!",
    },
    {
      code: 6015,
      name: "InvalidProposalStatus",
      msg: "Invalid proposal status",
    },
    {
      code: 6016,
      name: "InvalidStakeAmount",
      msg: "Invalid stake amount",
    },
    {
      code: 6017,
      name: "InvalidThreshold",
      msg: "Invalid Threshold",
    },
    {
      code: 6018,
      name: "InvalidRequiredTime",
      msg: "Invalid Required Time",
    },
    {
      code: 6019,
      name: "InvalidVoteType",
      msg: "Invalid Vote Type",
    },
    {
      code: 6020,
      name: "SingleChoice",
      msg: "AlreadyVoted",
    },
    {
      code: 6021,
      name: "InvalidChoicesAmount",
      msg: "Invalid choices amount",
    },
    {
      code: 6022,
      name: "InvalidChoice",
      msg: "Invalid choice",
    },
  ],
};
