/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TrueFarm } from "../TrueFarm";

export class TrueFarm__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrueFarm> {
    return super.deploy(overrides || {}) as Promise<TrueFarm>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrueFarm {
    return super.attach(address) as TrueFarm;
  }
  connect(signer: Signer): TrueFarm__factory {
    return super.connect(signer) as TrueFarm__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrueFarm {
    return new Contract(address, _abi, signerOrProvider) as TrueFarm;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
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
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimableReward",
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
    inputs: [],
    name: "cumulativeRewardPerToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "contract ITrueDistributor",
        name: "_trueDistributor",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "previousCumulatedRewardPerToken",
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
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "stakingToken",
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
    name: "totalClaimedRewards",
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
    inputs: [],
    name: "totalFarmRewards",
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
    inputs: [],
    name: "totalStaked",
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
    inputs: [],
    name: "trustToken",
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
    inputs: [
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
  "0x608060405234801561001057600080fd5b50611fae806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80637f8661a1116100b2578063d13deb2f11610081578063e950342511610066578063e9503425146103fd578063ea0cddfe14610430578063f5fc50761461043857610136565b8063d13deb2f146103ed578063d578ceab146103f557610136565b80637f8661a114610378578063817b1cd21461039557806398807d841461039d578063a694fc3a146103d057610136565b8063402914f5116101095780634571e3a6116100ee5780634571e3a61461029c5780634e71d92d1461036857806372f702f31461037057610136565b8063402914f51461022457806344a084111461026957610136565b806304db15181461013b57806306fdde031461016c5780632e17de78146101e9578063392e53cd14610208575b600080fd5b610143610440565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61017461045c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ae578181015183820152602001610196565b50505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610206600480360360208110156101ff57600080fd5b5035610508565b005b6102106108b4565b604080519115158252519081900360200190f35b6102576004803603602081101561023a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108be565b60408051918252519081900360200190f35b6102576004803603602081101561027f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b48565b610206600480360360608110156102b257600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156102f357600080fd5b82018360208201111561030557600080fd5b8035906020019184600183028401116401000000008311171561032757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b5a945050505050565b610206610e99565b6101436111ac565b6102066004803603602081101561038e57600080fd5b50356111c8565b6102576114e0565b610257600480360360208110156103b357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166114e6565b610206600480360360208110156103e657600080fd5b50356114f8565b610143611945565b610257611961565b6102576004803603602081101561041357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611967565b610257611979565b61025761197f565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b6036805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156105005780601f106104d557610100808354040283529160200191610500565b820191906000526020600020905b8154815290600101906020018083116104e357829003601f168201915b505050505081565b603554604080517f38b0789d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338b0789d916004808301926020929190829003018186803b15801561057357600080fd5b505afa158015610587573d6000803e3d6000fd5b505050506040513d602081101561059d57600080fd5b50511180156106555750603554604080517f36e9332d0000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916336e9332d916004808301926020929190829003018186803b15801561061157600080fd5b505afa158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16145b156106dd57603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106c457600080fd5b505af11580156106d8573d6000803e3d6000fd5b505050505b603c54603454604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000936107af936c0c9f2c9cd04674edea40000000936107a39373ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561076b57600080fd5b505afa15801561077f573d6000803e3d6000fd5b505050506040513d602081101561079557600080fd5b50519063ffffffff61198516565b9063ffffffff611a0216565b905060006107c8603d5483611a7590919063ffffffff16565b603d83905560375490915015610803576107ff6107f060375483611aec90919063ffffffff16565b6039549063ffffffff61198516565b6039555b336000908152603a602052604090205460395461088491610868916c0c9f2c9cd04674edea400000009161085c916108409163ffffffff611a7516565b336000908152603860205260409020549063ffffffff611a0216565b9063ffffffff611aec16565b336000908152603b60205260409020549063ffffffff61198516565b336000908152603b6020908152604080832093909355603954603a909152919020556108af83611b6d565b505050565b60005460ff165b90565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260386020526040812054610914575073ffffffffffffffffffffffffffffffffffffffff81166000908152603b6020526040902054610b43565b603554604080517f38b0789d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338b0789d916004808301926020929190829003018186803b15801561097f57600080fd5b505afa158015610993573d6000803e3d6000fd5b505050506040513d60208110156109a957600080fd5b5051603c54603454604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051939450600093610a4e936c0c9f2c9cd04674edea40000000936107a3939192610a4292899273ffffffffffffffffffffffffffffffffffffffff16916370a0823191602480820192602092909190829003018186803b15801561076b57600080fd5b9063ffffffff61198516565b90506000610a67603d5483611a7590919063ffffffff16565b90506000610a836107f060375484611aec90919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff87166000908152603a6020526040902054909150610b3c90610b0a906c0c9f2c9cd04674edea400000009061085c90610ad890869063ffffffff611a7516565b73ffffffffffffffffffffffffffffffffffffffff8b166000908152603860205260409020549063ffffffff611a0216565b73ffffffffffffffffffffffffffffffffffffffff88166000908152603b60205260409020549063ffffffff61198516565b9450505050505b919050565b603a6020526000908152604090205481565b600054610100900460ff1680610b735750610b73611d03565b80610b81575060005460ff16155b610bd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611f0d602e913960400191505060405180910390fd5b600054610100900460ff16158015610c3c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6033805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255603580549286169290911682179055604080517fd13deb2f000000000000000000000000000000000000000000000000000000008152905163d13deb2f91600480820192602092909190829003018186803b158015610cde57600080fd5b505afa158015610cf2573d6000803e3d6000fd5b505050506040513d6020811015610d0857600080fd5b5051603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790558151610d61906036906020850190611e2e565b50603554604080517f36e9332d0000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916336e9332d916004808301926020929190829003018186803b158015610dcc57600080fd5b505afa158015610de0573d6000803e3d6000fd5b505050506040513d6020811015610df657600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614610e64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611ec76025913960400191505060405180910390fd5b8015610e9357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b603554604080517f38b0789d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338b0789d916004808301926020929190829003018186803b158015610f0457600080fd5b505afa158015610f18573d6000803e3d6000fd5b505050506040513d6020811015610f2e57600080fd5b5051118015610fe65750603554604080517f36e9332d0000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916336e9332d916004808301926020929190829003018186803b158015610fa257600080fd5b505afa158015610fb6573d6000803e3d6000fd5b505050506040513d6020811015610fcc57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16145b1561106e57603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561105557600080fd5b505af1158015611069573d6000803e3d6000fd5b505050505b603c54603454604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000936110fc936c0c9f2c9cd04674edea40000000936107a39373ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561076b57600080fd5b90506000611115603d5483611a7590919063ffffffff16565b603d839055603754909150156111415761113d6107f060375483611aec90919063ffffffff16565b6039555b336000908152603a602052604090205460395461117e91610868916c0c9f2c9cd04674edea400000009161085c916108409163ffffffff611a7516565b336000908152603b6020908152604080832093909355603954603a909152919020556111a8611d09565b5050565b60335473ffffffffffffffffffffffffffffffffffffffff1681565b603554604080517f38b0789d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338b0789d916004808301926020929190829003018186803b15801561123357600080fd5b505afa158015611247573d6000803e3d6000fd5b505050506040513d602081101561125d57600080fd5b50511180156113155750603554604080517f36e9332d0000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916336e9332d916004808301926020929190829003018186803b1580156112d157600080fd5b505afa1580156112e5573d6000803e3d6000fd5b505050506040513d60208110156112fb57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16145b1561139d57603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561138457600080fd5b505af1158015611398573d6000803e3d6000fd5b505050505b603c54603454604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009361142b936c0c9f2c9cd04674edea40000000936107a39373ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561076b57600080fd5b90506000611444603d5483611a7590919063ffffffff16565b603d839055603754909150156114705761146c6107f060375483611aec90919063ffffffff16565b6039555b336000908152603a60205260409020546039546114ad91610868916c0c9f2c9cd04674edea400000009161085c916108409163ffffffff611a7516565b336000908152603b6020908152604080832093909355603954603a909152919020556114d883611b6d565b6108af611d09565b60375481565b60386020526000908152604090205481565b603554604080517f38b0789d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338b0789d916004808301926020929190829003018186803b15801561156357600080fd5b505afa158015611577573d6000803e3d6000fd5b505050506040513d602081101561158d57600080fd5b50511180156116455750603554604080517f36e9332d0000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916336e9332d916004808301926020929190829003018186803b15801561160157600080fd5b505afa158015611615573d6000803e3d6000fd5b505050506040513d602081101561162b57600080fd5b505173ffffffffffffffffffffffffffffffffffffffff16145b156116cd57603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e4fc6b6d6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156116b457600080fd5b505af11580156116c8573d6000803e3d6000fd5b505050505b603c54603454604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009361175b936c0c9f2c9cd04674edea40000000936107a39373ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561076b57600080fd5b90506000611774603d5483611a7590919063ffffffff16565b603d839055603754909150156117a05761179c6107f060375483611aec90919063ffffffff16565b6039555b336000908152603a60205260409020546039546117dd91610868916c0c9f2c9cd04674edea400000009161085c916108409163ffffffff611a7516565b336000908152603b60208181526040808420948555603954603a83529320929092559052541561180f5761180f611d09565b3360009081526038602052604090205461182f908463ffffffff61198516565b33600090815260386020526040902055603754611852908463ffffffff61198516565b603755603354604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101869052905173ffffffffffffffffffffffffffffffffffffffff909216916323b872dd916064808201926020929091908290030181600087803b1580156118d557600080fd5b505af11580156118e9573d6000803e3d6000fd5b505050506040513d60208110156118ff57600080fd5b505161190a57600080fd5b60408051848152905133917febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a919081900360200190a2505050565b60345473ffffffffffffffffffffffffffffffffffffffff1681565b603c5481565b603b6020526000908152604090205481565b603d5481565b60395481565b6000828201838110156119f957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600082611a11575060006119fc565b82820282848281611a1e57fe5b04146119f9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611eec6021913960400191505060405180910390fd5b600082821115611ae657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611b5c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611b6557fe5b049392505050565b33600090815260386020526040902054811115611bd5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180611f3b603e913960400191505060405180910390fd5b33600090815260386020526040902054611bf5908263ffffffff611a7516565b33600090815260386020526040902055603754611c18908263ffffffff611a7516565b603755603354604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015260248101849052905173ffffffffffffffffffffffffffffffffffffffff9092169163a9059cbb916044808201926020929091908290030181600087803b158015611c9557600080fd5b505af1158015611ca9573d6000803e3d6000fd5b505050506040513d6020811015611cbf57600080fd5b5051611cca57600080fd5b60408051828152905133917f85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd919081900360200190a250565b303b1590565b336000908152603b6020526040902054603c54611d2b9163ffffffff61198516565b603c55336000818152603b6020908152604080832080549084905560345482517fa9059cbb0000000000000000000000000000000000000000000000000000000081526004810196909652602486018290529151909473ffffffffffffffffffffffffffffffffffffffff9092169363a9059cbb93604480850194919392918390030190829087803b158015611dc057600080fd5b505af1158015611dd4573d6000803e3d6000fd5b505050506040513d6020811015611dea57600080fd5b5051611df557600080fd5b60408051828152905133917f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4919081900360200190a250565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e6f57805160ff1916838001178555611e9c565b82800160010185558215611e9c579182015b82811115611e9c578251825591602001919060010190611e81565b50611ea8929150611eac565b5090565b6108bb91905b80821115611ea85760008155600101611eb256fe547275654661726d3a204469737472696275746f72206661726d206973206e6f7420736574536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564547275654661726d3a2043616e6e6f7420776974686472617720616d6f756e7420626967676572207468616e20617661696c61626c652062616c616e6365a264697066735822122080b1313311c27561ecd6743fb40919a91756cf4574858b19cd33526cde933fcb64736f6c634300060a0033";
