/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TrueMultiFarm } from "../TrueMultiFarm";

export class TrueMultiFarm__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrueMultiFarm> {
    return super.deploy(overrides || {}) as Promise<TrueMultiFarm>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrueMultiFarm {
    return super.attach(address) as TrueMultiFarm;
  }
  connect(signer: Signer): TrueMultiFarm__factory {
    return super.connect(signer) as TrueMultiFarm__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrueMultiFarm {
    return new Contract(address, _abi, signerOrProvider) as TrueMultiFarm;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountClaimed",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountStaked",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnstaked",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "claimable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "farmRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "cumulativeRewardPerToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalClaimedRewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "getShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITrueDistributor",
        name: "_trueDistributor",
        type: "address",
      },
      {
        internalType: "contract IStkTruToken",
        name: "_stkTru",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "updatedShares",
        type: "uint256[]",
      },
    ],
    name: "setShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "staked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "stakerRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "cumulativeRewardPerToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalClaimedRewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stkTru",
    outputs: [
      {
        internalType: "contract IStkTruToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tru",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trueDistributor",
    outputs: [
      {
        internalType: "contract ITrueDistributor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612933806100206000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80638da5cb5b116100d8578063e30c39781161008c578063f5525afc11610066578063f5525afc14610408578063f6670bd614610410578063fd636b261461048057610177565b8063e30c3978146103b4578063f0f0b228146103bc578063f2fde38b146103e257610177565b8063c2a672e0116100bd578063c2a672e01461032c578063c6d3afc914610358578063d4570c1c1461038657610177565b80638da5cb5b146102f8578063adc9772e1461030057610177565b8063392e53cd1161012f57806349f415c81161011457806349f415c8146102a45780634b3ab9c5146102ca5780634e71e0c8146102f057610177565b8063392e53cd1461025a578063485cc9551461027657610177565b806313e30a331161016057806313e30a33146101ba57806316934fc4146101c2578063318d9e5d146101e857610177565b806303314efa1461017c57806304db151814610196575b600080fd5b610184610542565b60408051918252519081900360200190f35b61019e610548565b604080516001600160a01b039092168252519081900360200190f35b61019e610557565b610184600480360360208110156101d857600080fd5b50356001600160a01b0316610566565b610258600480360360208110156101fe57600080fd5b81019060208101813564010000000081111561021957600080fd5b82018360208201111561022b57600080fd5b8035906020019184602083028401116401000000008311171561024d57600080fd5b509092509050610578565b005b6102626105f6565b604080519115158252519081900360200190f35b6102586004803603604081101561028c57600080fd5b506001600160a01b03813581169160200135166105ff565b6102ac6108f4565b60408051938452602084019290925282820152519081900360600190f35b610184600480360360208110156102e057600080fd5b50356001600160a01b0316610900565b61025861091b565b61019e6109fc565b6102586004803603604081101561031657600080fd5b506001600160a01b038135169060200135610a0b565b6102586004803603604081101561034257600080fd5b506001600160a01b038135169060200135610ba5565b6101846004803603604081101561036e57600080fd5b506001600160a01b0381358116916020013516610bc1565b6101846004803603604081101561039c57600080fd5b506001600160a01b0381358116916020013516610bf2565b61019e610e11565b6102ac600480360360208110156103d257600080fd5b50356001600160a01b0316610e20565b610258600480360360208110156103f857600080fd5b50356001600160a01b0316610e41565b61019e610eff565b6102586004803603602081101561042657600080fd5b81019060208101813564010000000081111561044157600080fd5b82018360208201111561045357600080fd5b8035906020019184602083028401116401000000008311171561047557600080fd5b509092509050610f0e565b6102586004803603604081101561049657600080fd5b8101906020810181356401000000008111156104b157600080fd5b8201836020820111156104c357600080fd5b803590602001918460208302840111640100000000831117156104e557600080fd5b91939092909160208101903564010000000081111561050357600080fd5b82018360208201111561051557600080fd5b8035906020019184602083028401116401000000008311171561053757600080fd5b509092509050610fe7565b60395481565b6036546001600160a01b031681565b6040546001600160a01b031681565b60376020526000908152604090205481565b806105816111fb565b60005b818110156105b8576105b084848381811061059b57fe5b905060200201356001600160a01b0316611399565b600101610584565b5060005b818110156105f0576105e88484838181106105d357fe5b905060200201356001600160a01b03166113ae565b6001016105bc565b50505050565b60005460ff1690565b600054610100900460ff16806106185750610618611609565b80610626575060005460ff16155b61067b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612823602e913960400191505060405180910390fd5b600054610100900460ff161580156106e157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6106ea3361160f565b603680547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516908117909155604080517fd13deb2f000000000000000000000000000000000000000000000000000000008152905163d13deb2f91600480820192602092909190829003018186803b15801561076f57600080fd5b505afa158015610783573d6000803e3d6000fd5b505050506040513d602081101561079957600080fd5b5051603580547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b03938416179091556040805490911684831617815560365481517f36e9332d0000000000000000000000000000000000000000000000000000000081529151309391909116916336e9332d916004808301926020929190829003018186803b15801561083557600080fd5b505afa158015610849573d6000803e3d6000fd5b505050506040513d602081101561085f57600080fd5b50516001600160a01b0316146108c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806127b2602a913960400191505060405180910390fd5b80156108ef57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b603b54603e54603f5483565b6001600160a01b03166000908152603a602052604090205490565b6034546001600160a01b0316331461097e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806128766028913960400191505060405180910390fd5b6034546033546040516001600160a01b0392831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b03841617909155169055565b6033546001600160a01b031690565b6001600160a01b0382166000908152603a60205260409020548290610a7b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806127486027913960400191505060405180910390fd5b82610a846111fb565b610a8d81611399565b6001600160a01b0384166000908152603760209081526040808320338452600101909152902054610ac4908463ffffffff61178516565b6001600160a01b03851660008181526037602081815260408084203385526001810183529084209590955592909152905254610b06908463ffffffff61178516565b6001600160a01b038516600090815260376020908152604080832093909355603881528282203383526002019052205415610b4457610b44846113ae565b610b5f6001600160a01b03851633308663ffffffff61180016565b60408051848152905133916001600160a01b038716917f99039fcf0a98f484616c5196ee8b2ecfa971babf0b519848289ea4db381f85f79181900360200190a350505050565b81610bae6111fb565b610bb781611399565b6108ef8383611888565b6001600160a01b03808316600090815260376020908152604080832093851683526001909301905220545b92915050565b6001600160a01b03808316600090815260376020908152604080832093851683526001909301905290812054610c5257506001600160a01b0380831660009081526038602090815260408083209385168352600290930190522054610bec565b6000610c5d846119f1565b6001600160a01b03851660009081526038602052604081206003015491925090610cad906c0c9f2c9cd04674edea4000000090610ca190859063ffffffff61178516565b9063ffffffff611cad16565b6001600160a01b03861660009081526038602052604081206004015491925090610cde90839063ffffffff611d2016565b6001600160a01b03871660009081526037602052604081205491925090610d3590610d1090849063ffffffff611d9716565b6001600160a01b0389166000908152603860205260409020549063ffffffff61178516565b6001600160a01b038089166000908152603860209081526040808320938b168352600190930190522054909150610e0690610dd0906c0c9f2c9cd04674edea4000000090610dc490610d8e90869063ffffffff611d2016565b6001600160a01b03808d166000908152603760209081526040808320938f1683526001909301905220549063ffffffff611cad16565b9063ffffffff611d9716565b6001600160a01b03808a166000908152603860209081526040808320938c1683526002909301905220549063ffffffff61178516565b979650505050505050565b6034546001600160a01b031690565b60386020526000908152604090208054600382015460049092015490919083565b610e49611e18565b6033546001600160a01b03908116911614610ec557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6035546001600160a01b031681565b610f166111fb565b8060005b81811015610f3957610f3184848381811061059b57fe5b600101610f1a565b5060005b818110156105f057610f548484838181106105d357fe5b610fdf848483818110610f6357fe5b905060200201356001600160a01b031660376000878786818110610f8357fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b031681526020019081526020016000206001016000336001600160a01b03166001600160a01b0316815260200190815260200160002054611888565b600101610f3d565b610fef611e18565b6033546001600160a01b0390811691161461106b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b828181146110c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806128516025913960400191505060405180910390fd5b6110cc6111fb565b60005b81811015611103576110fb8686838181106110e657fe5b905060200201356001600160a01b0316611e1c565b6001016110cf565b5060005b818110156111f3576000603a8188888581811061112057fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002054905084848381811061115f57fe5b905060200201356039600101600089898681811061117957fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020819055506111e78585848181106111bc57fe5b905060200201356111db83603960000154611d2090919063ffffffff16565b9063ffffffff61178516565b60395550600101611107565b505050505050565b603654604080517f38b0789d00000000000000000000000000000000000000000000000000000000815290516000926001600160a01b0316916338b0789d916004808301926020929190829003018186803b15801561125957600080fd5b505afa15801561126d573d6000803e3d6000fd5b505050506040513d602081101561128357600080fd5b50511180156113215750603654604080517f36e9332d000000000000000000000000000000000000000000000000000000008152905130926001600160a01b0316916336e9332d916004808301926020929190829003018186803b1580156112ea57600080fd5b505afa1580156112fe573d6000803e3d6000fd5b505050506040513d602081101561131457600080fd5b50516001600160a01b0316145b1561138f57603660009054906101000a90046001600160a01b03166001600160a01b031663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561137657600080fd5b505af115801561138a573d6000803e3d6000fd5b505050505b611397611f01565b565b6113a281611fda565b6113ab81611fec565b50565b6001600160a01b0381166000818152603860208181526040808420338552600281018352908420549490935252600301546113ef908263ffffffff61178516565b6001600160a01b038316600090815260386020526040902060030155603e5461141e908263ffffffff61178516565b603e556001600160a01b03821660008181526038602090815260408083203384526002018252808320839055928252603d90522054611463908263ffffffff611d2016565b6001600160a01b038084166000908152603d60205260409081902092909255905460355461149c9290811691168363ffffffff6120e616565b6040805481517fa694fc3a0000000000000000000000000000000000000000000000000000000081526004810184905291516001600160a01b039091169163a694fc3a91602480830192600092919082900301818387803b15801561150057600080fd5b505af1158015611514573d6000803e3d6000fd5b50506040805481517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291516115c594503393506001600160a01b03909116916370a08231916024808301926020929190829003018186803b15801561158057600080fd5b505afa158015611594573d6000803e3d6000fd5b505050506040513d60208110156115aa57600080fd5b50516040546001600160a01b0316919063ffffffff61225a16565b60408051828152905133916001600160a01b038516917f70eb43c4a8ae8c40502dcf22436c509c28d6ff421cf07c491be56984bd9870689181900360200190a35050565b303b1590565b600054610100900460ff16806116285750611628611609565b80611636575060005460ff16155b61168b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612823602e913960400191505060405180910390fd5b600054610100900460ff161580156116f157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561178157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b6000828201838110156117f957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526105f09085906122d6565b6001600160a01b0382166000908152603760209081526040808320338452600101909152902054811115611907576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604381526020018061276f6043913960600191505060405180910390fd5b6001600160a01b038216600090815260376020908152604080832033845260010190915290205461193e908263ffffffff611d2016565b6001600160a01b03831660008181526037602081815260408084203385526001810183529084209590955592909152905254611980908263ffffffff611d2016565b6001600160a01b0383166000818152603760205260409020919091556119ad90338363ffffffff61225a16565b60408051828152905133916001600160a01b038516917f390b1276974b9463e5d66ab10df69b6f3d7b930eb066a0e66df327edd2cc811c9181900360200190a35050565b600080306001600160a01b0316603660009054906101000a90046001600160a01b03166001600160a01b03166336e9332d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611a4c57600080fd5b505afa158015611a60573d6000803e3d6000fd5b505050506040513d6020811015611a7657600080fd5b50516001600160a01b031614611a8d576000611b08565b603660009054906101000a90046001600160a01b03166001600160a01b03166338b0789d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611adb57600080fd5b505afa158015611aef573d6000803e3d6000fd5b505050506040513d6020811015611b0557600080fd5b50515b603e54603554604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051939450600093611bca936c0c9f2c9cd04674edea4000000093610ca19391926111db9289926001600160a01b0316916370a0823191602480820192602092909190829003018186803b158015611b9257600080fd5b505afa158015611ba6573d6000803e3d6000fd5b505050506040513d6020811015611bbc57600080fd5b50519063ffffffff61178516565b603f54909150600090611be490839063ffffffff611d2016565b603b546039549192509015611c1b57603954611c1890611c0b90849063ffffffff611d9716565b829063ffffffff61178516565b90505b6001600160a01b0386166000908152603c6020526040812054611c81906c0c9f2c9cd04674edea4000000090610dc490611c5c90869063ffffffff611d2016565b6001600160a01b038b166000908152603a60205260409020549063ffffffff611cad16565b6001600160a01b0388166000908152603d6020526040902054909150610e06908263ffffffff61178516565b600082611cbc57506000610bec565b82820282848281611cc957fe5b04146117f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806128026021913960400191505060405180910390fd5b600082821115611d9157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611e0757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611e1057fe5b049392505050565b3390565b6001600160a01b0381166000908152603a6020526040902054611e3e576113ab565b6001600160a01b0381166000908152603c6020526040812054603b54611ea6916c0c9f2c9cd04674edea4000000091610dc491611e81919063ffffffff611d2016565b6001600160a01b0386166000908152603a60205260409020549063ffffffff611cad16565b6001600160a01b0383166000908152603d6020526040902054909150611ed2908263ffffffff61178516565b6001600160a01b0383166000908152603d6020908152604080832093909355603b54603c909152919020555050565b603e54603554604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600093611f82936c0c9f2c9cd04674edea4000000093610ca1936001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015611b9257600080fd5b603f54909150600090611f9c90839063ffffffff611d2016565b603f8390556039549091501561178157603954611fd390611fc490839063ffffffff611d9716565b603b549063ffffffff61178516565b603b555050565b611fe381611e1c565b6113ab816123a1565b6001600160a01b0381166000818152603860208181526040808420338552600181018352908420549490935252546120aa91612077916c0c9f2c9cd04674edea4000000091610dc4916120449163ffffffff611d2016565b6001600160a01b03861660009081526037602090815260408083203384526001019091529020549063ffffffff611cad16565b6001600160a01b03831660009081526038602090815260408083203384526002019091529020549063ffffffff61178516565b6001600160a01b039190911660009081526038602090815260408083203384526002810183528184209490945583546001909401909152902055565b8015806121855750604080517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561215757600080fd5b505afa15801561216b573d6000803e3d6000fd5b505050506040513d602081101561218157600080fd5b5051155b6121da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806128c86036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526108ef9084906122d6565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526108ef9084905b606061232b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166124c99092919063ffffffff16565b8051909150156108ef5780806020019051602081101561234a57600080fd5b50516108ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061289e602a913960400191505060405180910390fd5b6001600160a01b038116600090815260386020908152604080832060030154603d9092528220546123ea916c0c9f2c9cd04674edea4000000091610ca19163ffffffff61178516565b6001600160a01b0383166000908152603860205260408120600401549192509061241b90839063ffffffff611d2016565b6001600160a01b038416600090815260376020526040902054909150156124a9576001600160a01b03831660009081526037602052604090205461248f9061246a90839063ffffffff611d9716565b6001600160a01b0385166000908152603860205260409020549063ffffffff61178516565b6001600160a01b0384166000908152603860205260409020555b506001600160a01b03909116600090815260386020526040902060040155565b60606124d884846000856124e0565b949350505050565b60608247101561253b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127dc6026913960400191505060405180910390fd5b61254485612683565b6125af57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061260c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016125cf565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461266e576040519150601f19603f3d011682016040523d82523d6000602084013e612673565b606091505b5091509150610e06828286612689565b3b151590565b606083156126985750816117f9565b8251156126a85782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561270c5781810151838201526020016126f4565b50505050905090810190601f1680156127395780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe547275654d756c74694661726d3a205468697320746f6b656e20686173206e6f20736861726573547275654d756c74694661726d3a2043616e6e6f7420776974686472617720616d6f756e7420626967676572207468616e20617661696c61626c652062616c616e6365547275654d756c74694661726d3a204469737472696275746f72206661726d206973206e6f7420736574416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564547275654d756c74694661726d3a204172726179206c656e67746873206d69736d617463684f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220129d6937f8c849e0b67933ed971f033b3d90c407448fdca008fdf22764f960d264736f6c634300060a0033";