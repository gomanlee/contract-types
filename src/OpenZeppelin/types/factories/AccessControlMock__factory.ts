/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlMock,
  AccessControlMockInterface,
} from "../AccessControlMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleId",
        type: "bytes32",
      },
    ],
    name: "senderProtected",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRoleId",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100316000801b61002661003660201b60201c565b61003e60201b60201c565b6101a8565b600033905090565b61004e828261005260201b60201c565b5050565b610062828261013e60201b60201c565b61013a57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506100df61003660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd1806101b76000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806336568abe1161006657806336568abe146101305780634b9304a41461014c57806391d1485414610168578063a217fddf14610198578063d547741f146101b657610093565b806301ffc9a7146100985780631e4e0091146100c8578063248a9ca3146100e45780632f2ff15d14610114575b600080fd5b6100b260048036038101906100ad9190610995565b6101d2565b6040516100bf91906109dd565b60405180910390f35b6100e260048036038101906100dd9190610a2e565b61024c565b005b6100fe60048036038101906100f99190610a6e565b61025a565b60405161010b9190610aaa565b60405180910390f35b61012e60048036038101906101299190610b23565b610279565b005b61014a60048036038101906101459190610b23565b61029a565b005b61016660048036038101906101619190610a6e565b61031d565b005b610182600480360381019061017d9190610b23565b61032b565b60405161018f91906109dd565b60405180910390f35b6101a0610395565b6040516101ad9190610aaa565b60405180910390f35b6101d060048036038101906101cb9190610b23565b61039c565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102455750610244826103bd565b5b9050919050565b6102568282610427565b5050565b6000806000838152602001908152602001600020600101549050919050565b6102828261025a565b61028b81610482565b6102958383610496565b505050565b6102a2610576565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030690610be6565b60405180910390fd5b610319828261057e565b5050565b8061032781610482565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b6103a58261025a565b6103ae81610482565b6103b8838361057e565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60006104328361025a565b905081600080858152602001908152602001600020600101819055508181847fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff60405160405180910390a4505050565b6104938161048e610576565b61065f565b50565b6104a0828261032b565b61057257600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610517610576565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b610588828261032b565b1561065b57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610600610576565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610669828261032b565b6106f85761068e8173ffffffffffffffffffffffffffffffffffffffff1660146106fc565b61069c8360001c60206106fc565b6040516020016106ad929190610d18565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ef9190610d9c565b60405180910390fd5b5050565b60606000600283600261070f9190610df7565b6107199190610e51565b67ffffffffffffffff81111561073257610731610ea7565b5b6040519080825280601f01601f1916602001820160405280156107645781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061079c5761079b610ed6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610800576107ff610ed6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026108409190610df7565b61084a9190610e51565b90505b60018111156108ea577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061088c5761088b610ed6565b5b1a60f81b8282815181106108a3576108a2610ed6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806108e390610f05565b905061084d565b506000841461092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590610f7b565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6109728161093d565b811461097d57600080fd5b50565b60008135905061098f81610969565b92915050565b6000602082840312156109ab576109aa610938565b5b60006109b984828501610980565b91505092915050565b60008115159050919050565b6109d7816109c2565b82525050565b60006020820190506109f260008301846109ce565b92915050565b6000819050919050565b610a0b816109f8565b8114610a1657600080fd5b50565b600081359050610a2881610a02565b92915050565b60008060408385031215610a4557610a44610938565b5b6000610a5385828601610a19565b9250506020610a6485828601610a19565b9150509250929050565b600060208284031215610a8457610a83610938565b5b6000610a9284828501610a19565b91505092915050565b610aa4816109f8565b82525050565b6000602082019050610abf6000830184610a9b565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610af082610ac5565b9050919050565b610b0081610ae5565b8114610b0b57600080fd5b50565b600081359050610b1d81610af7565b92915050565b60008060408385031215610b3a57610b39610938565b5b6000610b4885828601610a19565b9250506020610b5985828601610b0e565b9150509250929050565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000610bd0602f83610b63565b9150610bdb82610b74565b604082019050919050565b60006020820190508181036000830152610bff81610bc3565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000610c47601783610c06565b9150610c5282610c11565b601782019050919050565b600081519050919050565b60005b83811015610c86578082015181840152602081019050610c6b565b83811115610c95576000848401525b50505050565b6000610ca682610c5d565b610cb08185610c06565b9350610cc0818560208601610c68565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000610d02601183610c06565b9150610d0d82610ccc565b601182019050919050565b6000610d2382610c3a565b9150610d2f8285610c9b565b9150610d3a82610cf5565b9150610d468284610c9b565b91508190509392505050565b6000601f19601f8301169050919050565b6000610d6e82610c5d565b610d788185610b63565b9350610d88818560208601610c68565b610d9181610d52565b840191505092915050565b60006020820190508181036000830152610db68184610d63565b905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0282610dbe565b9150610e0d83610dbe565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e4657610e45610dc8565b5b828202905092915050565b6000610e5c82610dbe565b9150610e6783610dbe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9c57610e9b610dc8565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610f1082610dbe565b91506000821415610f2457610f23610dc8565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000610f65602083610b63565b9150610f7082610f2f565b602082019050919050565b60006020820190508181036000830152610f9481610f58565b905091905056fea26469706673582212201cbcc508ecbffc014f00dce5600920be8c43d4795f065f00dde411ee1b44f6d964736f6c63430008090033";

type AccessControlMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControlMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessControlMock__factory extends ContractFactory {
  constructor(...args: AccessControlMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AccessControlMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControlMock> {
    return super.deploy(overrides || {}) as Promise<AccessControlMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlMock {
    return super.attach(address) as AccessControlMock;
  }
  connect(signer: Signer): AccessControlMock__factory {
    return super.connect(signer) as AccessControlMock__factory;
  }
  static readonly contractName: "AccessControlMock";
  public readonly contractName: "AccessControlMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlMockInterface {
    return new utils.Interface(_abi) as AccessControlMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlMock {
    return new Contract(address, _abi, signerOrProvider) as AccessControlMock;
  }
}
