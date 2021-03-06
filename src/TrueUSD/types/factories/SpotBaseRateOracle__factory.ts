/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SpotBaseRateOracle } from "../SpotBaseRateOracle";

export class SpotBaseRateOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aaveLendingPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SpotBaseRateOracle> {
    return super.deploy(_aaveLendingPool, overrides || {}) as Promise<
      SpotBaseRateOracle
    >;
  }
  getDeployTransaction(
    _aaveLendingPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_aaveLendingPool, overrides || {});
  }
  attach(address: string): SpotBaseRateOracle {
    return super.attach(address) as SpotBaseRateOracle;
  }
  connect(signer: Signer): SpotBaseRateOracle__factory {
    return super.connect(signer) as SpotBaseRateOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SpotBaseRateOracle {
    return new Contract(address, _abi, signerOrProvider) as SpotBaseRateOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAaveLendingPool",
        name: "_aaveLendingPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "aaveLendingPool",
    outputs: [
      {
        internalType: "contract IAaveLendingPool",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getRate",
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
  "0x60a060405234801561001057600080fd5b5060405161030d38038061030d8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166102a361006a6000398060c4528060eb52506102a36000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806337cef7911461003b578063e9d337b814610080575b600080fd5b61006e6004803603602081101561005157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100b1565b60408051918252519081900360200190f35b6100886100c2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60006100bc826100e6565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166335ea6a75846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506101806040518083038186803b15801561018757600080fd5b505afa15801561019b573d6000803e3d6000fd5b505050506040513d6101808110156101b257600080fd5b506080015190506101e56fffffffffffffffffffffffffffffffff821669152d02c7e14af680000063ffffffff6101ec16565b9392505050565b600080821161025c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161026557fe5b04939250505056fea26469706673582212207de083cef89ee354355c8d1c65a8f71eeec8f8493a20d55be87832e113f39db864736f6c634300060a0033";
