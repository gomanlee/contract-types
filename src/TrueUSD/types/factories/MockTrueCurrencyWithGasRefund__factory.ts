/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockTrueCurrencyWithGasRefund } from "../MockTrueCurrencyWithGasRefund";

export class MockTrueCurrencyWithGasRefund__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTrueCurrencyWithGasRefund> {
    return super.deploy(overrides || {}) as Promise<
      MockTrueCurrencyWithGasRefund
    >;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockTrueCurrencyWithGasRefund {
    return super.attach(address) as MockTrueCurrencyWithGasRefund;
  }
  connect(signer: Signer): MockTrueCurrencyWithGasRefund__factory {
    return super.connect(signer) as MockTrueCurrencyWithGasRefund__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTrueCurrencyWithGasRefund {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockTrueCurrencyWithGasRefund;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBlacklisted",
        type: "bool",
      },
    ],
    name: "Blacklisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMin",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "SetBurnBounds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnMax",
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
    name: "burnMin",
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
    ],
    name: "canBurn",
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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "initialize",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "reclaimEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "reclaimToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "refundGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingGasRefundPool",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingSheepRefundPool",
    outputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rounding",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isBlacklisted",
        type: "bool",
      },
    ],
    name: "setBlacklisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_min",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    name: "setBurnBounds",
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
      {
        internalType: "bool",
        name: "_canBurn",
        type: "bool",
      },
    ],
    name: "setCanBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff19169055600060068190556007556103e860155534801561002a57600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361229f806100836000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80635c131d701161010457806395d89b41116100a2578063d01dd6d211610071578063d01dd6d2146105e7578063dd62ed3e14610622578063e30c39781461065d578063f2fde38b14610665576101da565b806395d89b411461053a5780639a6a30a414610542578063a457c2d714610575578063a9059cbb146105ae576101da565b80638129fc1c116100de5780638129fc1c146104be57806381a084fd146104c657806388ee39cc146104ce5780638da5cb5b14610509576101da565b80635c131d701461044857806370a08231146104505780638074965614610483576101da565b80632e4404031161017c57806340c10f191161014b57806340c10f19146103c757806342966c68146104005780634e71e0c81461041d5780635200605014610425576101da565b80632e44040314610335578063313ce567146103535780633820a6861461035b578063395093511461038e576101da565b806317c931bd116101b857806317c931bd146102c35780631814ac44146102e257806318160ddd146102ea57806323b872dd146102f2576101da565b806302d3fdc9146101df57806306fdde03146101f9578063095ea7b314610276575b600080fd5b6101e7610698565b60408051918252519081900360200190f35b61020161069e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023b578181015183820152602001610223565b50505050905090810190601f1680156102685780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102af6004803603604081101561028c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106d5565b604080519115158252519081900360200190f35b6102e0600480360360208110156102d957600080fd5b50356106f2565b005b6101e7610798565b6101e76107bd565b6102af6004803603606081101561030857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107c3565b61033d61086a565b6040805160ff9092168252519081900360200190f35b61033d61086f565b6102af6004803603602081101561037157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610874565b6102af600480360360408110156103a457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610889565b6102e0600480360360408110156103dd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108ea565b6102e06004803603602081101561041657600080fd5b5035610a5a565b6102e0610a64565b6102e06004803603604081101561043b57600080fd5b5080359060200135610b66565b6101e7610c5a565b6101e76004803603602081101561046657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c60565b6102e06004803603604081101561049957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610c88565b6102e0610d4a565b6101e7610ddd565b6102e0600480360360408110156104e457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610de5565b610511610f9a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610201610fb6565b6102e06004803603602081101561055857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610fed565b6102af6004803603604081101561058b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561109f565b6102af600480360360408110156105c457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561111a565b6102e0600480360360408110156105fd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135151561112e565b6101e76004803603604081101561063857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661127d565b6105116112b5565b6102e06004803603602081101561067b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112d1565b60065481565b60408051808201909152600c81527f5472756543757272656e63790000000000000000000000000000000000000000602082015290565b60006106e96106e2611384565b8484611388565b50600192915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461075e576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610768610ddd565b111561077c576107778161146b565b610795565b61079561079082600363ffffffff6114ae16565b611515565b50565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5490565b60045490565b60006107d084848461159d565b610860846107dc611384565b61085b856040518060600160405280602881526020016120ca6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600f6020526040812090610827611384565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff6116e616565b611388565b5060019392505050565b600290565b601290565b60176020526000908152604090205460ff1681565b60006106e9610896611384565b8461085b85600f60006108a7611384565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61177d16565b60005473ffffffffffffffffffffffffffffffffffffffff163314610956576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff16156109bb5760405162461bcd60e51b815260040180806020018281038252602481526020018061200f6024913960400191505060405180910390fd5b6109c4826117de565b15610a005760405162461bcd60e51b815260040180806020018281038252602d8152602001806120f2602d913960400191505060405180910390fd5b610a0a8282611823565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b6107953382611948565b60015473ffffffffffffffffffffffffffffffffffffffff163314610ad0576040805162461bcd60e51b815260206004820152601260248201527f6f6e6c792070656e64696e67206f776e65720000000000000000000000000000604482015290519081900360640190fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff93841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bd2576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b80821115610c115760405162461bcd60e51b81526004018080602001828103825260228152602001806120a86022913960400191505060405180910390fd5b60068290556007819055604080518381526020810183905281517f21d54a4c1f750b4f93779e3e8b4de89db3f31bab8f203e68569727fee906cc32929181900390910190a15050565b60075481565b73ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cf4576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260176020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015474010000000000000000000000000000000000000000900460ff1615610d7257600080fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055565b620fffff5490565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e51576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b158015610ec157600080fd5b505afa158015610ed5573d6000803e3d6000fd5b505050506040513d6020811015610eeb57600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b158015610f6957600080fd5b505af1158015610f7d573d6000803e3d6000fd5b505050506040513d6020811015610f9357600080fd5b5050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60408051808201909152600481527f5443555200000000000000000000000000000000000000000000000000000000602082015290565b60005473ffffffffffffffffffffffffffffffffffffffff163314611059576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f1935050505015801561109b573d6000803e3d6000fd5b5050565b60006106e96110ac611384565b8461085b8560405180606001604052806025815260200161221660259139600f60006110d6611384565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff6116e616565b60006106e9611127611384565b848461159d565b60005473ffffffffffffffffffffffffffffffffffffffff16331461119a576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b621000008273ffffffffffffffffffffffffffffffffffffffff1610156111f25760405162461bcd60e51b815260040180806020018281038252603f81526020018061211f603f913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660008181526016602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517fcf3473b85df1594d47b6958f29a32bea0abff9dd68296f7bf33443646793cfd89281900390910190a25050565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152600f6020908152604080832093909416825291909152205490565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461133d576040805162461bcd60e51b815260206004820152600a60248201527f6f6e6c79204f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff16156113ed5760405162461bcd60e51b81526004018080602001828103825260298152602001806120596029913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff161580611420575080155b61145b5760405162461bcd60e51b815260040180806020018281038252602b815260200180611f73602b913960400191505060405180910390fd5b6114668383836119b6565b505050565b620fffff548181101561147c578091505b8161148357005b620fffff81018281035b808211156114a4576000825560018203915061148d565b505003620fffff55565b6000808211611504576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161150d57fe5b049392505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5481811015611543578091505b8161154a57005b80198281015b808210156115765781546000806000806000855af1505060008255600182019150611550565b5050037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55565b73ffffffffffffffffffffffffffffffffffffffff831660009081526016602052604090205460ff16156116025760405162461bcd60e51b81526004018080602001828103825260238152602001806121c86023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526016602052604090205460ff16156116675760405162461bcd60e51b81526004018080602001828103825260268152602001806120826026913960400191505060405180910390fd5b611670826117de565b156116db576116a683836116a161169485662386f26fc1000063ffffffff611ac916565b859063ffffffff611b3016565b611b8d565b6116d6826116d16116c484662386f26fc1000063ffffffff611ac916565b849063ffffffff611b3016565b611948565b611466565b611466838383611b8d565b600081848411156117755760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561173a578181015183820152602001611722565b50505050905090810190601f1680156117675780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156117d7576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000621000008273ffffffffffffffffffffffffffffffffffffffff1610801561181d575073ffffffffffffffffffffffffffffffffffffffff821615155b92915050565b73ffffffffffffffffffffffffffffffffffffffff821661188b576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61189760008383611466565b6004546118aa908263ffffffff61177d16565b60045573ffffffffffffffffffffffffffffffffffffffff82166000908152600e60205260409020546118e3908263ffffffff61177d16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600e602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526017602052604090205460ff166119ac5760405162461bcd60e51b815260040180806020018281038252602b8152602001806121eb602b913960400191505060405180910390fd5b61109b8282611d37565b73ffffffffffffffffffffffffffffffffffffffff8316611a085760405162461bcd60e51b81526004018080602001828103825260248152602001806121a46024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a5a5760405162461bcd60e51b8152600401808060200182810382526022815260200180611fed6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600f6020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000808211611b1f576040805162461bcd60e51b815260206004820152601860248201527f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000604482015290519081900360640190fd5b818381611b2857fe5b069392505050565b600082821115611b87576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff8316611bdf5760405162461bcd60e51b815260040180806020018281038252602581526020018061217f6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611c315760405162461bcd60e51b8152600401808060200182810382526023815260200180611f506023913960400191505060405180910390fd5b611c3c838383611466565b611c8c816040518060600160405280602681526020016120336026913973ffffffffffffffffffffffffffffffffffffffff86166000908152600e6020526040902054919063ffffffff6116e616565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600e60205260408082209390935590841681522054611cce908263ffffffff61177d16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600e602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600654811015611d785760405162461bcd60e51b815260040180806020018281038252602d815260200180611f9e602d913960400191505060405180910390fd5b600754811115611db95760405162461bcd60e51b815260040180806020018281038252602f81526020018061223b602f913960400191505060405180910390fd5b611dc38282611e13565b60408051828152905173ffffffffffffffffffffffffffffffffffffffff8416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a25050565b73ffffffffffffffffffffffffffffffffffffffff8216611e655760405162461bcd60e51b815260040180806020018281038252602181526020018061215e6021913960400191505060405180910390fd5b611e7182600083611466565b611ec181604051806060016040528060228152602001611fcb6022913973ffffffffffffffffffffffffffffffffffffffff85166000908152600e6020526040902054919063ffffffff6116e616565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600e6020526040902055600454611efa908263ffffffff611b3016565b60045560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573735472756543757272656e63793a20746f6b656e73207370656e64657220697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a2062656c6f77206d696e206275726e20626f756e6445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f20616464726573735472756543757272656e63793a206163636f756e7420697320626c61636b6c697374656445524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655472756543757272656e63793a20746f6b656e73206f776e657220697320626c61636b6c69737465645472756543757272656e63793a20726563697069656e7420697320626c61636b6c69737465644275726e61626c65546f6b656e57697468426f756e64733a206d696e203e206d617845524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655472756543757272656e63793a206163636f756e74206973206120726564656d7074696f6e20616464726573735472756543757272656e63793a20626c61636b6c697374696e67206f6620726564656d7074696f6e2061646472657373206973206e6f7420616c6c6f77656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735472756543757272656e63793a2073656e64657220697320626c61636b6c69737465645472756543757272656e63793a2063616e6e6f74206275726e2066726f6d2074686973206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f4275726e61626c65546f6b656e57697468426f756e64733a2065786365656473206d6178206275726e20626f756e64a26469706673582212205ed8625ca4c534ebc6ddcc9637f080784e70d7bc46075c2cde7550a01d80d14464736f6c634300060a0033";
