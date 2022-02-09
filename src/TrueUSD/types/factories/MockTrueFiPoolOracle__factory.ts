/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockTrueFiPoolOracle } from "../MockTrueFiPoolOracle";

export class MockTrueFiPoolOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    __token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTrueFiPoolOracle> {
    return super.deploy(__token, overrides || {}) as Promise<
      MockTrueFiPoolOracle
    >;
  }
  getDeployTransaction(
    __token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(__token, overrides || {});
  }
  attach(address: string): MockTrueFiPoolOracle {
    return super.attach(address) as MockTrueFiPoolOracle;
  }
  connect(signer: Signer): MockTrueFiPoolOracle__factory {
    return super.connect(signer) as MockTrueFiPoolOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTrueFiPoolOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTrueFiPoolOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20WithDecimals",
        name: "__token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20WithDecimals",
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
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "tokenToTru",
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
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "tokenToUsd",
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
        internalType: "uint256",
        name: "truAmount",
        type: "uint256",
      },
    ],
    name: "truToToken",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103a03803806103a08339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b031990921691909117905561033b806100656000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806320fa6dba146100515780632cb90b4d146100805780632cd4aaba1461009d578063fc0c546a146100ba575b600080fd5b61006e6004803603602081101561006757600080fd5b50356100eb565b60408051918252519081900360200190f35b61006e6004803603602081101561009657600080fd5b503561019f565b61006e600480360360208110156100b357600080fd5b5035610245565b6100c26102e9565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561015457600080fd5b505afa158015610168573d6000803e3d6000fd5b505050506040513d602081101561017e57600080fd5b5051601203600a0a60046402540be4008402048161019857fe5b0492915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561020857600080fd5b505afa15801561021c573d6000803e3d6000fd5b505050506040513d602081101561023257600080fd5b5051600a0a6317d7840083028161019857fe5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156102ae57600080fd5b505afa1580156102c2573d6000803e3d6000fd5b505050506040513d60208110156102d857600080fd5b5051601203600a0a82029050919050565b60005473ffffffffffffffffffffffffffffffffffffffff169056fea2646970667358221220cededfde9c9f644ae62b6382420aedba3e65769d6f16c2265196e5316202bad264736f6c634300060a0033";