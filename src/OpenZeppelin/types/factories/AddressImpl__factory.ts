/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressImpl, AddressImplInterface } from "../AddressImpl";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "CallReturnValue",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "functionCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "functionCallWithValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "functionDelegateCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "functionStaticCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isContract",
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
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sharedAnswer",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506113a3806100206000396000f3fe6080604052600436106100745760003560e01c8063a0b5ffb01161004e578063a0b5ffb014610102578063c21d36f31461012b578063ee33b7e214610154578063fc40cf731461017d5761007b565b8063162790551461008057806324a084df146100bd5780632a011594146100e65761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610a69565b6101a8565b6040516100b49190610ab1565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190610b40565b6101ba565b005b61010060048036038101906100fb9190610be5565b6101c8565b005b34801561010e57600080fd5b5061012960048036038101906101249190610c59565b61026c565b005b34801561013757600080fd5b50610152600480360381019061014d9190610c59565b61030e565b005b34801561016057600080fd5b5061017b60048036038101906101769190610c59565b6103b0565b005b34801561018957600080fd5b50610192610452565b60405161019f9190610d52565b60405180910390f35b60006101b3826104e0565b9050919050565b6101c48282610503565b5050565b60006102198585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050846105f7565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c818060200190518101906102509190610e95565b60405161025d9190610d52565b60405180910390a15050505050565b60006102bc8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610626565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c818060200190518101906102f39190610e95565b6040516103009190610d52565b60405180910390a150505050565b600061035e8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610670565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c818060200190518101906103959190610e95565b6040516103a29190610d52565b60405180910390a150505050565b60006104008484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061069d565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c818060200190518101906104379190610e95565b6040516104449190610d52565b60405180910390a150505050565b6000805461045f90610f0d565b80601f016020809104026020016040519081016040528092919081815260200182805461048b90610f0d565b80156104d85780601f106104ad576101008083540402835291602001916104d8565b820191906000526020600020905b8154815290600101906020018083116104bb57829003601f168201915b505050505081565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b80471015610546576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053d90610f8b565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405161056c90610fdc565b60006040518083038185875af1925050503d80600081146105a9576040519150601f19603f3d011682016040523d82523d6000602084013e6105ae565b606091505b50509050806105f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e990611063565b60405180910390fd5b505050565b606061061d8484846040518060600160405280602981526020016112f9602991396106ca565b90509392505050565b606061066883836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c656400008152506107de565b905092915050565b60606106958383604051806060016040528060258152602001611322602591396107f6565b905092915050565b60606106c28383604051806060016040528060278152602001611347602791396108c3565b905092915050565b60608247101561070f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610706906110f5565b60405180910390fd5b610718856104e0565b610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e90611161565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161078091906111bd565b60006040518083038185875af1925050503d80600081146107bd576040519150601f19603f3d011682016040523d82523d6000602084013e6107c2565b606091505b50915091506107d2828286610990565b92505050949350505050565b60606107ed84846000856106ca565b90509392505050565b6060610801846104e0565b610840576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083790611246565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161086891906111bd565b600060405180830381855afa9150503d80600081146108a3576040519150601f19603f3d011682016040523d82523d6000602084013e6108a8565b606091505b50915091506108b8828286610990565b925050509392505050565b60606108ce846104e0565b61090d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610904906112d8565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161093591906111bd565b600060405180830381855af49150503d8060008114610970576040519150601f19603f3d011682016040523d82523d6000602084013e610975565b606091505b5091509150610985828286610990565b925050509392505050565b606083156109a0578290506109f0565b6000835111156109b35782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e79190610d52565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a3682610a0b565b9050919050565b610a4681610a2b565b8114610a5157600080fd5b50565b600081359050610a6381610a3d565b92915050565b600060208284031215610a7f57610a7e610a01565b5b6000610a8d84828501610a54565b91505092915050565b60008115159050919050565b610aab81610a96565b82525050565b6000602082019050610ac66000830184610aa2565b92915050565b6000610ad782610a0b565b9050919050565b610ae781610acc565b8114610af257600080fd5b50565b600081359050610b0481610ade565b92915050565b6000819050919050565b610b1d81610b0a565b8114610b2857600080fd5b50565b600081359050610b3a81610b14565b92915050565b60008060408385031215610b5757610b56610a01565b5b6000610b6585828601610af5565b9250506020610b7685828601610b2b565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f840112610ba557610ba4610b80565b5b8235905067ffffffffffffffff811115610bc257610bc1610b85565b5b602083019150836001820283011115610bde57610bdd610b8a565b5b9250929050565b60008060008060608587031215610bff57610bfe610a01565b5b6000610c0d87828801610a54565b945050602085013567ffffffffffffffff811115610c2e57610c2d610a06565b5b610c3a87828801610b8f565b93509350506040610c4d87828801610b2b565b91505092959194509250565b600080600060408486031215610c7257610c71610a01565b5b6000610c8086828701610a54565b935050602084013567ffffffffffffffff811115610ca157610ca0610a06565b5b610cad86828701610b8f565b92509250509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015610cf3578082015181840152602081019050610cd8565b83811115610d02576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d2482610cb9565b610d2e8185610cc4565b9350610d3e818560208601610cd5565b610d4781610d08565b840191505092915050565b60006020820190508181036000830152610d6c8184610d19565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610db182610d08565b810181811067ffffffffffffffff82111715610dd057610dcf610d79565b5b80604052505050565b6000610de36109f7565b9050610def8282610da8565b919050565b600067ffffffffffffffff821115610e0f57610e0e610d79565b5b610e1882610d08565b9050602081019050919050565b6000610e38610e3384610df4565b610dd9565b905082815260208101848484011115610e5457610e53610d74565b5b610e5f848285610cd5565b509392505050565b600082601f830112610e7c57610e7b610b80565b5b8151610e8c848260208601610e25565b91505092915050565b600060208284031215610eab57610eaa610a01565b5b600082015167ffffffffffffffff811115610ec957610ec8610a06565b5b610ed584828501610e67565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f2557607f821691505b60208210811415610f3957610f38610ede565b5b50919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000610f75601d83610cc4565b9150610f8082610f3f565b602082019050919050565b60006020820190508181036000830152610fa481610f68565b9050919050565b600081905092915050565b50565b6000610fc6600083610fab565b9150610fd182610fb6565b600082019050919050565b6000610fe782610fb9565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b600061104d603a83610cc4565b915061105882610ff1565b604082019050919050565b6000602082019050818103600083015261107c81611040565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006110df602683610cc4565b91506110ea82611083565b604082019050919050565b6000602082019050818103600083015261110e816110d2565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061114b601d83610cc4565b915061115682611115565b602082019050919050565b6000602082019050818103600083015261117a8161113e565b9050919050565b600081519050919050565b600061119782611181565b6111a18185610fab565b93506111b1818560208601610cd5565b80840191505092915050565b60006111c9828461118c565b915081905092915050565b7f416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b6000611230602483610cc4565b915061123b826111d4565b604082019050919050565b6000602082019050818103600083015261125f81611223565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b60006112c2602683610cc4565b91506112cd82611266565b604082019050919050565b600060208201905081810360008301526112f1816112b5565b905091905056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207b4f2bbee2f2024babe32c8ef6967b67afbd58db1dea5ea4c1cf0b4069abce5964736f6c63430008090033";

type AddressImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressImpl__factory extends ContractFactory {
  constructor(...args: AddressImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AddressImpl";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AddressImpl> {
    return super.deploy(overrides || {}) as Promise<AddressImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressImpl {
    return super.attach(address) as AddressImpl;
  }
  connect(signer: Signer): AddressImpl__factory {
    return super.connect(signer) as AddressImpl__factory;
  }
  static readonly contractName: "AddressImpl";
  public readonly contractName: "AddressImpl";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressImplInterface {
    return new utils.Interface(_abi) as AddressImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressImpl {
    return new Contract(address, _abi, signerOrProvider) as AddressImpl;
  }
}
