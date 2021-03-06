/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { OneInchExchange } from "../OneInchExchange";

export class OneInchExchange__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OneInchExchange> {
    return super.deploy(overrides || {}) as Promise<OneInchExchange>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OneInchExchange {
    return super.attach(address) as OneInchExchange;
  }
  connect(signer: Signer): OneInchExchange__factory {
    return super.connect(signer) as OneInchExchange__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneInchExchange {
    return new Contract(address, _abi, signerOrProvider) as OneInchExchange;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
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
        indexed: false,
        internalType: "struct I1Inch3.SwapDescription",
        name: "description",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnedAmount",
        type: "uint256",
      },
    ],
    name: "Swapped",
    type: "event",
  },
];

const _bytecode =
  "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200cbe88f97fdff2638448079f71000ee0e32a35fcbab5d7c816bf21435fe63ffe64736f6c634300060a0033";
