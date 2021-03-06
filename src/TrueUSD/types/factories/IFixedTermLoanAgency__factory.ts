/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IFixedTermLoanAgency } from "../IFixedTermLoanAgency";

export class IFixedTermLoanAgency__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFixedTermLoanAgency {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IFixedTermLoanAgency;
  }
}

const _abi = [
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
