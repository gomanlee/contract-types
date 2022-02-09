/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TrueGold } from "../TrueGold";

export class TrueGold__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TrueGold> {
    return super.deploy(overrides || {}) as Promise<TrueGold>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TrueGold {
    return super.attach(address) as TrueGold;
  }
  connect(signer: Signer): TrueGold__factory {
    return super.connect(signer) as TrueGold__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrueGold {
    return new Contract(address, _abi, signerOrProvider) as TrueGold;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Mint",
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
        indexed: false,
        internalType: "uint256",
        name: "newMin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "SetBurnBounds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "burn",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnMax",
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
    name: "burnMin",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minBurnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxBurnAmount",
        type: "uint256",
      },
    ],
    name: "initialize",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "contract IOwnable",
        name: "ownable",
        type: "address",
      },
    ],
    name: "reclaimContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimEther",
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
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
    ],
    name: "setBurnBounds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611f9f806100206000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80635c131d70116100e35780639a6a30a41161008c578063dd62ed3e11610066578063dd62ed3e14610553578063e4a301161461058e578063f2fde38b146105b15761018d565b80639a6a30a4146104ae578063a457c2d7146104e1578063a9059cbb1461051a5761018d565b806388ee39cc116100bd57806388ee39cc1461043a5780638da5cb5b1461047557806395d89b41146104a65761018d565b80635c131d70146103c657806370a08231146103ce57806379cc6790146104015761018d565b80632aed7f3f1161014557806340c10f191161011f57806340c10f191461034d57806342966c681461038657806352006050146103a35761018d565b80632aed7f3f146102c1578063313ce567146102f657806339509351146103145761018d565b8063095ea7b311610176578063095ea7b31461022957806318160ddd1461027657806323b872dd1461027e5761018d565b806302d3fdc91461019257806306fdde03146101ac575b600080fd5b61019a6105e4565b60408051918252519081900360200190f35b6101b46105ea565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ee5781810151838201526020016101d6565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102626004803603604081101561023f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610621565b604080519115158252519081900360200190f35b61019a610637565b6102626004803603606081101561029457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561063d565b6102f4600480360360208110156102d757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610687565b005b6102fe610789565b6040805160ff9092168252519081900360200190f35b6102626004803603604081101561032a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561078e565b6102f46004803603604081101561036357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107dc565b6102f46004803603602081101561039c57600080fd5b50356108ff565b6102f4600480360360408110156103b957600080fd5b508035906020013561090c565b61019a610a2a565b61019a600480360360208110156103e457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a30565b6102f46004803603604081101561041757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a58565b6102f46004803603604081101561045057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610aaa565b61047d610c5e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101b4610c80565b6102f4600480360360208110156104c457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610cb7565b610262600480360360408110156104f757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610d6b565b6102626004803603604081101561053057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610dcd565b61019a6004803603604081101561056957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610e0c565b6102f4600480360360408110156105a457600080fd5b5080359060200135610e44565b6102f4600480360360208110156105c757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f51565b60045490565b60408051808201909152600881527f54727565476f6c64000000000000000000000000000000000000000000000000602082015290565b600061062e3384846110ae565b50600192915050565b60035490565b600061064a8484846111c1565b61065357600080fd5b621000008373ffffffffffffffffffffffffffffffffffffffff161161067d5761067d838361122e565b5060019392505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146106f9576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60008054604080517ff2fde38b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff620100009093048316600482015290519184169263f2fde38b9260248084019382900301818387803b15801561076e57600080fd5b505af1158015610782573d6000803e3d6000fd5b5050505050565b600690565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161062e9185906107d7908663ffffffff61128716565b6110ae565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff16331461084e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b621000008273ffffffffffffffffffffffffffffffffffffffff16116108a55760405162461bcd60e51b815260040180806020018281038252603a815260200180611cb8603a913960400191505060405180910390fd5b6108af82826112e8565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b610909338261122e565b50565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff16331461097e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6109918262bdd5a863ffffffff61140116565b156109cd5760405162461bcd60e51b8152600401808060200182810382526034815260200180611d3a6034913960400191505060405180910390fd5b6109e08162bdd5a863ffffffff61140116565b15610a1c5760405162461bcd60e51b8152600401808060200182810382526034815260200180611d6e6034913960400191505060405180910390fd5b610a268282611468565b5050565b60055490565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6000610a8e826040518060600160405280602c8152602001611f19602c9139610a818633610e0c565b919063ffffffff61156216565b9050610a9b8333836110ae565b610aa5838361122e565b505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610b1c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b158015610b8c57600080fd5b505afa158015610ba0573d6000803e3d6000fd5b505050506040513d6020811015610bb657600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b158015610c3457600080fd5b505af1158015610c48573d6000803e3d6000fd5b505050506040513d602081101561078257600080fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1690565b60408051808201909152600581527f54474f4c44000000000000000000000000000000000000000000000000000000602082015290565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610d29576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f19350505050158015610a26573d6000803e3d6000fd5b600061062e33846107d785604051806060016040528060258152602001611f456025913933600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d168452909152902054919063ffffffff61156216565b6000610dd983836115f9565b610de257600080fd5b621000008373ffffffffffffffffffffffffffffffffffffffff161161062e5761062e838361122e565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b600054610100900460ff1680610e5d5750610e5d611606565b80610e6b575060005460ff16155b610ea65760405162461bcd60e51b815260040180806020018281038252602e815260200180611e1d602e913960400191505060405180910390fd5b600054610100900460ff16158015610f0c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610f1461160c565b610f1e8383611763565b8015610aa557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610fc3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166110155760405162461bcd60e51b8152600401808060200182810382526026815260200180611cf26026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff83166111005760405162461bcd60e51b8152600401808060200182810382526024815260200180611ec26024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111525760405162461bcd60e51b8152600401808060200182810382526022815260200180611d186022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006111ce848484611835565b61067d84336107d785604051806060016040528060288152602001611df56028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600260209081526040808320338452909152902054919063ffffffff61156216565b6112418162bdd5a863ffffffff61140116565b1561127d5760405162461bcd60e51b8152600401808060200182810382526035815260200180611c616035913960400191505060405180910390fd5b610a2682826119d4565b6000828201838110156112e1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216611350576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600354611363908263ffffffff61128716565b60035573ffffffffffffffffffffffffffffffffffffffff821660009081526001602052604090205461139c908263ffffffff61128716565b73ffffffffffffffffffffffffffffffffffffffff831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000808211611457576040805162461bcd60e51b815260206004820152601860248201527f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000604482015290519081900360640190fd5b81838161146057fe5b069392505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146114da576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b808211156115195760405162461bcd60e51b815260040180806020018281038252602d815260200180611dc8602d913960400191505060405180910390fd5b60048290556005819055604080518381526020810183905281517f21d54a4c1f750b4f93779e3e8b4de89db3f31bab8f203e68569727fee906cc32929181900390910190a15050565b600081848411156115f15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115b657818101518382015260200161159e565b50505050905090810190601f1680156115e35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600061062e338484611835565b303b1590565b600054610100900460ff16806116255750611625611606565b80611633575060005460ff16155b61166e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611e1d602e913960400191505060405180910390fd5b600054610100900460ff161580156116d457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16336201000081029190911782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561090957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff168061177c575061177c611606565b8061178a575060005460ff16155b6117c55760405162461bcd60e51b815260040180806020018281038252602e815260200180611e1d602e913960400191505060405180910390fd5b600054610100900460ff1615801561182b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610f1e838361090c565b73ffffffffffffffffffffffffffffffffffffffff83166118875760405162461bcd60e51b8152600401808060200182810382526025815260200180611e9d6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166118d95760405162461bcd60e51b8152600401808060200182810382526023815260200180611c3e6023913960400191505060405180910390fd5b61192981604051806060016040528060268152602001611da26026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260016020526040902054919063ffffffff61156216565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260016020526040808220939093559084168152205461196b908263ffffffff61128716565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600454811015611a155760405162461bcd60e51b8152600401808060200182810382526031815260200180611e4b6031913960400191505060405180910390fd5b600554811115611a565760405162461bcd60e51b8152600401808060200182810382526033815260200180611ee66033913960400191505060405180910390fd5b611a608282611ab0565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b73ffffffffffffffffffffffffffffffffffffffff8216611b025760405162461bcd60e51b8152600401808060200182810382526021815260200180611e7c6021913960400191505060405180910390fd5b611b5281604051806060016040528060228152602001611c966022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260016020526040902054919063ffffffff61156216565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902055600354611b8b908263ffffffff611be016565b60035560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082821115611c37576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737354727565476f6c643a206275726e20616d6f756e74206973206e6f742061206d756c7469706c65206f662031322c3434312c30303045524332303a206275726e20616d6f756e7420657863656564732062616c616e6365547275654d696e7461626c654275726e61626c653a206d696e7420746f206120726564656d7074696f6e206f72207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737354727565476f6c643a206d696e20616d6f756e74206973206e6f742061206d756c7469706c65206f662031322c3434312c30303054727565476f6c643a206d617820616d6f756e74206973206e6f742061206d756c7469706c65206f662031322c3434312c30303045524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365547275654d696e7461626c654275726e61626c653a206d696e2069732067726561746572207468656e206d617845524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564547275654d696e7461626c654275726e61626c653a206275726e20616d6f756e742062656c6f77206d696e20626f756e6445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373547275654d696e7461626c654275726e61626c653a206275726e20616d6f756e742065786365656473206d617820626f756e6445524332304275726e61626c653a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220a5bb7d72420506f1ec72e4a6f888253ce631868e5f3ddbd6f288d8890cb778e464736f6c634300060a0033";
