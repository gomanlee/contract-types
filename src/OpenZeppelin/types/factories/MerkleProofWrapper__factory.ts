/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleProofWrapper,
  MerkleProofWrapperInterface,
} from "../MerkleProofWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "processProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061051d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635a9a49c71461003b57806362702a6b1461006b575b600080fd5b6100556004803603810190610050919061030b565b61009b565b6040516100629190610395565b60405180910390f35b610085600480360381019061008091906103b0565b6100b1565b604051610092919061041b565b60405180910390f35b60006100a88484846100c5565b90509392505050565b60006100bd83836100dc565b905092915050565b6000826100d285846100dc565b1490509392505050565b60008082905060005b845181101561014657600085828151811061010357610102610436565b5b602002602001015190508083116101255761011e8382610151565b9250610132565b61012f8184610151565b92505b50808061013e9061049e565b9150506100e5565b508091505092915050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101ca82610181565b810181811067ffffffffffffffff821117156101e9576101e8610192565b5b80604052505050565b60006101fc610168565b905061020882826101c1565b919050565b600067ffffffffffffffff82111561022857610227610192565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6102518161023e565b811461025c57600080fd5b50565b60008135905061026e81610248565b92915050565b60006102876102828461020d565b6101f2565b905080838252602082019050602084028301858111156102aa576102a9610239565b5b835b818110156102d357806102bf888261025f565b8452602084019350506020810190506102ac565b5050509392505050565b600082601f8301126102f2576102f161017c565b5b8135610302848260208601610274565b91505092915050565b60008060006060848603121561032457610323610172565b5b600084013567ffffffffffffffff81111561034257610341610177565b5b61034e868287016102dd565b935050602061035f8682870161025f565b92505060406103708682870161025f565b9150509250925092565b60008115159050919050565b61038f8161037a565b82525050565b60006020820190506103aa6000830184610386565b92915050565b600080604083850312156103c7576103c6610172565b5b600083013567ffffffffffffffff8111156103e5576103e4610177565b5b6103f1858286016102dd565b92505060206104028582860161025f565b9150509250929050565b6104158161023e565b82525050565b6000602082019050610430600083018461040c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006104a982610494565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156104dc576104db610465565b5b60018201905091905056fea2646970667358221220ca91158ef6b67bbf1c285d7d0eb2e75be63351934e9080aa2b746ae7481e332c64736f6c63430008090033";

type MerkleProofWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleProofWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleProofWrapper__factory extends ContractFactory {
  constructor(...args: MerkleProofWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MerkleProofWrapper";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleProofWrapper> {
    return super.deploy(overrides || {}) as Promise<MerkleProofWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleProofWrapper {
    return super.attach(address) as MerkleProofWrapper;
  }
  connect(signer: Signer): MerkleProofWrapper__factory {
    return super.connect(signer) as MerkleProofWrapper__factory;
  }
  static readonly contractName: "MerkleProofWrapper";
  public readonly contractName: "MerkleProofWrapper";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleProofWrapperInterface {
    return new utils.Interface(_abi) as MerkleProofWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleProofWrapper {
    return new Contract(address, _abi, signerOrProvider) as MerkleProofWrapper;
  }
}
