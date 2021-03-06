/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BadStrategy } from "../BadStrategy";

export class BadStrategy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadStrategy> {
    return super.deploy(_token, _pool, overrides || {}) as Promise<BadStrategy>;
  }
  getDeployTransaction(
    _token: string,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _pool, overrides || {});
  }
  attach(address: string): BadStrategy {
    return super.attach(address) as BadStrategy;
  }
  connect(signer: Signer): BadStrategy__factory {
    return super.connect(signer) as BadStrategy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadStrategy {
    return new Contract(address, _abi, signerOrProvider) as BadStrategy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_error",
        type: "uint256",
      },
    ],
    name: "setErrorPercents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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
    name: "withError",
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
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161061b38038061061b8339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b03199182161782556001805494909316931692909217905560025561059f8061007c6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063853828b611610050578063853828b6146100cd578063b6b55f25146100d5578063c123d630146100f257610072565b80632e1a7d4d146100775780633fa4f2451461009657806379ce9476146100b0575b600080fd5b6100946004803603602081101561008d57600080fd5b503561010f565b005b61009e6101d6565b60408051918252519081900360200190f35b61009e600480360360208110156100c657600080fd5b5035610279565b6100946102ac565b610094600480360360208110156100eb57600080fd5b503561037c565b6100946004803603602081101561010857600080fd5b5035610448565b60005460015473ffffffffffffffffffffffffffffffffffffffff9182169163a9059cbb911661013e84610279565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156101a757600080fd5b505af11580156101bb573d6000803e3d6000fd5b505050506040513d60208110156101d157600080fd5b505050565b60008054604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561024857600080fd5b505afa15801561025c573d6000803e3d6000fd5b505050506040513d602081101561027257600080fd5b5051905090565b60006102a661271061029a600254612710038561044d90919063ffffffff16565b9063ffffffff6104c716565b92915050565b60008054604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561031e57600080fd5b505afa158015610332573d6000803e3d6000fd5b505050506040513d602081101561034857600080fd5b505160005460015491925073ffffffffffffffffffffffffffffffffffffffff9081169163a9059cbb911661013e84610279565b60005460015473ffffffffffffffffffffffffffffffffffffffff918216916323b872dd9116306103ac85610279565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156101a757600080fd5b600255565b60008261045c575060006102a6565b8282028284828161046957fe5b04146104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806105496021913960400191505060405180910390fd5b9392505050565b600080821161053757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161054057fe5b04939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220f184b6650bb096b632af6dbaa57e00fb1f68e9f195f2d3653e2032e7093c00d764736f6c634300060a0033";
