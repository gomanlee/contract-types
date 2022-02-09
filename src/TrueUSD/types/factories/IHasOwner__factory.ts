/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IHasOwner } from "../IHasOwner";

export class IHasOwner__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IHasOwner {
    return new Contract(address, _abi, signerOrProvider) as IHasOwner;
  }
}

const _abi = [
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