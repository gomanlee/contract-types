/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { Isafu } from "../Isafu";

export class Isafu__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): Isafu {
    return new Contract(address, _abi, signerOrProvider) as Isafu;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IDebtToken",
        name: "debt",
        type: "address",
      },
    ],
    name: "deficiencyToken",
    outputs: [
      {
        internalType: "contract IDeficiencyToken",
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
        internalType: "contract ILoanToken2Deprecated",
        name: "loan",
        type: "address",
      },
    ],
    name: "legacyDeficiencyToken",
    outputs: [
      {
        internalType: "contract IDeficiencyToken",
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
        internalType: "contract ILoanToken2Deprecated",
        name: "loan",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "legacyReclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "poolDeficit",
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
        internalType: "contract IDebtToken",
        name: "debt",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "reclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
