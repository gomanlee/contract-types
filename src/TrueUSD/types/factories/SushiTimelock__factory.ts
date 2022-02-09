/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SushiTimelock } from "../SushiTimelock";

export class SushiTimelock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiTimelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<
      SushiTimelock
    >;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): SushiTimelock {
    return super.attach(address) as SushiTimelock;
  }
  connect(signer: Signer): SushiTimelock__factory {
    return super.connect(signer) as SushiTimelock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiTimelock {
    return new Contract(address, _abi, signerOrProvider) as SushiTimelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin_initialized",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611d59380380611d598339818101604052604081101561003357600080fd5b5080516020909101516202a30081101561007e5760405162461bcd60e51b8152600401808060200182810382526037815260200180611d226037913960400191505060405180910390fd5b62278d008111156100c05760405162461bcd60e51b815260040180806020018281038252603b815260200180611ce7603b913960400191505060405180910390fd5b600080546001600160a01b039093166001600160a01b0319909316929092179091556002556003805460ff19169055611be9806100fe6000396000f3fe6080604052600436106100e15760003560e01c80636fc1f57e1161007f578063c1a287e211610059578063c1a287e21461067e578063e177246e14610693578063f2b06537146106bd578063f851a440146106e7576100e8565b80636fc1f57e1461062b5780637d645fab14610654578063b1b43ae514610669576100e8565b80633a66f901116100bb5780633a66f901146103085780634dd18bf514610478578063591fcdfe146104b85780636a42b8f814610616576100e8565b80630825f38f146100ed5780630e18b681146102b357806326782247146102ca576100e8565b366100e857005b600080fd5b61023e600480360360a081101561010357600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561014057600080fd5b82018360208201111561015257600080fd5b8035906020019184600183028401116401000000008311171561017457600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156101c757600080fd5b8201836020820111156101d957600080fd5b803590602001918460018302840111640100000000831117156101fb57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506106fc915050565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610278578181015183820152602001610260565b50505050905090810190601f1680156102a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102bf57600080fd5b506102c8610d7a565b005b3480156102d657600080fd5b506102df610e62565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561031457600080fd5b50610466600480360360a081101561032b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561036857600080fd5b82018360208201111561037a57600080fd5b8035906020019184600183028401116401000000008311171561039c57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092959493602081019350359150506401000000008111156103ef57600080fd5b82018360208201111561040157600080fd5b8035906020019184600183028401116401000000008311171561042357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610e7e915050565b60408051918252519081900360200190f35b34801561048457600080fd5b506102c86004803603602081101561049b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166111f7565b3480156104c457600080fd5b506102c8600480360360a08110156104db57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561051857600080fd5b82018360208201111561052a57600080fd5b8035906020019184600183028401116401000000008311171561054c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561059f57600080fd5b8201836020820111156105b157600080fd5b803590602001918460018302840111640100000000831117156105d357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250611370915050565b34801561062257600080fd5b50610466611674565b34801561063757600080fd5b5061064061167a565b604080519115158252519081900360200190f35b34801561066057600080fd5b50610466611683565b34801561067557600080fd5b5061046661168a565b34801561068a57600080fd5b50610466611691565b34801561069f57600080fd5b506102c8600480360360208110156106b657600080fd5b5035611698565b3480156106c957600080fd5b50610640600480360360208110156106e057600080fd5b50356117db565b3480156106f357600080fd5b506102df6117f0565b60005460609073ffffffffffffffffffffffffffffffffffffffff16331461076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061188c6038913960400191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156107f85781810151838201526020016107e0565b50505050905090810190601f1680156108255780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610858578181015183820152602001610840565b50505050905090810190601f1680156108855780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291815281516020928301206000818152600490935291205490995060ff16975061092e9650505050505050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611a1a603d913960400191505060405180910390fd5b8261093761180c565b101561098e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604581526020018061192e6045913960600191505060405180910390fd5b6109a1836212750063ffffffff61181016565b6109a961180c565b1115610a00576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806118fb6033913960400191505060405180910390fd5b600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558451606090610a44575083610b19565b85805190602001208560405160200180837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260040182805190602001908083835b60208310610ae157805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610aa4565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b600060608973ffffffffffffffffffffffffffffffffffffffff1689846040518082805190602001908083835b60208310610b8357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610b46565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610be5576040519150601f19603f3d011682016040523d82523d6000602084013e610bea565b606091505b509150915081610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611afd603d913960400191505060405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610ccf578181015183820152602001610cb7565b50505050905090810190601f168015610cfc5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610d2f578181015183820152602001610d17565b50505050905090810190601f168015610d5c5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39998505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610dea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611a576038913960400191505060405180910390fd5b60008054337fffffffffffffffffffffffff0000000000000000000000000000000000000000918216178083556001805490921690915560405173ffffffffffffffffffffffffffffffffffffffff909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff163314610eef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180611ac76036913960400191505060405180910390fd5b610f09600254610efd61180c565b9063ffffffff61181016565b821015610f61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526049815260200180611b3a6049913960600191505060405180910390fd5b60008686868686604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610fea578181015183820152602001610fd2565b50505050905090810190601f1680156110175780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561104a578181015183820152602001611032565b50505050905090810190601f1680156110775780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060016004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508673ffffffffffffffffffffffffffffffffffffffff16817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561114f578181015183820152602001611137565b50505050905090810190601f16801561117c5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156111af578181015183820152602001611197565b50505050905090810190601f1680156111dc5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39695505050505050565b60035460ff161561125f5733301461125a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611a8f6038913960400191505060405180910390fd5b6112fb565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b8152602001806119a7603b913960400191505060405180910390fd5b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b60005473ffffffffffffffffffffffffffffffffffffffff1633146113e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806118c46037913960400191505060405180910390fd5b60008585858585604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015611469578181015183820152602001611451565b50505050905090810190601f1680156114965780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156114c95781810151838201526020016114b1565b50505050905090810190601f1680156114f65780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060006004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff16817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156115ce5781810151838201526020016115b6565b50505050905090810190601f1680156115fb5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561162e578181015183820152602001611616565b50505050905090810190601f16801561165b5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60025481565b60035460ff1681565b62278d0081565b6202a30081565b6212750081565b3330146116f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180611b836031913960400191505060405180910390fd5b6202a30081101561174c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806119736034913960400191505060405180910390fd5b62278d008111156117a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806119e26038913960400191505060405180910390fd5b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b60046020526000908152604090205460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b4290565b60008282018381101561188457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206973207374616c652e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774207375727061737365642074696d65206c6f636b2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2046697273742063616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e206861736e2774206265656e207175657565642e54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737420636f6d652066726f6d2070656e64696e6741646d696e2e54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c206d75737420636f6d652066726f6d2061646d696e2e54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472616e73616374696f6e20657865637574696f6e2072657665727465642e54696d656c6f636b3a3a71756575655472616e73616374696f6e3a20457374696d6174656420657865637574696f6e20626c6f636b206d75737420736174697366792064656c61792e54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f6d652066726f6d2054696d656c6f636b2ea26469706673582212207ccdd13ae54d6412efa846045448a1affda51439cac5b10a08c7738ff499953864736f6c634300060a003354696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757374206e6f7420657863656564206d6178696d756d2064656c61792e54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d75737420657863656564206d696e696d756d2064656c61792e";
