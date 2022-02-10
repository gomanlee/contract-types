/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155BurnableMock,
  ERC1155BurnableMockInterface,
} from "../ERC1155BurnableMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200346c3803806200346c8339818101604052810190620000379190620002ba565b8062000049816200005160201b60201c565b505062000370565b8060029080519060200190620000699291906200006d565b5050565b8280546200007b906200033a565b90600052602060002090601f0160209004810192826200009f5760008555620000eb565b82601f10620000ba57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000ea578251825591602001919060010190620000cd565b5b509050620000fa9190620000fe565b5090565b5b8082111562000119576000816000905550600101620000ff565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000186826200013b565b810181811067ffffffffffffffff82111715620001a857620001a76200014c565b5b80604052505050565b6000620001bd6200011d565b9050620001cb82826200017b565b919050565b600067ffffffffffffffff821115620001ee57620001ed6200014c565b5b620001f9826200013b565b9050602081019050919050565b60005b838110156200022657808201518184015260208101905062000209565b8381111562000236576000848401525b50505050565b6000620002536200024d84620001d0565b620001b1565b90508281526020810184848401111562000272576200027162000136565b5b6200027f84828562000206565b509392505050565b600082601f8301126200029f576200029e62000131565b5b8151620002b18482602086016200023c565b91505092915050565b600060208284031215620002d357620002d262000127565b5b600082015167ffffffffffffffff811115620002f457620002f36200012c565b5b620003028482850162000287565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035357607f821691505b602082108114156200036a57620003696200030b565b5b50919050565b6130ec80620003806000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c80636b20c454116100715780636b20c45414610189578063731133e9146101a5578063a22cb465146101c1578063e985e9c5146101dd578063f242432a1461020d578063f5298aca14610229576100a8565b8062fdd58e146100ad57806301ffc9a7146100dd5780630e89341c1461010d5780632eb2c2d61461013d5780634e1273f414610159575b600080fd5b6100c760048036038101906100c29190611bc9565b610245565b6040516100d49190611c18565b60405180910390f35b6100f760048036038101906100f29190611c8b565b61030e565b6040516101049190611cd3565b60405180910390f35b61012760048036038101906101229190611cee565b6103f0565b6040516101349190611db4565b60405180910390f35b61015760048036038101906101529190611fd3565b610484565b005b610173600480360381019061016e9190612165565b610525565b604051610180919061229b565b60405180910390f35b6101a3600480360381019061019e91906122bd565b61063e565b005b6101bf60048036038101906101ba9190612348565b6106db565b005b6101db60048036038101906101d691906123f7565b6106ed565b005b6101f760048036038101906101f29190612437565b610703565b6040516102049190611cd3565b60405180910390f35b61022760048036038101906102229190612477565b610797565b005b610243600480360381019061023e919061250e565b610838565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad906125d3565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d957507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e957506103e8826108d5565b5b9050919050565b6060600280546103ff90612622565b80601f016020809104026020016040519081016040528092919081815260200182805461042b90612622565b80156104785780601f1061044d57610100808354040283529160200191610478565b820191906000526020600020905b81548152906001019060200180831161045b57829003601f168201915b50505050509050919050565b61048c61093f565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806104d257506104d1856104cc61093f565b610703565b5b610511576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610508906126c6565b60405180910390fd5b61051e8585858585610947565b5050505050565b6060815183511461056b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056290612758565b60405180910390fd5b6000835167ffffffffffffffff81111561058857610587611ddb565b5b6040519080825280602002602001820160405280156105b65781602001602082028036833780820191505090505b50905060005b8451811015610633576106038582815181106105db576105da612778565b5b60200260200101518583815181106105f6576105f5612778565b5b6020026020010151610245565b82828151811061061657610615612778565b5b6020026020010181815250508061062c906127d6565b90506105bc565b508091505092915050565b61064661093f565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061068c575061068b8361068661093f565b610703565b5b6106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c290612891565b60405180910390fd5b6106d6838383610c5b565b505050565b6106e784848484610f0c565b50505050565b6106ff6106f861093f565b83836110a2565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61079f61093f565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806107e557506107e4856107df61093f565b610703565b5b610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081b90612891565b60405180910390fd5b610831858585858561120f565b5050505050565b61084061093f565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16148061088657506108858361088061093f565b610703565b5b6108c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bc90612891565b60405180910390fd5b6108d0838383611491565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b815183511461098b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098290612923565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156109fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f2906129b5565b60405180910390fd5b6000610a0561093f565b9050610a158187878787876116ae565b60005b8451811015610bc6576000858281518110610a3657610a35612778565b5b602002602001015190506000858381518110610a5557610a54612778565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aed90612a47565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bab9190612a67565b9250508190555050505080610bbf906127d6565b9050610a18565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610c3d929190612abd565b60405180910390a4610c538187878787876116b6565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc290612b66565b60405180910390fd5b8051825114610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0690612923565b60405180910390fd5b6000610d1961093f565b9050610d39818560008686604051806020016040528060008152506116ae565b60005b8351811015610e86576000848281518110610d5a57610d59612778565b5b602002602001015190506000848381518110610d7957610d78612778565b5b60200260200101519050600080600084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1190612bf8565b60405180910390fd5b81810360008085815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050508080610e7e906127d6565b915050610d3c565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610efe929190612abd565b60405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610f7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7390612c8a565b60405180910390fd5b6000610f8661093f565b9050610fa781600087610f988861189d565b610fa18861189d565b876116ae565b8260008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110069190612a67565b925050819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051611084929190612caa565b60405180910390a461109b81600087878787611917565b5050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611111576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110890612d45565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112029190611cd3565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561127f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611276906129b5565b60405180910390fd5b600061128961093f565b90506112a981878761129a8861189d565b6112a38861189d565b876116ae565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015611340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133790612a47565b60405180910390fd5b83810360008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113f59190612a67565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051611472929190612caa565b60405180910390a4611488828888888888611917565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f890612b66565b60405180910390fd5b600061150b61093f565b905061153b8185600061151d8761189d565b6115268761189d565b604051806020016040528060008152506116ae565b600080600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156115d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c990612bf8565b60405180910390fd5b82810360008086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62878760405161169f929190612caa565b60405180910390a45050505050565b505050505050565b6116d58473ffffffffffffffffffffffffffffffffffffffff16611afe565b15611895578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161171b959493929190612dc9565b602060405180830381600087803b15801561173557600080fd5b505af192505050801561176657506040513d601f19601f820116820180604052508101906117639190612e46565b60015b61180c57611772612e80565b806308c379a014156117cf5750611787612ea2565b8061179257506117d1565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c69190611db4565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180390612faa565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188a9061303c565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156118bc576118bb611ddb565b5b6040519080825280602002602001820160405280156118ea5781602001602082028036833780820191505090505b509050828160008151811061190257611901612778565b5b60200260200101818152505080915050919050565b6119368473ffffffffffffffffffffffffffffffffffffffff16611afe565b15611af6578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161197c95949392919061305c565b602060405180830381600087803b15801561199657600080fd5b505af19250505080156119c757506040513d601f19601f820116820180604052508101906119c49190612e46565b60015b611a6d576119d3612e80565b806308c379a01415611a3057506119e8612ea2565b806119f35750611a32565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a279190611db4565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a6490612faa565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611af4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aeb9061303c565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b6082611b35565b9050919050565b611b7081611b55565b8114611b7b57600080fd5b50565b600081359050611b8d81611b67565b92915050565b6000819050919050565b611ba681611b93565b8114611bb157600080fd5b50565b600081359050611bc381611b9d565b92915050565b60008060408385031215611be057611bdf611b2b565b5b6000611bee85828601611b7e565b9250506020611bff85828601611bb4565b9150509250929050565b611c1281611b93565b82525050565b6000602082019050611c2d6000830184611c09565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c6881611c33565b8114611c7357600080fd5b50565b600081359050611c8581611c5f565b92915050565b600060208284031215611ca157611ca0611b2b565b5b6000611caf84828501611c76565b91505092915050565b60008115159050919050565b611ccd81611cb8565b82525050565b6000602082019050611ce86000830184611cc4565b92915050565b600060208284031215611d0457611d03611b2b565b5b6000611d1284828501611bb4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d55578082015181840152602081019050611d3a565b83811115611d64576000848401525b50505050565b6000601f19601f8301169050919050565b6000611d8682611d1b565b611d908185611d26565b9350611da0818560208601611d37565b611da981611d6a565b840191505092915050565b60006020820190508181036000830152611dce8184611d7b565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e1382611d6a565b810181811067ffffffffffffffff82111715611e3257611e31611ddb565b5b80604052505050565b6000611e45611b21565b9050611e518282611e0a565b919050565b600067ffffffffffffffff821115611e7157611e70611ddb565b5b602082029050602081019050919050565b600080fd5b6000611e9a611e9584611e56565b611e3b565b90508083825260208201905060208402830185811115611ebd57611ebc611e82565b5b835b81811015611ee65780611ed28882611bb4565b845260208401935050602081019050611ebf565b5050509392505050565b600082601f830112611f0557611f04611dd6565b5b8135611f15848260208601611e87565b91505092915050565b600080fd5b600067ffffffffffffffff821115611f3e57611f3d611ddb565b5b611f4782611d6a565b9050602081019050919050565b82818337600083830152505050565b6000611f76611f7184611f23565b611e3b565b905082815260208101848484011115611f9257611f91611f1e565b5b611f9d848285611f54565b509392505050565b600082601f830112611fba57611fb9611dd6565b5b8135611fca848260208601611f63565b91505092915050565b600080600080600060a08688031215611fef57611fee611b2b565b5b6000611ffd88828901611b7e565b955050602061200e88828901611b7e565b945050604086013567ffffffffffffffff81111561202f5761202e611b30565b5b61203b88828901611ef0565b935050606086013567ffffffffffffffff81111561205c5761205b611b30565b5b61206888828901611ef0565b925050608086013567ffffffffffffffff81111561208957612088611b30565b5b61209588828901611fa5565b9150509295509295909350565b600067ffffffffffffffff8211156120bd576120bc611ddb565b5b602082029050602081019050919050565b60006120e16120dc846120a2565b611e3b565b9050808382526020820190506020840283018581111561210457612103611e82565b5b835b8181101561212d57806121198882611b7e565b845260208401935050602081019050612106565b5050509392505050565b600082601f83011261214c5761214b611dd6565b5b813561215c8482602086016120ce565b91505092915050565b6000806040838503121561217c5761217b611b2b565b5b600083013567ffffffffffffffff81111561219a57612199611b30565b5b6121a685828601612137565b925050602083013567ffffffffffffffff8111156121c7576121c6611b30565b5b6121d385828601611ef0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61221281611b93565b82525050565b60006122248383612209565b60208301905092915050565b6000602082019050919050565b6000612248826121dd565b61225281856121e8565b935061225d836121f9565b8060005b8381101561228e5781516122758882612218565b975061228083612230565b925050600181019050612261565b5085935050505092915050565b600060208201905081810360008301526122b5818461223d565b905092915050565b6000806000606084860312156122d6576122d5611b2b565b5b60006122e486828701611b7e565b935050602084013567ffffffffffffffff81111561230557612304611b30565b5b61231186828701611ef0565b925050604084013567ffffffffffffffff81111561233257612331611b30565b5b61233e86828701611ef0565b9150509250925092565b6000806000806080858703121561236257612361611b2b565b5b600061237087828801611b7e565b945050602061238187828801611bb4565b935050604061239287828801611bb4565b925050606085013567ffffffffffffffff8111156123b3576123b2611b30565b5b6123bf87828801611fa5565b91505092959194509250565b6123d481611cb8565b81146123df57600080fd5b50565b6000813590506123f1816123cb565b92915050565b6000806040838503121561240e5761240d611b2b565b5b600061241c85828601611b7e565b925050602061242d858286016123e2565b9150509250929050565b6000806040838503121561244e5761244d611b2b565b5b600061245c85828601611b7e565b925050602061246d85828601611b7e565b9150509250929050565b600080600080600060a0868803121561249357612492611b2b565b5b60006124a188828901611b7e565b95505060206124b288828901611b7e565b94505060406124c388828901611bb4565b93505060606124d488828901611bb4565b925050608086013567ffffffffffffffff8111156124f5576124f4611b30565b5b61250188828901611fa5565b9150509295509295909350565b60008060006060848603121561252757612526611b2b565b5b600061253586828701611b7e565b935050602061254686828701611bb4565b925050604061255786828701611bb4565b9150509250925092565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b60006125bd602b83611d26565b91506125c882612561565b604082019050919050565b600060208201905081810360008301526125ec816125b0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061263a57607f821691505b6020821081141561264e5761264d6125f3565b5b50919050565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b60006126b0603283611d26565b91506126bb82612654565b604082019050919050565b600060208201905081810360008301526126df816126a3565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b6000612742602983611d26565b915061274d826126e6565b604082019050919050565b6000602082019050818103600083015261277181612735565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006127e182611b93565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612814576128136127a7565b5b600182019050919050565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b600061287b602983611d26565b91506128868261281f565b604082019050919050565b600060208201905081810360008301526128aa8161286e565b9050919050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600061290d602883611d26565b9150612918826128b1565b604082019050919050565b6000602082019050818103600083015261293c81612900565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061299f602583611d26565b91506129aa82612943565b604082019050919050565b600060208201905081810360008301526129ce81612992565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b6000612a31602a83611d26565b9150612a3c826129d5565b604082019050919050565b60006020820190508181036000830152612a6081612a24565b9050919050565b6000612a7282611b93565b9150612a7d83611b93565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612ab257612ab16127a7565b5b828201905092915050565b60006040820190508181036000830152612ad7818561223d565b90508181036020830152612aeb818461223d565b90509392505050565b7f455243313135353a206275726e2066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612b50602383611d26565b9150612b5b82612af4565b604082019050919050565b60006020820190508181036000830152612b7f81612b43565b9050919050565b7f455243313135353a206275726e20616d6f756e7420657863656564732062616c60008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b6000612be2602483611d26565b9150612bed82612b86565b604082019050919050565b60006020820190508181036000830152612c1181612bd5565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000612c74602183611d26565b9150612c7f82612c18565b604082019050919050565b60006020820190508181036000830152612ca381612c67565b9050919050565b6000604082019050612cbf6000830185611c09565b612ccc6020830184611c09565b9392505050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b6000612d2f602983611d26565b9150612d3a82612cd3565b604082019050919050565b60006020820190508181036000830152612d5e81612d22565b9050919050565b612d6e81611b55565b82525050565b600081519050919050565b600082825260208201905092915050565b6000612d9b82612d74565b612da58185612d7f565b9350612db5818560208601611d37565b612dbe81611d6a565b840191505092915050565b600060a082019050612dde6000830188612d65565b612deb6020830187612d65565b8181036040830152612dfd818661223d565b90508181036060830152612e11818561223d565b90508181036080830152612e258184612d90565b90509695505050505050565b600081519050612e4081611c5f565b92915050565b600060208284031215612e5c57612e5b611b2b565b5b6000612e6a84828501612e31565b91505092915050565b60008160e01c9050919050565b600060033d1115612e9f5760046000803e612e9c600051612e73565b90505b90565b600060443d1015612eb257612f35565b612eba611b21565b60043d036004823e80513d602482011167ffffffffffffffff82111715612ee2575050612f35565b808201805167ffffffffffffffff811115612f005750505050612f35565b80602083010160043d038501811115612f1d575050505050612f35565b612f2c82602001850186611e0a565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000612f94603483611d26565b9150612f9f82612f38565b604082019050919050565b60006020820190508181036000830152612fc381612f87565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b6000613026602883611d26565b915061303182612fca565b604082019050919050565b6000602082019050818103600083015261305581613019565b9050919050565b600060a0820190506130716000830188612d65565b61307e6020830187612d65565b61308b6040830186611c09565b6130986060830185611c09565b81810360808301526130aa8184612d90565b9050969550505050505056fea26469706673582212201d6bb566094bebf35921d212a65c560f2c2d35d5bdb44857e2ad8c86fdf379bb64736f6c63430008090033";

type ERC1155BurnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BurnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155BurnableMock__factory extends ContractFactory {
  constructor(...args: ERC1155BurnableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC1155BurnableMock";
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155BurnableMock> {
    return super.deploy(uri, overrides || {}) as Promise<ERC1155BurnableMock>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): ERC1155BurnableMock {
    return super.attach(address) as ERC1155BurnableMock;
  }
  connect(signer: Signer): ERC1155BurnableMock__factory {
    return super.connect(signer) as ERC1155BurnableMock__factory;
  }
  static readonly contractName: "ERC1155BurnableMock";
  public readonly contractName: "ERC1155BurnableMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BurnableMockInterface {
    return new utils.Interface(_abi) as ERC1155BurnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC1155BurnableMock;
  }
}
