/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockStakingPool } from "../MockStakingPool";

export class MockStakingPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockStakingPool> {
    return super.deploy(_pool, overrides || {}) as Promise<MockStakingPool>;
  }
  getDeployTransaction(
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_pool, overrides || {});
  }
  attach(address: string): MockStakingPool {
    return super.attach(address) as MockStakingPool;
  }
  connect(signer: Signer): MockStakingPool__factory {
    return super.connect(signer) as MockStakingPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStakingPool {
    return new Contract(address, _abi, signerOrProvider) as MockStakingPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITrueFiPool",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "payFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
    stateMutability: "view",
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
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f30380380610f308339818101604052602081101561003357600080fd5b5051603880546001600160a01b0390921661010002610100600160a81b0319909216919091179055610ec68061006a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063392e53cd11610097578063a457c2d711610066578063a457c2d714610310578063a9059cbb14610349578063c2778b2814610382578063dd62ed3e1461038a57610100565b8063392e53cd14610294578063395093511461029c57806370a08231146102d557806395d89b411461030857610100565b806323b872dd116100d357806323b872dd1461020e5780632def6620146102515780632e1a7d4d14610259578063313ce5671461027657610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101cf5780631858f8d3146101e9575b600080fd5b61010d6103c5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610479565b604080519115158252519081900360200190f35b6101d7610496565b60408051918252519081900360200190f35b61020c600480360360408110156101ff57600080fd5b508035906020013561049c565b005b6101bb6004803603606081101561022457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610550565b61020c6105f7565b61020c6004803603602081101561026f57600080fd5b503561074c565b61027e61074f565b6040805160ff9092168252519081900360200190f35b6101bb610758565b6101bb600480360360408110156102b257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610761565b6101d7600480360360208110156102eb57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107c2565b61010d6107ea565b6101bb6004803603604081101561032657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610869565b6101bb6004803603604081101561035f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108e4565b6101d76108f8565b6101d7600480360360408110156103a057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166108fd565b60368054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046f5780601f106104445761010080835404028352916020019161046f565b820191906000526020600020905b81548152906001019060200180831161045257829003601f168201915b5050505050905090565b600061048d610486610935565b8484610939565b50600192915050565b60355490565b603854604080517f23b872dd00000000000000000000000000000000000000000000000000000000815233600482015230602482015260448101859052905161010090920473ffffffffffffffffffffffffffffffffffffffff16916323b872dd916064808201926020929091908290030181600087803b15801561052057600080fd5b505af1158015610534573d6000803e3d6000fd5b505050506040513d602081101561054a57600080fd5b50505050565b600061055d848484610a80565b6105ed84610569610935565b6105e885604051806060016040528060288152602001610dfb6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152603460205260408120906105b4610935565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610c5e16565b610939565b5060019392505050565b603854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905161010090920473ffffffffffffffffffffffffffffffffffffffff169163a9059cbb91339184916370a08231916024808301926020929190829003018186803b15801561067557600080fd5b505afa158015610689573d6000803e3d6000fd5b505050506040513d602081101561069f57600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561071557600080fd5b505af1158015610729573d6000803e3d6000fd5b505050506040513d602081101561073f57600080fd5b505161074a57600080fd5b565b50565b60385460ff1690565b60005460ff1690565b600061048d61076e610935565b846105e8856034600061077f610935565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610d0f16565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b60378054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046f5780601f106104445761010080835404028352916020019161046f565b600061048d610876610935565b846105e885604051806060016040528060258152602001610e6c60259139603460006108a0610935565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610c5e16565b600061048d6108f1610935565b8484610a80565b600090565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166109a5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610e486024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610db36022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610aec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610e236025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610d906023913960400191505060405180910390fd5b610b63838383610d8a565b610bb381604051806060016040528060268152602001610dd56026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260336020526040902054919063ffffffff610c5e16565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152603360205260408082209390935590841681522054610bf5908263ffffffff610d0f16565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610d07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ccc578181015183820152602001610cb4565b50505050905090810190601f168015610cf95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610d8357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122045320c6f400fe81cdb1cf8d4e02841f7f1dbdeffd292dcefc3789a3b418aafc064736f6c634300060a0033";
