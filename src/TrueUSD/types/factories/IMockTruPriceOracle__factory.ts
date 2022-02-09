/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMockTruPriceOracle } from "../IMockTruPriceOracle";

export class IMockTruPriceOracle__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMockTruPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as IMockTruPriceOracle;
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
    name: "toTru",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];