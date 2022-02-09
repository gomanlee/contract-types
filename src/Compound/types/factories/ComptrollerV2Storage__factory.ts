/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV2Storage,
  ComptrollerV2StorageInterface,
} from "../ComptrollerV2Storage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "_borrowGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_mintGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "accountAssets",
    outputs: [
      {
        internalType: "contract CToken",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "closeFactorMantissa",
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
    inputs: [],
    name: "comptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "liquidationIncentiveMantissa",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissa",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isComped",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxAssets",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pauseGuardian",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingComptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "seizeGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "transferGuardianPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103e0806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638e8f294b116100a2578063dce1544911610071578063dce154491461022e578063dcfbc0c71461025a578063e6653f3d14610262578063e87554461461026a578063f851a440146102725761010b565b80638e8f294b146101ce57806394b2294b14610216578063ac0b0bb71461021e578063bb82aa5e146102265761010b565b80636d154ea5116100de5780636d154ea514610172578063731f0c2b146101985780637dc0d1d0146101be57806387f76303146101c65761010b565b806324a3d6221461011057806326782247146101345780633c94786f1461013c5780634ada90af14610158575b600080fd5b61011861027a565b604080516001600160a01b039092168252519081900360200190f35b610118610289565b610144610298565b604080519115158252519081900360200190f35b6101606102a8565b60408051918252519081900360200190f35b6101446004803603602081101561018857600080fd5b50356001600160a01b03166102ae565b610144600480360360208110156101ae57600080fd5b50356001600160a01b03166102c3565b6101186102d8565b6101446102e7565b6101f4600480360360208110156101e457600080fd5b50356001600160a01b03166102f7565b6040805193151584526020840192909252151582820152519081900360600190f35b61016061031d565b610144610323565b610118610333565b6101186004803603604081101561024457600080fd5b506001600160a01b038135169060200135610342565b610118610377565b610144610386565b610160610396565b61011861039c565b600a546001600160a01b031681565b6001546001600160a01b031681565b600a54600160a01b900460ff1681565b60065481565b600c6020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b6004546001600160a01b031681565b600a54600160b01b900460ff1681565b60096020526000908152604090208054600182015460039092015460ff91821692911683565b60075481565b600a54600160b81b900460ff1681565b6002546001600160a01b031681565b6008602052816000526040600020818154811061035b57fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b600a54600160a81b900460ff1681565b60055481565b6000546001600160a01b03168156fea265627a7a72315820965f479cf871ffc0d7113808d2643abe9c9007aa15c565124bf5f70660f39dc364736f6c63430005100032";

type ComptrollerV2StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV2StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV2Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV2StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ComptrollerV2Storage";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV2Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV2Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV2Storage {
    return super.attach(address) as ComptrollerV2Storage;
  }
  connect(signer: Signer): ComptrollerV2Storage__factory {
    return super.connect(signer) as ComptrollerV2Storage__factory;
  }
  static readonly contractName: "ComptrollerV2Storage";
  public readonly contractName: "ComptrollerV2Storage";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV2StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV2StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV2Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV2Storage;
  }
}
