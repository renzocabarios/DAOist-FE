export type PROPOSAL_IDL_TYPE = {
  version: "0.1.0";
  name: "staking";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "initializer";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "Stake";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          }
        ];
      };
    }
  ];
};

export const PROPOSAL_IDL: PROPOSAL_IDL_TYPE = {
  version: "0.1.0",
  name: "staking",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "initializer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "Stake",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
        ],
      },
    },
  ],
};
