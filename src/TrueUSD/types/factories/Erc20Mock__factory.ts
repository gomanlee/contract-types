/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Erc20Mock } from "../Erc20Mock";

export class Erc20Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Erc20Mock> {
    return super.deploy(
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<Erc20Mock>;
  }
  getDeployTransaction(
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): Erc20Mock {
    return super.attach(address) as Erc20Mock;
  }
  connect(signer: Signer): Erc20Mock__factory {
    return super.connect(signer) as Erc20Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc20Mock {
    return new Contract(address, _abi, signerOrProvider) as Erc20Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approveInternal",
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
    name: "burn",
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
    stateMutability: "view",
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
    stateMutability: "view",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052604051620013b6380380620013b6833981810160405260408110156200002957600080fd5b508051602091820151604080518082018252600a81526926b7b1b5902a37b5b2b760b11b818601908152825180840190935260048352634d4f434b60e01b95830195909552805193949293909262000085916003919062000247565b5080516200009b90600490602084019062000247565b50506005805460ff1916601217905550620000c082826001600160e01b03620000c816565b5050620002ec565b6001600160a01b03821662000124576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200013b600083836001600160e01b03620001e016565b6200015781600254620001e560201b620007e31790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200018a918390620007e3620001e5821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000240576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200028a57805160ff1916838001178555620002ba565b82800160010185558215620002ba579182015b82811115620002ba5782518255916020019190600101906200029d565b50620002c8929150620002cc565b5090565b620002e991905b80821115620002c85760008155600101620002d3565b90565b6110ba80620002fc6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f19116100975780639dc29fac116100665780639dc29fac14610374578063a457c2d7146103ad578063a9059cbb146103e6578063dd62ed3e1461041f576100f5565b806340c10f19146102bd57806356189cb4146102f657806370a082311461033957806395d89b411461036c576100f5565b8063222f5be0116100d3578063222f5be0146101de57806323b872dd14610223578063313ce567146102665780633950935114610284576100f5565b806306fdde03146100fa578063095ea7b31461017757806318160ddd146101c4575b600080fd5b61010261045a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b06004803603604081101561018d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561050e565b604080519115158252519081900360200190f35b6101cc61052b565b60408051918252519081900360200190f35b610221600480360360608110156101f457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610531565b005b6101b06004803603606081101561023957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610541565b61026e6105e8565b6040805160ff9092168252519081900360200190f35b6101b06004803603604081101561029a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105f1565b610221600480360360408110156102d357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610652565b6102216004803603606081101561030c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610660565b6101cc6004803603602081101561034f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661066b565b610102610693565b6102216004803603604081101561038a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610712565b6101b0600480360360408110156103c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561071c565b6101b0600480360360408110156103fc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610797565b6101cc6004803603604081101561043557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107ab565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105045780601f106104d957610100808354040283529160200191610504565b820191906000526020600020905b8154815290600101906020018083116104e757829003601f168201915b5050505050905090565b600061052261051b61085e565b8484610862565b50600192915050565b60025490565b61053c8383836109a9565b505050565b600061054e8484846109a9565b6105de8461055a61085e565b6105d985604051806060016040528060288152602001610fce6028913973ffffffffffffffffffffffffffffffffffffffff8a166000908152600160205260408120906105a561085e565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610b8516565b610862565b5060019392505050565b60055460ff1690565b60006105226105fe61085e565b846105d9856001600061060f61085e565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6107e316565b61065c8282610c36565b5050565b61053c838383610862565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105045780601f106104d957610100808354040283529160200191610504565b61065c8282610d73565b600061052261072961085e565b846105d985604051806060016040528060258152602001611060602591396001600061075361085e565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610b8516565b60006105226107a461085e565b84846109a9565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561085757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166108ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061103c6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661093a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610f866022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a15576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110176025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610f416023913960400191505060405180910390fd5b610a8c83838361053c565b610adc81604051806060016040528060268152602001610fa86026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260208190526040902054919063ffffffff610b8516565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610b1e908263ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610c2e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bf3578181015183820152602001610bdb565b50505050905090810190601f168015610c205780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610cb857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610cc46000838361053c565b600254610cd7908263ffffffff6107e316565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610d10908263ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ff66021913960400191505060405180910390fd5b610deb8260008361053c565b610e3b81604051806060016040528060228152602001610f646022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260208190526040902054919063ffffffff610b8516565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600254610e74908263ffffffff610ec916565b60025560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082821115610f3a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207ecc5a9a8e0403173bcec2a49f8e9b2a6f053b2c3cd402696471b0500f9b18e064736f6c634300060a0033";
