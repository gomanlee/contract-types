/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JugLike, JugLikeInterface } from "../JugLike";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "base",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "ilks",
    outputs: [
      {
        internalType: "uint256",
        name: "duty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rho",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80635001f3b5146037578063d9638d3614604f575b600080fd5b603d6082565b60408051918252519081900360200190f35b606960048036036020811015606357600080fd5b50356088565b6040805192835260208301919091528051918290030190f35b60015481565b600060208190529081526040902080546001909101548256fea265627a7a723158200f10bdf273c4ae6e0895e24b6f92bdb30dce8bc262688254ba99e09af4b472d864736f6c63430005100032";

type JugLikeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JugLikeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JugLike__factory extends ContractFactory {
  constructor(...args: JugLikeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JugLike";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JugLike> {
    return super.deploy(overrides || {}) as Promise<JugLike>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): JugLike {
    return super.attach(address) as JugLike;
  }
  connect(signer: Signer): JugLike__factory {
    return super.connect(signer) as JugLike__factory;
  }
  static readonly contractName: "JugLike";
  public readonly contractName: "JugLike";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JugLikeInterface {
    return new utils.Interface(_abi) as JugLikeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JugLike {
    return new Contract(address, _abi, signerOrProvider) as JugLike;
  }
}
