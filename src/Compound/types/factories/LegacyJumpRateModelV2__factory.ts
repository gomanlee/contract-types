/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LegacyJumpRateModelV2,
  LegacyJumpRateModelV2Interface,
} from "../LegacyJumpRateModelV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jumpMultiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kink_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "baseRatePerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "jumpMultiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "kink",
        type: "uint256",
      },
    ],
    name: "NewInterestParams",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "baseRatePerBlock",
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
    name: "blocksPerYear",
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
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
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
    name: "isInterestRateModel",
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
    name: "jumpMultiplierPerBlock",
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
    name: "kink",
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
    name: "multiplierPerBlock",
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
    name: "owner",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jumpMultiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kink_",
        type: "uint256",
      },
    ],
    name: "updateJumpRateModel",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "utilizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a8a380380610a8a833981810160405260a081101561003357600080fd5b508051602082015160408301516060840151608090940151600080546001600160a01b0319166001600160a01b03831617905592939192909190848484848461007e8585858561008d565b505050505050505050506102bc565b6100a7622014808561017060201b6105e41790919060201c565b6002556100f66100c562201480836101c1602090811b61058b17901c565b6100e4670de0b6b3a7640000866101c160201b61058b1790919060201c565b61017060201b6105e41790919060201c565b6001556101118262201480610170602090811b6105e417901c565b60038190556004829055600254600154604080519283526020830191909152818101929092526060810183905290517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9181900360800190a150505050565b60006101b883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061021a60201b60201c565b90505b92915050565b6000826101d0575060006101bb565b828202828482816101dd57fe5b04146101b85760405162461bcd60e51b8152600401808060200182810382526021815260200180610a696021913960400191505060405180910390fd5b600081836102a65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561026b578181015183820152602001610253565b50505050905090810190601f1680156102985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816102b257fe5b0495945050505050565b61079e806102cb6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610180578063a385fb96146101a4578063b8168816146101ac578063b9f9850a146101db578063f14039de146101e3578063fd2da339146101eb576100a9565b806315f24053146100ae5780632037f3e7146100f05780632191f92a146101215780636e71e2d81461013d5780638726bb8914610178575b600080fd5b6100d7600480360360608110156100c457600080fd5b50803590602081013590604001356101f3565b6040805192835260208301919091528051918290030190f35b61011f6004803603608081101561010657600080fd5b508035906020810135906040810135906060013561020f565b005b61012961026a565b604080519115158252519081900360200190f35b6101666004803603606081101561015357600080fd5b508035906020810135906040013561026f565b60408051918252519081900360200190f35b6101666102cf565b6101886102d5565b604080516001600160a01b039092168252519081900360200190f35b6101666102e4565b610166600480360360808110156101c257600080fd5b50803590602081013590604081013590606001356102eb565b61016661036a565b610166610370565b610166610376565b600080600061020386868661037c565b90969095509350505050565b6000546001600160a01b031633146102585760405162461bcd60e51b81526004018080602001828103825260268152602001806107446026913960400191505060405180910390fd5b61026484848484610445565b50505050565b600181565b60008261027e575060006102c8565b6102c56102a183610295878763ffffffff6104e616565b9063ffffffff61054916565b6102b985670de0b6b3a764000063ffffffff61058b16565b9063ffffffff6105e416565b90505b9392505050565b60015481565b6000546001600160a01b031681565b6220148081565b600080610306670de0b6b3a76400008463ffffffff61054916565b9050600061031587878761037c565b90506000610335670de0b6b3a76400006102b9848663ffffffff61058b16565b905061035e670de0b6b3a76400006102b9836103528c8c8c61026f565b9063ffffffff61058b16565b98975050505050505050565b60035481565b60025481565b60045481565b60008061038a85858561026f565b905060045481116103d0576103c86002546103bc670de0b6b3a76400006102b96001548661058b90919063ffffffff16565b9063ffffffff6104e616565b9150506102c8565b60006103fb6002546103bc670de0b6b3a76400006102b960015460045461058b90919063ffffffff16565b905060006104146004548461054990919063ffffffff16565b905061043b826103bc670de0b6b3a76400006102b96003548661058b90919063ffffffff16565b93505050506102c8565b610458846220148063ffffffff6105e416565b6002556104716102a1622014808363ffffffff61058b16565b600155610487826220148063ffffffff6105e416565b60038190556004829055600254600154604080519283526020830191909152818101929092526060810183905290517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9181900360800190a150505050565b600082820183811015610540576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600061054083836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f7700815250610626565b60008261059a57506000610543565b828202828482816105a757fe5b04146105405760405162461bcd60e51b81526004018080602001828103825260218152602001806107236021913960400191505060405180910390fd5b600061054083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506106bd565b600081848411156106b55760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561067a578181015183820152602001610662565b50505050905090810190601f1680156106a75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361070c5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561067a578181015183820152602001610662565b50600083858161071857fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f776f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e6374696f6e2ea265627a7a7231582060f5c9f601d33d44e37567461a6245e0d8c268cf75a0dc00c2045f71bd985ec364736f6c63430005100032536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";

type LegacyJumpRateModelV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LegacyJumpRateModelV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LegacyJumpRateModelV2__factory extends ContractFactory {
  constructor(...args: LegacyJumpRateModelV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LegacyJumpRateModelV2";
  }

  deploy(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LegacyJumpRateModelV2> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    ) as Promise<LegacyJumpRateModelV2>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    );
  }
  attach(address: string): LegacyJumpRateModelV2 {
    return super.attach(address) as LegacyJumpRateModelV2;
  }
  connect(signer: Signer): LegacyJumpRateModelV2__factory {
    return super.connect(signer) as LegacyJumpRateModelV2__factory;
  }
  static readonly contractName: "LegacyJumpRateModelV2";
  public readonly contractName: "LegacyJumpRateModelV2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LegacyJumpRateModelV2Interface {
    return new utils.Interface(_abi) as LegacyJumpRateModelV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LegacyJumpRateModelV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LegacyJumpRateModelV2;
  }
}
