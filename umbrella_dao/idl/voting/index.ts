export type VOTING_IDL_TYPE = {
  version: "0.1.0";
  name: "voting";
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
        }
      ];
      args: [
        {
          name: "seed";
          type: "u64";
        },
        {
          name: "stakingProgram";
          type: "publicKey";
        },
        {
          name: "proposalProgram";
          type: "publicKey";
        }
      ];
    },
    {
      name: "vote";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vote";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakingProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "coreConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "choice";
          type: "u8";
        }
      ];
    },
    {
      name: "cleanupVote";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vote";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakingProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
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
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "removeVote";
      accounts: [
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "vote";
          isMut: true;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposalProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "proposal";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakingProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "stakeState";
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
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "choice";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "DaoConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "seed";
            type: "u64";
          },
          {
            name: "proposalFee";
            type: "u64";
          },
          {
            name: "minQuorum";
            type: "u64";
          },
          {
            name: "minThreshold";
            type: "u64";
          },
          {
            name: "maxExpiry";
            type: "u64";
          },
          {
            name: "minStake";
            type: "u64";
          },
          {
            name: "minPrevotingPeriod";
            type: "u64";
          },
          {
            name: "proposalCount";
            type: "u64";
          },
          {
            name: "proposalProgram";
            type: "publicKey";
          },
          {
            name: "votingProgram";
            type: "publicKey";
          },
          {
            name: "stakingProgram";
            type: "publicKey";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "configBump";
            type: "u8";
          },
          {
            name: "treasuryBump";
            type: "u8";
          },
          {
            name: "collectionMint";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "Proposal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "u64";
          },
          {
            name: "name";
            type: "string";
          },
          {
            name: "gist";
            type: "string";
          },
          {
            name: "proposal";
            type: {
              defined: "ProposalType";
            };
          },
          {
            name: "result";
            type: {
              defined: "ProposalStatus";
            };
          },
          {
            name: "quorum";
            type: "u64";
          },
          {
            name: "threshold";
            type: "u64";
          },
          {
            name: "votes";
            type: "u64";
          },
          {
            name: "expiry";
            type: "u64";
          },
          {
            name: "choices";
            type: "u8";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "createdTime";
            type: "u64";
          },
          {
            name: "voteCounts";
            type: {
              vec: "u64";
            };
          },
          {
            name: "prevotingPeriod";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "StakeState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "accounts";
            type: "u64";
          },
          {
            name: "updated";
            type: "u64";
          },
          {
            name: "vaultBump";
            type: "u8";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VoteConfig";
      type: {
        kind: "struct";
        fields: [
          {
            name: "seed";
            type: "u64";
          },
          {
            name: "stakingProgram";
            type: "publicKey";
          },
          {
            name: "proposalProgram";
            type: "publicKey";
          },
          {
            name: "authBump";
            type: "u8";
          },
          {
            name: "configBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VoteState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "choice";
            type: "u8";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "ProposalStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "PreVoting";
          },
          {
            name: "Open";
          },
          {
            name: "Succeeded";
          },
          {
            name: "Failed";
          }
        ];
      };
    },
    {
      name: "ProposalType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Bounty";
            fields: ["publicKey", "u64"];
          },
          {
            name: "Executable";
          },
          {
            name: "Vote";
          }
        ];
      };
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
  metadata: {
    address: "voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC";
  };
};

export const VOTING_IDL: VOTING_IDL_TYPE = {
  version: "0.1.0",
  name: "voting",
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
      ],
      args: [
        {
          name: "seed",
          type: "u64",
        },
        {
          name: "stakingProgram",
          type: "publicKey",
        },
        {
          name: "proposalProgram",
          type: "publicKey",
        },
      ],
    },
    {
      name: "vote",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vote",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakingProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "coreConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "choice",
          type: "u8",
        },
      ],
    },
    {
      name: "cleanupVote",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vote",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakingProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
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
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "removeVote",
      accounts: [
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "vote",
          isMut: true,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposalProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "proposal",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakingProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "stakeState",
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
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "choice",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "DaoConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "seed",
            type: "u64",
          },
          {
            name: "proposalFee",
            type: "u64",
          },
          {
            name: "minQuorum",
            type: "u64",
          },
          {
            name: "minThreshold",
            type: "u64",
          },
          {
            name: "maxExpiry",
            type: "u64",
          },
          {
            name: "minStake",
            type: "u64",
          },
          {
            name: "minPrevotingPeriod",
            type: "u64",
          },
          {
            name: "proposalCount",
            type: "u64",
          },
          {
            name: "proposalProgram",
            type: "publicKey",
          },
          {
            name: "votingProgram",
            type: "publicKey",
          },
          {
            name: "stakingProgram",
            type: "publicKey",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "configBump",
            type: "u8",
          },
          {
            name: "treasuryBump",
            type: "u8",
          },
          {
            name: "collectionMint",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "Proposal",
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "u64",
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "gist",
            type: "string",
          },
          {
            name: "proposal",
            type: {
              defined: "ProposalType",
            },
          },
          {
            name: "result",
            type: {
              defined: "ProposalStatus",
            },
          },
          {
            name: "quorum",
            type: "u64",
          },
          {
            name: "threshold",
            type: "u64",
          },
          {
            name: "votes",
            type: "u64",
          },
          {
            name: "expiry",
            type: "u64",
          },
          {
            name: "choices",
            type: "u8",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "createdTime",
            type: "u64",
          },
          {
            name: "voteCounts",
            type: {
              vec: "u64",
            },
          },
          {
            name: "prevotingPeriod",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "StakeState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "accounts",
            type: "u64",
          },
          {
            name: "updated",
            type: "u64",
          },
          {
            name: "vaultBump",
            type: "u8",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VoteConfig",
      type: {
        kind: "struct",
        fields: [
          {
            name: "seed",
            type: "u64",
          },
          {
            name: "stakingProgram",
            type: "publicKey",
          },
          {
            name: "proposalProgram",
            type: "publicKey",
          },
          {
            name: "authBump",
            type: "u8",
          },
          {
            name: "configBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VoteState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "choice",
            type: "u8",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "ProposalStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "PreVoting",
          },
          {
            name: "Open",
          },
          {
            name: "Succeeded",
          },
          {
            name: "Failed",
          },
        ],
      },
    },
    {
      name: "ProposalType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Bounty",
            fields: ["publicKey", "u64"],
          },
          {
            name: "Executable",
          },
          {
            name: "Vote",
          },
        ],
      },
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
  metadata: {
    address: "voteUXym9t6h3VzHYumMyMCXmiDoYqMiC2g4JnvdnGC",
  },
};
