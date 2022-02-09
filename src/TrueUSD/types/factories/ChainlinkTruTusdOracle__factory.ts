/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ChainlinkTruTusdOracle } from "../ChainlinkTruTusdOracle";

export class ChainlinkTruTusdOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkTruTusdOracle> {
    return super.deploy(overrides || {}) as Promise<ChainlinkTruTusdOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkTruTusdOracle {
    return super.attach(address) as ChainlinkTruTusdOracle;
  }
  connect(signer: Signer): ChainlinkTruTusdOracle__factory {
    return super.connect(signer) as ChainlinkTruTusdOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkTruTusdOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkTruTusdOracle;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getLatestTruPrice",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319167326929b85fe284eeab939831002e1928183a10fb11790556104bf806100466000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80632cb90b4d116100505780632cb90b4d146100a35780632cd4aaba146100c0578063fc0c546a146100dd57610067565b806320fa6dba1461006c578063256a99051461009b575b600080fd5b6100896004803603602081101561008257600080fd5b503561010e565b60408051918252519081900360200190f35b6100896101f7565b610089600480360360208110156100b957600080fd5b50356102a2565b610089600480360360208110156100d657600080fd5b50356102d4565b6100e56102d7565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6000806101196102d7565b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561015e57600080fd5b505afa158015610172573d6000803e3d6000fd5b505050506040513d602081101561018857600080fd5b50519050600061019b600a83900a6102d4565b905060006101b76101aa6101f7565b869063ffffffff6102ea16565b90506101ee826101e2600a86900a6101d685606463ffffffff6102ea16565b9063ffffffff6102ea16565b9063ffffffff61036616565b95945050505050565b60008054604080517ffeaf968c0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163feaf968c9160048083019260a0929190829003018186803b15801561026257600080fd5b505afa158015610276573d6000803e3d6000fd5b505050506040513d60a081101561028c57600080fd5b5060200151905061029c816103e7565b91505090565b6000806102ae836102d4565b90506102cd60646101e26102c06101f7565b849063ffffffff61036616565b9392505050565b90565b6e085d4780b73119b644ae5ecd22b37690565b6000826102f957506000610360565b8282028284828161030657fe5b041461035d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806104476021913960400191505060405180910390fd5b90505b92915050565b60008082116103d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816103df57fe5b049392505050565b600080821215610442576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806104686022913960400191505060405180910390fd5b509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436861696e6c696e6b5472754f7261636c653a2075696e7420756e646572666c6f77a26469706673582212209e139d067e141eaf9b9fc98d2aad157afa03013c563dcbb7c9998c2ea6e7917d64736f6c634300060a0033";