/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUniswapPair } from "../IUniswapPair";

export class IUniswapPair__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapPair {
    return new Contract(address, _abi, signerOrProvider) as IUniswapPair;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];