/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAaveLendingPool } from "../IAaveLendingPool";

export class IAaveLendingPool__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAaveLendingPool {
    return new Contract(address, _abi, signerOrProvider) as IAaveLendingPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "liquidityIndex",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "variableBorrowIndex",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "currentLiquidityRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "currentVariableBorrowRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "currentStableBorrowRate",
        type: "uint128",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
      {
        internalType: "address",
        name: "aTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "stableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "variableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "interestRateStrategyAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "id",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];