/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Mock, ERC721MockInterface } from "../ERC721Mock";

const _abi = [
  {
    inputs: [
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
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
    name: "baseURI",
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
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
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
        name: "tokenId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002dca38038062002dca8339818101604052810190620000379190620002c2565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b612a0e80620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063a144819411610071578063a144819414610318578063a22cb46514610334578063b88d4fde14610350578063c87b56dd1461036c578063e985e9c51461039c57610121565b80636352211e146102605780636c0360eb1461029057806370a08231146102ae5780638832e6e3146102de57806395d89b41146102fa57610121565b806323b872dd116100f457806323b872dd146101c057806340c10f19146101dc57806342842e0e146101f857806342966c68146102145780634f558e791461023057610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611922565b6103cc565b60405161014d919061196a565b60405180910390f35b61015e6104ae565b60405161016b9190611a1e565b60405180910390f35b61018e60048036038101906101899190611a76565b610540565b60405161019b9190611ae4565b60405180910390f35b6101be60048036038101906101b99190611b2b565b6105c5565b005b6101da60048036038101906101d59190611b6b565b6106dd565b005b6101f660048036038101906101f19190611b2b565b61073d565b005b610212600480360381019061020d9190611b6b565b61074b565b005b61022e60048036038101906102299190611a76565b61076b565b005b61024a60048036038101906102459190611a76565b610777565b604051610257919061196a565b60405180910390f35b61027a60048036038101906102759190611a76565b610789565b6040516102879190611ae4565b60405180910390f35b61029861083b565b6040516102a59190611a1e565b60405180910390f35b6102c860048036038101906102c39190611bbe565b61084a565b6040516102d59190611bfa565b60405180910390f35b6102f860048036038101906102f39190611d4a565b610902565b005b610302610912565b60405161030f9190611a1e565b60405180910390f35b610332600480360381019061032d9190611b2b565b6109a4565b005b61034e60048036038101906103499190611de5565b6109b2565b005b61036a60048036038101906103659190611e25565b6109c8565b005b61038660048036038101906103819190611a76565b610a2a565b6040516103939190611a1e565b60405180910390f35b6103b660048036038101906103b19190611ea8565b610ad1565b6040516103c3919061196a565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104a757506104a682610b65565b5b9050919050565b6060600080546104bd90611f17565b80601f01602080910402602001604051908101604052809291908181526020018280546104e990611f17565b80156105365780601f1061050b57610100808354040283529160200191610536565b820191906000526020600020905b81548152906001019060200180831161051957829003601f168201915b5050505050905090565b600061054b82610bcf565b61058a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058190611fbb565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d082610789565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610641576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106389061204d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610660610c3b565b73ffffffffffffffffffffffffffffffffffffffff16148061068f575061068e81610689610c3b565b610ad1565b5b6106ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c5906120df565b60405180910390fd5b6106d88383610c43565b505050565b6106ee6106e8610c3b565b82610cfc565b61072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490612171565b60405180910390fd5b610738838383610dda565b505050565b6107478282611041565b5050565b610766838383604051806020016040528060008152506109c8565b505050565b6107748161121b565b50565b600061078282610bcf565b9050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610832576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082990612203565b60405180910390fd5b80915050919050565b6060610845611338565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b290612295565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61090d83838361134f565b505050565b60606001805461092190611f17565b80601f016020809104026020016040519081016040528092919081815260200182805461094d90611f17565b801561099a5780601f1061096f5761010080835404028352916020019161099a565b820191906000526020600020905b81548152906001019060200180831161097d57829003601f168201915b5050505050905090565b6109ae82826113aa565b5050565b6109c46109bd610c3b565b83836113c8565b5050565b6109d96109d3610c3b565b83610cfc565b610a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0f90612171565b60405180910390fd5b610a2484848484611535565b50505050565b6060610a3582610bcf565b610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b90612327565b60405180910390fd5b6000610a7e611338565b90506000815111610a9e5760405180602001604052806000815250610ac9565b80610aa884611591565b604051602001610ab9929190612383565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cb683610789565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d0782610bcf565b610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3d90612419565b60405180910390fd5b6000610d5183610789565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc057508373ffffffffffffffffffffffffffffffffffffffff16610da884610540565b73ffffffffffffffffffffffffffffffffffffffff16145b80610dd15750610dd08185610ad1565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfa82610789565b73ffffffffffffffffffffffffffffffffffffffff1614610e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e47906124ab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ec0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb79061253d565b60405180910390fd5b610ecb8383836116f2565b610ed6600082610c43565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f26919061258c565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7d91906125c0565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461103c8383836116f7565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a890612662565b60405180910390fd5b6110ba81610bcf565b156110fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f1906126ce565b60405180910390fd5b611106600083836116f2565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115691906125c0565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611217600083836116f7565b5050565b600061122682610789565b9050611234816000846116f2565b61123f600083610c43565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461128f919061258c565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611334816000846116f7565b5050565b606060405180602001604052806000815250905090565b6113598383611041565b61136660008484846116fc565b6113a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139c90612760565b60405180910390fd5b505050565b6113c482826040518060200160405280600081525061134f565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142e906127cc565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611528919061196a565b60405180910390a3505050565b611540848484610dda565b61154c848484846116fc565b61158b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158290612760565b60405180910390fd5b50505050565b606060008214156115d9576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116ed565b600082905060005b6000821461160b5780806115f4906127ec565b915050600a826116049190612864565b91506115e1565b60008167ffffffffffffffff81111561162757611626611c1f565b5b6040519080825280601f01601f1916602001820160405280156116595781602001600182028036833780820191505090505b5090505b600085146116e657600182611672919061258c565b9150600a856116819190612895565b603061168d91906125c0565b60f81b8183815181106116a3576116a26128c6565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116df9190612864565b945061165d565b8093505050505b919050565b505050565b505050565b600061171d8473ffffffffffffffffffffffffffffffffffffffff16611893565b15611886578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611746610c3b565b8786866040518563ffffffff1660e01b8152600401611768949392919061294a565b602060405180830381600087803b15801561178257600080fd5b505af19250505080156117b357506040513d601f19601f820116820180604052508101906117b091906129ab565b60015b611836573d80600081146117e3576040519150601f19603f3d011682016040523d82523d6000602084013e6117e8565b606091505b5060008151141561182e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182590612760565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061188b565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118ff816118ca565b811461190a57600080fd5b50565b60008135905061191c816118f6565b92915050565b600060208284031215611938576119376118c0565b5b60006119468482850161190d565b91505092915050565b60008115159050919050565b6119648161194f565b82525050565b600060208201905061197f600083018461195b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119bf5780820151818401526020810190506119a4565b838111156119ce576000848401525b50505050565b6000601f19601f8301169050919050565b60006119f082611985565b6119fa8185611990565b9350611a0a8185602086016119a1565b611a13816119d4565b840191505092915050565b60006020820190508181036000830152611a3881846119e5565b905092915050565b6000819050919050565b611a5381611a40565b8114611a5e57600080fd5b50565b600081359050611a7081611a4a565b92915050565b600060208284031215611a8c57611a8b6118c0565b5b6000611a9a84828501611a61565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ace82611aa3565b9050919050565b611ade81611ac3565b82525050565b6000602082019050611af96000830184611ad5565b92915050565b611b0881611ac3565b8114611b1357600080fd5b50565b600081359050611b2581611aff565b92915050565b60008060408385031215611b4257611b416118c0565b5b6000611b5085828601611b16565b9250506020611b6185828601611a61565b9150509250929050565b600080600060608486031215611b8457611b836118c0565b5b6000611b9286828701611b16565b9350506020611ba386828701611b16565b9250506040611bb486828701611a61565b9150509250925092565b600060208284031215611bd457611bd36118c0565b5b6000611be284828501611b16565b91505092915050565b611bf481611a40565b82525050565b6000602082019050611c0f6000830184611beb565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c57826119d4565b810181811067ffffffffffffffff82111715611c7657611c75611c1f565b5b80604052505050565b6000611c896118b6565b9050611c958282611c4e565b919050565b600067ffffffffffffffff821115611cb557611cb4611c1f565b5b611cbe826119d4565b9050602081019050919050565b82818337600083830152505050565b6000611ced611ce884611c9a565b611c7f565b905082815260208101848484011115611d0957611d08611c1a565b5b611d14848285611ccb565b509392505050565b600082601f830112611d3157611d30611c15565b5b8135611d41848260208601611cda565b91505092915050565b600080600060608486031215611d6357611d626118c0565b5b6000611d7186828701611b16565b9350506020611d8286828701611a61565b925050604084013567ffffffffffffffff811115611da357611da26118c5565b5b611daf86828701611d1c565b9150509250925092565b611dc28161194f565b8114611dcd57600080fd5b50565b600081359050611ddf81611db9565b92915050565b60008060408385031215611dfc57611dfb6118c0565b5b6000611e0a85828601611b16565b9250506020611e1b85828601611dd0565b9150509250929050565b60008060008060808587031215611e3f57611e3e6118c0565b5b6000611e4d87828801611b16565b9450506020611e5e87828801611b16565b9350506040611e6f87828801611a61565b925050606085013567ffffffffffffffff811115611e9057611e8f6118c5565b5b611e9c87828801611d1c565b91505092959194509250565b60008060408385031215611ebf57611ebe6118c0565b5b6000611ecd85828601611b16565b9250506020611ede85828601611b16565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f2f57607f821691505b60208210811415611f4357611f42611ee8565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611fa5602c83611990565b9150611fb082611f49565b604082019050919050565b60006020820190508181036000830152611fd481611f98565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612037602183611990565b915061204282611fdb565b604082019050919050565b600060208201905081810360008301526120668161202a565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006120c9603883611990565b91506120d48261206d565b604082019050919050565b600060208201905081810360008301526120f8816120bc565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061215b603183611990565b9150612166826120ff565b604082019050919050565b6000602082019050818103600083015261218a8161214e565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b60006121ed602983611990565b91506121f882612191565b604082019050919050565b6000602082019050818103600083015261221c816121e0565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b600061227f602a83611990565b915061228a82612223565b604082019050919050565b600060208201905081810360008301526122ae81612272565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612311602f83611990565b915061231c826122b5565b604082019050919050565b6000602082019050818103600083015261234081612304565b9050919050565b600081905092915050565b600061235d82611985565b6123678185612347565b93506123778185602086016119a1565b80840191505092915050565b600061238f8285612352565b915061239b8284612352565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612403602c83611990565b915061240e826123a7565b604082019050919050565b60006020820190508181036000830152612432816123f6565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612495602583611990565b91506124a082612439565b604082019050919050565b600060208201905081810360008301526124c481612488565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612527602483611990565b9150612532826124cb565b604082019050919050565b600060208201905081810360008301526125568161251a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061259782611a40565b91506125a283611a40565b9250828210156125b5576125b461255d565b5b828203905092915050565b60006125cb82611a40565b91506125d683611a40565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561260b5761260a61255d565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061264c602083611990565b915061265782612616565b602082019050919050565b6000602082019050818103600083015261267b8161263f565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006126b8601c83611990565b91506126c382612682565b602082019050919050565b600060208201905081810360008301526126e7816126ab565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061274a603283611990565b9150612755826126ee565b604082019050919050565b600060208201905081810360008301526127798161273d565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006127b6601983611990565b91506127c182612780565b602082019050919050565b600060208201905081810360008301526127e5816127a9565b9050919050565b60006127f782611a40565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561282a5761282961255d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061286f82611a40565b915061287a83611a40565b92508261288a57612889612835565b5b828204905092915050565b60006128a082611a40565b91506128ab83611a40565b9250826128bb576128ba612835565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061291c826128f5565b6129268185612900565b93506129368185602086016119a1565b61293f816119d4565b840191505092915050565b600060808201905061295f6000830187611ad5565b61296c6020830186611ad5565b6129796040830185611beb565b818103606083015261298b8184612911565b905095945050505050565b6000815190506129a5816118f6565b92915050565b6000602082840312156129c1576129c06118c0565b5b60006129cf84828501612996565b9150509291505056fea2646970667358221220f873577f5c80a3315c2394a4c52bdc2d72a3fd7b0b252083cecb3520ce318da464736f6c63430008090033";

type ERC721MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mock__factory extends ContractFactory {
  constructor(...args: ERC721MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Mock";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC721Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }
  static readonly contractName: "ERC721Mock";
  public readonly contractName: "ERC721Mock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MockInterface {
    return new utils.Interface(_abi) as ERC721MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}
