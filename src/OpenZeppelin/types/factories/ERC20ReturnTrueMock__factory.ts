/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20ReturnTrueMock,
  ERC20ReturnTrueMockInterface,
} from "../ERC20ReturnTrueMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061043f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd1461008c5780633ba93f26146100bc578063a9059cbb146100d8578063dd62ed3e14610108575b600080fd5b610076600480360381019061007191906102a9565b610138565b6040516100839190610304565b60405180910390f35b6100a660048036038101906100a1919061031f565b61014b565b6040516100b39190610304565b60405180910390f35b6100d660048036038101906100d19190610372565b61015f565b005b6100f260048036038101906100ed91906102a9565b6101ac565b6040516100ff9190610304565b60405180910390f35b610122600480360381019061011d919061039f565b6101bf565b60405161012f91906103ee565b60405180910390f35b6000806001819055506001905092915050565b600080600181905550600190509392505050565b8060008061016b610208565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000806001819055506001905092915050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061024082610215565b9050919050565b61025081610235565b811461025b57600080fd5b50565b60008135905061026d81610247565b92915050565b6000819050919050565b61028681610273565b811461029157600080fd5b50565b6000813590506102a38161027d565b92915050565b600080604083850312156102c0576102bf610210565b5b60006102ce8582860161025e565b92505060206102df85828601610294565b9150509250929050565b60008115159050919050565b6102fe816102e9565b82525050565b600060208201905061031960008301846102f5565b92915050565b60008060006060848603121561033857610337610210565b5b60006103468682870161025e565b93505060206103578682870161025e565b925050604061036886828701610294565b9150509250925092565b60006020828403121561038857610387610210565b5b600061039684828501610294565b91505092915050565b600080604083850312156103b6576103b5610210565b5b60006103c48582860161025e565b92505060206103d58582860161025e565b9150509250929050565b6103e881610273565b82525050565b600060208201905061040360008301846103df565b9291505056fea2646970667358221220a068353609724a9a331e2425921904fb9fa0e1b0ca05ee5df72c9cd186f533c964736f6c63430008090033";

type ERC20ReturnTrueMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ReturnTrueMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20ReturnTrueMock__factory extends ContractFactory {
  constructor(...args: ERC20ReturnTrueMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20ReturnTrueMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20ReturnTrueMock> {
    return super.deploy(overrides || {}) as Promise<ERC20ReturnTrueMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20ReturnTrueMock {
    return super.attach(address) as ERC20ReturnTrueMock;
  }
  connect(signer: Signer): ERC20ReturnTrueMock__factory {
    return super.connect(signer) as ERC20ReturnTrueMock__factory;
  }
  static readonly contractName: "ERC20ReturnTrueMock";
  public readonly contractName: "ERC20ReturnTrueMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20ReturnTrueMockInterface {
    return new utils.Interface(_abi) as ERC20ReturnTrueMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20ReturnTrueMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20ReturnTrueMock;
  }
}
