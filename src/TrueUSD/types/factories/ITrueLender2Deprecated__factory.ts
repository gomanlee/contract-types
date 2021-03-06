/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITrueLender2Deprecated } from "../ITrueLender2Deprecated";

export class ITrueLender2Deprecated__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITrueLender2Deprecated {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITrueLender2Deprecated;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILoanToken2Deprecated",
        name: "loan",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "transferAllLoanTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITrueFiPool2",
        name: "pool",
        type: "address",
      },
    ],
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
];
