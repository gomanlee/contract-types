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

import type { TestDeficiencyToken } from "../TestDeficiencyToken";

export class TestDeficiencyToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _debt: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestDeficiencyToken> {
    return super.deploy(_debt, _amount, overrides || {}) as Promise<
      TestDeficiencyToken
    >;
  }
  getDeployTransaction(
    _debt: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_debt, _amount, overrides || {});
  }
  attach(address: string): TestDeficiencyToken {
    return super.attach(address) as TestDeficiencyToken;
  }
  connect(signer: Signer): TestDeficiencyToken__factory {
    return super.connect(signer) as TestDeficiencyToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestDeficiencyToken {
    return new Contract(address, _abi, signerOrProvider) as TestDeficiencyToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IDebtToken",
        name: "_debt",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "debt",
    outputs: [
      {
        internalType: "contract IDebtToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "isInitialized",
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
    inputs: [],
    name: "version",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017e9380380620017e9833981810160405260408110156200003757600080fd5b508051602091820151604080518082018252601781527f54727565466920446566696369656e637920546f6b656e00000000000000000081860152815180830190925260038252622222a360e91b828601529293919284928492620000a692916200080562000153821b17901c565b81603860016101000a8154816001600160a01b0302191690836001600160a01b0316021790555062000149826001600160a01b03166316f0115b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010b57600080fd5b505afa15801562000120573d6000803e3d6000fd5b505050506040513d60208110156200013757600080fd5b5051826001600160e01b036200024116565b5050505062000468565b600054610100900460ff1680620001785750620001786001600160e01b036200035d16565b8062000187575060005460ff16155b620001c45760405162461bcd60e51b815260040180806020018281038252602e815260200180620017bb602e913960400191505060405180910390fd5b600054610100900460ff16158015620001f0576000805460ff1961ff0019909116610100171660011790555b825162000205906036906020860190620003c6565b5081516200021b906037906020850190620003c6565b506038805460ff1916601217905580156200023c576000805461ff00191690555b505050565b6001600160a01b0382166200029d576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002b4600083836001600160e01b036200023c16565b620002d0816035546200036460201b6200096e1790919060201c565b6035556001600160a01b038216600090815260336020908152604090912054620003059183906200096e62000364821b17901c565b6001600160a01b03831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b303b155b90565b600082820183811015620003bf576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200040957805160ff191683800117855562000439565b8280016001018555821562000439579182015b82811115620004395782518255916020019190600101906200041c565b50620004479291506200044b565b5090565b6200036191905b8082111562000447576000815560010162000452565b61134380620004786000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806340c10f191161009757806395d89b411161006657806395d89b411461036b578063a457c2d714610373578063a9059cbb146103ac578063dd62ed3e146103e557610100565b806340c10f19146102bc57806354fd4d50146102f757806370a08231146102ff57806379cc67901461033257610100565b806323b872dd116100d357806323b872dd1461021a578063313ce5671461025d578063392e53cd1461027b578063395093511461028357610100565b806306fdde0314610105578063095ea7b3146101825780630dca59c1146101cf57806318160ddd14610200575b600080fd5b61010d610420565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101bb6004803603604081101561019857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104d5565b604080519115158252519081900360200190f35b6101d76104f2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610208610513565b60408051918252519081900360200190f35b6101bb6004803603606081101561023057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610519565b6102656105c0565b6040805160ff9092168252519081900360200190f35b6101bb6105c9565b6101bb6004803603604081101561029957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105d2565b6102f5600480360360408110156102d257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610633565b005b610265610641565b6102086004803603602081101561031557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610646565b6102f56004803603604081101561034857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561066e565b61010d6106bf565b6101bb6004803603604081101561038957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561073e565b6101bb600480360360408110156103c257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107b9565b610208600480360360408110156103fb57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107cd565b60368054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b505050505090505b90565b60006104e96104e26109e9565b84846109ed565b50600192915050565b603854610100900473ffffffffffffffffffffffffffffffffffffffff1681565b60355490565b6000610526848484610b34565b6105b6846105326109e9565b6105b1856040518060600160405280602881526020016112296028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526034602052604081209061057d6109e9565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002054919063ffffffff610d1216565b6109ed565b5060019392505050565b60385460ff1690565b60005460ff1690565b60006104e96105df6109e9565b846105b185603460006105f06109e9565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61096e16565b61063d8282610dc3565b5050565b600090565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6106b58261067a6109e9565b6105b1846040518060600160405280602e8152602001611191602e91396106a8886106a36109e9565b6107cd565b919063ffffffff610d1216565b61063d8282610f02565b60378054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104ca5780601f1061049f576101008083540402835291602001916104ca565b60006104e961074b6109e9565b846105b1856040518060600160405280602581526020016112e960259139603460006107756109e9565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610d1216565b60006104e96107c66109e9565b8484610b34565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b600054610100900460ff168061081e575061081e611058565b8061082c575060005460ff16155b610881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611251602e913960400191505060405180910390fd5b600054610100900460ff161580156108e757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b82516108fa9060369060208601906110d5565b50815161090e9060379060208501906110d5565b50603880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166012179055801561096957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b6000828201838110156109e257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610a59576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806112c56024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ac5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806111e16022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260346020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806112a06025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061116e6023913960400191505060405180910390fd5b610c17838383610969565b610c67816040518060600160405280602681526020016112036026913973ffffffffffffffffffffffffffffffffffffffff8616600090815260336020526040902054919063ffffffff610d1216565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152603360205260408082209390935590841681522054610ca9908263ffffffff61096e16565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526033602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610dbb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d80578181015183820152602001610d68565b50505050905090810190601f168015610dad5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b73ffffffffffffffffffffffffffffffffffffffff8216610e4557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610e5160008383610969565b603554610e64908263ffffffff61096e16565b60355573ffffffffffffffffffffffffffffffffffffffff8216600090815260336020526040902054610e9d908263ffffffff61096e16565b73ffffffffffffffffffffffffffffffffffffffff831660008181526033602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610f6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061127f6021913960400191505060405180910390fd5b610f7a82600083610969565b610fca816040518060600160405280602281526020016111bf6022913973ffffffffffffffffffffffffffffffffffffffff8516600090815260336020526040902054919063ffffffff610d1216565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260336020526040902055603554611003908263ffffffff61105e16565b60355560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b303b1590565b6000828211156110cf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061111657805160ff1916838001178555611143565b82800160010185558215611143579182015b82811115611143578251825591602001919060010190611128565b5061114f929150611153565b5090565b6104d291905b8082111561114f576000815560010161115956fe45524332303a207472616e7366657220746f20746865207a65726f2061646472657373446566696369656e6379546f6b656e3a204275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656445524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b6522ece1356c78d63395f0c1067e3374ff6cb5b138ce556da632374bc6781c364736f6c634300060a0033436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564";
