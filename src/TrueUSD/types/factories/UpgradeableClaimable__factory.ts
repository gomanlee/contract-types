/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { UpgradeableClaimable } from "../UpgradeableClaimable";

export class UpgradeableClaimable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradeableClaimable> {
    return super.deploy(overrides || {}) as Promise<UpgradeableClaimable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradeableClaimable {
    return super.attach(address) as UpgradeableClaimable;
  }
  connect(signer: Signer): UpgradeableClaimable__factory {
    return super.connect(signer) as UpgradeableClaimable__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableClaimable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradeableClaimable;
  }
}

const _abi = [
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
    inputs: [],
    name: "claimOwnership",
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
  "0x608060405234801561001057600080fd5b50610381806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638da5cb5b116100505780638da5cb5b14610092578063e30c3978146100c3578063f2fde38b146100cb57610067565b8063392e53cd1461006c5780634e71e0c814610088575b600080fd5b6100746100fe565b604080519115158252519081900360200190f35b610090610107565b005b61009a61020f565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61009a61022b565b610090600480360360208110156100e157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610247565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff163314610177576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806103246028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b61024f61031f565b60335473ffffffffffffffffffffffffffffffffffffffff9081169116146102d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b339056fe4f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e6572a26469706673582212205d1ea1f0eee3a4c45f6ac6f529b16bb08739fabddb74ebd1a0211f9bbd3ebb9264736f6c634300060a0033";
