/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockPauseableContract } from "../MockPauseableContract";

export class MockPauseableContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPauseableContract> {
    return super.deploy(overrides || {}) as Promise<MockPauseableContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockPauseableContract {
    return super.attach(address) as MockPauseableContract;
  }
  connect(signer: Signer): MockPauseableContract__factory {
    return super.connect(signer) as MockPauseableContract__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPauseableContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockPauseableContract;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "pauseStatus",
        type: "bool",
      },
    ],
    name: "PauseStatusChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "pauseStatus",
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
    inputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setPauseStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610113806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063466916ca146037578063c38bb537146051575b600080fd5b603d606f565b604080519115158252519081900360200190f35b606d60048036036020811015606557600080fd5b503515156078565b005b60005460ff1681565b600080548215157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116811790915560408051918252517fef37df9624f797913e7585c7f7b5d004ba6704be3c64b0561c157728ccc869859181900360200190a15056fea264697066735822122067728990072f640148d2f19a8ea35d08ab165a1a61b070f6661d88a37ce2c94e64736f6c634300060a0033";