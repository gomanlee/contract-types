/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Mock1InchV3 } from "../Mock1InchV3";

export class Mock1InchV3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Mock1InchV3> {
    return super.deploy(overrides || {}) as Promise<Mock1InchV3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Mock1InchV3 {
    return super.attach(address) as Mock1InchV3;
  }
  connect(signer: Signer): Mock1InchV3__factory {
    return super.connect(signer) as Mock1InchV3__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mock1InchV3 {
    return new Contract(address, _abi, signerOrProvider) as Mock1InchV3;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setOutputAmount",
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
      {
        components: [
          {
            internalType: "address",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "dstToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "srcReceiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "dstReceiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minReturnAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "flags",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "permit",
            type: "bytes",
          },
        ],
        internalType: "struct I1Inch3.SwapDescription",
        name: "description",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasLeft",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "chiSpent",
        type: "uint256",
      },
    ],
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    name: "unoswap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610489806100206000396000f3fe6080604052600436106100345760003560e01c806324f9c434146100395780632e95b6c81461005b5780637c02520014610084575b600080fd5b34801561004557600080fd5b506100596100543660046103a0565b6100b3565b005b61006e6100693660046102eb565b6100b8565b60405161007b919061040f565b60405180910390f35b34801561009057600080fd5b506100a461009f366004610244565b6100c3565b60405161007b93929190610418565b600055565b600095945050505050565b600080806100d46020870187610222565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd333089608001356040518463ffffffff1660e01b8152600401610114939291906103b8565b602060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101669190610380565b506101776040870160208801610222565b73ffffffffffffffffffffffffffffffffffffffff166340c10f19336000546040518363ffffffff1660e01b81526004016101b39291906103e9565b600060405180830381600087803b1580156101cd57600080fd5b505af11580156101e1573d6000803e3d6000fd5b5050600080549a9099508998509650505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461021c57600080fd5b92915050565b600060208284031215610233578081fd5b61023d83836101f8565b9392505050565b60008060008060608587031215610259578283fd5b84356102648161042e565b9350602085013567ffffffffffffffff80821115610280578485fd5b818701610100818a031215610293578586fd5b945060408701359150808211156102a8578384fd5b81870188601f8201126102b9578485fd5b80359250818311156102c9578485fd5b8860208483010111156102da578485fd5b959894975050602090940194505050565b600080600080600060808688031215610302578081fd5b61030c87876101f8565b94506020860135935060408601359250606086013567ffffffffffffffff80821115610336578283fd5b81880189601f820112610347578384fd5b8035925081831115610357578384fd5b896020808502830101111561036a578384fd5b6020810194505050809150509295509295909350565b600060208284031215610391578081fd5b8151801515811461023d578182fd5b6000602082840312156103b1578081fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b90815260200190565b9283526020830191909152604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8116811461045057600080fd5b5056fea26469706673582212206f9376d108c54bec21b329aa1d866580b3f831a48173d3ed2b0a2ea328a3366764736f6c634300060a0033";