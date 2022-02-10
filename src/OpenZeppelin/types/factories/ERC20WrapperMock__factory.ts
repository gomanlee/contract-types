/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20WrapperMock,
  ERC20WrapperMockInterface,
} from "../ERC20WrapperMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFor",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "recover",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
        name: "to",
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
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
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
  "0x60a06040523480156200001157600080fd5b506040516200269838038062002698833981810160405281019062000037919062000372565b828282816003908051906020019062000052929190620000ac565b5080600490805190602001906200006b929190620000ac565b5050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050505062000471565b828054620000ba906200043b565b90600052602060002090601f016020900481019282620000de57600085556200012a565b82601f10620000f957805160ff19168380011785556200012a565b828001600101855582156200012a579182015b82811115620001295782518255916020019190600101906200010c565b5b5090506200013991906200013d565b5090565b5b80821115620001585760008160009055506001016200013e565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200019d8262000170565b9050919050565b6000620001b18262000190565b9050919050565b620001c381620001a4565b8114620001cf57600080fd5b50565b600081519050620001e381620001b8565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200023e82620001f3565b810181811067ffffffffffffffff8211171562000260576200025f62000204565b5b80604052505050565b6000620002756200015c565b905062000283828262000233565b919050565b600067ffffffffffffffff821115620002a657620002a562000204565b5b620002b182620001f3565b9050602081019050919050565b60005b83811015620002de578082015181840152602081019050620002c1565b83811115620002ee576000848401525b50505050565b60006200030b620003058462000288565b62000269565b9050828152602081018484840111156200032a5762000329620001ee565b5b62000337848285620002be565b509392505050565b600082601f830112620003575762000356620001e9565b5b815162000369848260208601620002f4565b91505092915050565b6000806000606084860312156200038e576200038d62000166565b5b60006200039e86828701620001d2565b935050602084015167ffffffffffffffff811115620003c257620003c16200016b565b5b620003d0868287016200033f565b925050604084015167ffffffffffffffff811115620003f457620003f36200016b565b5b62000402868287016200033f565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200045457607f821691505b602082108114156200046b576200046a6200040c565b5b50919050565b6080516121f6620004a260003960008181610459015281816104bf015281816105b60152610a2601526121f66000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063313ce5671161009757806395d89b411161006657806395d89b41146102c2578063a457c2d7146102e0578063a9059cbb14610310578063dd62ed3e14610340576100f5565b8063313ce5671461022657806339509351146102445780636f307dc31461027457806370a0823114610292576100f5565b806318160ddd116100d357806318160ddd14610178578063205c28781461019657806323b872dd146101c65780632f4f21e2146101f6576100f5565b806306fdde03146100fa578063095ea7b3146101185780630cd865ec14610148575b600080fd5b610102610370565b60405161010f919061155f565b60405180910390f35b610132600480360381019061012d919061161a565b610402565b60405161013f9190611675565b60405180910390f35b610162600480360381019061015d9190611690565b610425565b60405161016f91906116cc565b60405180910390f35b610180610437565b60405161018d91906116cc565b60405180910390f35b6101b060048036038101906101ab919061161a565b610441565b6040516101bd9190611675565b60405180910390f35b6101e060048036038101906101db91906116e7565b610489565b6040516101ed9190611675565b60405180910390f35b610210600480360381019061020b919061161a565b6104b8565b60405161021d9190611675565b60405180910390f35b61022e610501565b60405161023b9190611756565b60405180910390f35b61025e6004803603810190610259919061161a565b61050a565b60405161026b9190611675565b60405180910390f35b61027c6105b4565b60405161028991906117d0565b60405180910390f35b6102ac60048036038101906102a79190611690565b6105d8565b6040516102b991906116cc565b60405180910390f35b6102ca610620565b6040516102d7919061155f565b60405180910390f35b6102fa60048036038101906102f5919061161a565b6106b2565b6040516103079190611675565b60405180910390f35b61032a6004803603810190610325919061161a565b61079c565b6040516103379190611675565b60405180910390f35b61035a600480360381019061035591906117eb565b6107bf565b60405161036791906116cc565b60405180910390f35b60606003805461037f9061185a565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab9061185a565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d610846565b905061041a81858561084e565b600191505092915050565b600061043082610a19565b9050919050565b6000600254905090565b600061045461044e610846565b83610aec565b61047f7f00000000000000000000000000000000000000000000000000000000000000008484610cc3565b6001905092915050565b600080610494610846565b90506104a1858285610d49565b6104ac858585610dd5565b60019150509392505050565b60006104ed7f00000000000000000000000000000000000000000000000000000000000000006104e6610846565b3085611056565b6104f783836110df565b6001905092915050565b60006012905090565b600080610515610846565b90506105a9818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105a491906118bb565b61084e565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461062f9061185a565b80601f016020809104026020016040519081016040528092919081815260200182805461065b9061185a565b80156106a85780601f1061067d576101008083540402835291602001916106a8565b820191906000526020600020905b81548152906001019060200180831161068b57829003601f168201915b5050505050905090565b6000806106bd610846565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077a90611983565b60405180910390fd5b610790828686840361084e565b60019250505092915050565b6000806107a7610846565b90506107b4818585610dd5565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b590611a15565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590611aa7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a0c91906116cc565b60405180910390a3505050565b600080610a24610437565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a7d9190611ad6565b60206040518083038186803b158015610a9557600080fd5b505afa158015610aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acd9190611b06565b610ad79190611b33565b9050610ae383826110df565b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5390611bd9565b60405180910390fd5b610b688260008361123f565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be590611c6b565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610c459190611b33565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610caa91906116cc565b60405180910390a3610cbe83600084611244565b505050565b610d448363a9059cbb60e01b8484604051602401610ce2929190611c8b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611249565b505050565b6000610d5584846107bf565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610dcf5781811015610dc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db890611d00565b60405180910390fd5b610dce848484840361084e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3c90611d92565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eac90611e24565b60405180910390fd5b610ec083838361123f565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3d90611eb6565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fd991906118bb565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161103d91906116cc565b60405180910390a3611050848484611244565b50505050565b6110d9846323b872dd60e01b85858560405160240161107793929190611ed6565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611249565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561114f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114690611f59565b60405180910390fd5b61115b6000838361123f565b806002600082825461116d91906118bb565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111c291906118bb565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161122791906116cc565b60405180910390a361123b60008383611244565b5050565b505050565b505050565b60006112ab826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113109092919063ffffffff16565b905060008151111561130b57808060200190518101906112cb9190611fa5565b61130a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130190612044565b60405180910390fd5b5b505050565b606061131f8484600085611328565b90509392505050565b60608247101561136d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611364906120d6565b60405180910390fd5b6113768561143c565b6113b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ac90612142565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516113de91906121a9565b60006040518083038185875af1925050503d806000811461141b576040519150601f19603f3d011682016040523d82523d6000602084013e611420565b606091505b509150915061143082828661145f565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561146f578290506114bf565b6000835111156114825782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b6919061155f565b60405180910390fd5b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156115005780820151818401526020810190506114e5565b8381111561150f576000848401525b50505050565b6000601f19601f8301169050919050565b6000611531826114c6565b61153b81856114d1565b935061154b8185602086016114e2565b61155481611515565b840191505092915050565b600060208201905081810360008301526115798184611526565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115b182611586565b9050919050565b6115c1816115a6565b81146115cc57600080fd5b50565b6000813590506115de816115b8565b92915050565b6000819050919050565b6115f7816115e4565b811461160257600080fd5b50565b600081359050611614816115ee565b92915050565b6000806040838503121561163157611630611581565b5b600061163f858286016115cf565b925050602061165085828601611605565b9150509250929050565b60008115159050919050565b61166f8161165a565b82525050565b600060208201905061168a6000830184611666565b92915050565b6000602082840312156116a6576116a5611581565b5b60006116b4848285016115cf565b91505092915050565b6116c6816115e4565b82525050565b60006020820190506116e160008301846116bd565b92915050565b600080600060608486031215611700576116ff611581565b5b600061170e868287016115cf565b935050602061171f868287016115cf565b925050604061173086828701611605565b9150509250925092565b600060ff82169050919050565b6117508161173a565b82525050565b600060208201905061176b6000830184611747565b92915050565b6000819050919050565b600061179661179161178c84611586565b611771565b611586565b9050919050565b60006117a88261177b565b9050919050565b60006117ba8261179d565b9050919050565b6117ca816117af565b82525050565b60006020820190506117e560008301846117c1565b92915050565b6000806040838503121561180257611801611581565b5b6000611810858286016115cf565b9250506020611821858286016115cf565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061187257607f821691505b602082108114156118865761188561182b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118c6826115e4565b91506118d1836115e4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119065761190561188c565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061196d6025836114d1565b915061197882611911565b604082019050919050565b6000602082019050818103600083015261199c81611960565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006119ff6024836114d1565b9150611a0a826119a3565b604082019050919050565b60006020820190508181036000830152611a2e816119f2565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a916022836114d1565b9150611a9c82611a35565b604082019050919050565b60006020820190508181036000830152611ac081611a84565b9050919050565b611ad0816115a6565b82525050565b6000602082019050611aeb6000830184611ac7565b92915050565b600081519050611b00816115ee565b92915050565b600060208284031215611b1c57611b1b611581565b5b6000611b2a84828501611af1565b91505092915050565b6000611b3e826115e4565b9150611b49836115e4565b925082821015611b5c57611b5b61188c565b5b828203905092915050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bc36021836114d1565b9150611bce82611b67565b604082019050919050565b60006020820190508181036000830152611bf281611bb6565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c556022836114d1565b9150611c6082611bf9565b604082019050919050565b60006020820190508181036000830152611c8481611c48565b9050919050565b6000604082019050611ca06000830185611ac7565b611cad60208301846116bd565b9392505050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611cea601d836114d1565b9150611cf582611cb4565b602082019050919050565b60006020820190508181036000830152611d1981611cdd565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611d7c6025836114d1565b9150611d8782611d20565b604082019050919050565b60006020820190508181036000830152611dab81611d6f565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611e0e6023836114d1565b9150611e1982611db2565b604082019050919050565b60006020820190508181036000830152611e3d81611e01565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611ea06026836114d1565b9150611eab82611e44565b604082019050919050565b60006020820190508181036000830152611ecf81611e93565b9050919050565b6000606082019050611eeb6000830186611ac7565b611ef86020830185611ac7565b611f0560408301846116bd565b949350505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611f43601f836114d1565b9150611f4e82611f0d565b602082019050919050565b60006020820190508181036000830152611f7281611f36565b9050919050565b611f828161165a565b8114611f8d57600080fd5b50565b600081519050611f9f81611f79565b92915050565b600060208284031215611fbb57611fba611581565b5b6000611fc984828501611f90565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600061202e602a836114d1565b915061203982611fd2565b604082019050919050565b6000602082019050818103600083015261205d81612021565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006120c06026836114d1565b91506120cb82612064565b604082019050919050565b600060208201905081810360008301526120ef816120b3565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061212c601d836114d1565b9150612137826120f6565b602082019050919050565b6000602082019050818103600083015261215b8161211f565b9050919050565b600081519050919050565b600081905092915050565b600061218382612162565b61218d818561216d565b935061219d8185602086016114e2565b80840191505092915050565b60006121b58284612178565b91508190509291505056fea2646970667358221220ca41296c4c0c6642aa6f3d7debc90272c2efa904dffbf374720bd7e5f86b7da064736f6c63430008090033";

type ERC20WrapperMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20WrapperMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20WrapperMock__factory extends ContractFactory {
  constructor(...args: ERC20WrapperMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20WrapperMock";
  }

  deploy(
    _underlyingToken: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20WrapperMock> {
    return super.deploy(
      _underlyingToken,
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC20WrapperMock>;
  }
  getDeployTransaction(
    _underlyingToken: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _underlyingToken,
      name,
      symbol,
      overrides || {}
    );
  }
  attach(address: string): ERC20WrapperMock {
    return super.attach(address) as ERC20WrapperMock;
  }
  connect(signer: Signer): ERC20WrapperMock__factory {
    return super.connect(signer) as ERC20WrapperMock__factory;
  }
  static readonly contractName: "ERC20WrapperMock";
  public readonly contractName: "ERC20WrapperMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20WrapperMockInterface {
    return new utils.Interface(_abi) as ERC20WrapperMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20WrapperMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20WrapperMock;
  }
}
