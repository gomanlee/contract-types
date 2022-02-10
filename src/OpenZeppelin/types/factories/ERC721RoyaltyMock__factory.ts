/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721RoyaltyMock,
  ERC721RoyaltyMockInterface,
} from "../ERC721RoyaltyMock";

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
    inputs: [],
    name: "deleteDefaultRoyalty",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setDefaultRoyalty",
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
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setTokenRoyalty",
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
  "0x60806040523480156200001157600080fd5b506040516200363b3803806200363b8339818101604052810190620000379190620002c2565b818181600290805190602001906200005192919062000075565b5080600390805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61327f80620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063a22cb46511610071578063a22cb46514610317578063aa1b103f14610333578063b88d4fde1461033d578063c87b56dd14610359578063e985e9c51461038957610121565b806342966c68146102615780635944c7531461027d5780636352211e1461029957806370a08231146102c957806395d89b41146102f957610121565b8063095ea7b3116100f4578063095ea7b3146101c057806323b872dd146101dc5780632a55205a146101f857806340c10f191461022957806342842e0e1461024557610121565b806301ffc9a71461012657806304634d8d1461015657806306fdde0314610172578063081812fc14610190575b600080fd5b610140600480360381019061013b9190611efe565b6103b9565b60405161014d9190611f46565b60405180910390f35b610170600480360381019061016b9190612003565b6103cb565b005b61017a6103d9565b60405161018791906120dc565b60405180910390f35b6101aa60048036038101906101a59190612134565b61046b565b6040516101b79190612170565b60405180910390f35b6101da60048036038101906101d5919061218b565b6104f0565b005b6101f660048036038101906101f191906121cb565b610608565b005b610212600480360381019061020d919061221e565b610668565b60405161022092919061226d565b60405180910390f35b610243600480360381019061023e919061218b565b610853565b005b61025f600480360381019061025a91906121cb565b610861565b005b61027b60048036038101906102769190612134565b610881565b005b61029760048036038101906102929190612296565b61088d565b005b6102b360048036038101906102ae9190612134565b61089d565b6040516102c09190612170565b60405180910390f35b6102e360048036038101906102de91906122e9565b61094f565b6040516102f09190612316565b60405180910390f35b610301610a07565b60405161030e91906120dc565b60405180910390f35b610331600480360381019061032c919061235d565b610a99565b005b61033b610aaf565b005b610357600480360381019061035291906124d2565b610ab9565b005b610373600480360381019061036e9190612134565b610b1b565b60405161038091906120dc565b60405180910390f35b6103a3600480360381019061039e9190612555565b610bc2565b6040516103b09190611f46565b60405180910390f35b60006103c482610c56565b9050919050565b6103d58282610d38565b5050565b6060600280546103e8906125c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610414906125c4565b80156104615780601f1061043657610100808354040283529160200191610461565b820191906000526020600020905b81548152906001019060200180831161044457829003601f168201915b5050505050905090565b600061047682610ecd565b6104b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ac90612668565b60405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104fb8261089d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561056c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610563906126fa565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058b610f39565b73ffffffffffffffffffffffffffffffffffffffff1614806105ba57506105b9816105b4610f39565b610bc2565b5b6105f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f09061278c565b60405180910390fd5b6106038383610f41565b505050565b610619610613610f39565b82610ffa565b610658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064f9061281e565b60405180910390fd5b6106638383836110d8565b505050565b6000806000600160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156107fe5760006040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff168152505090505b600061080861133f565b6bffffffffffffffffffffffff1682602001516bffffffffffffffffffffffff1686610834919061286d565b61083e91906128f6565b90508160000151819350935050509250929050565b61085d8282611349565b5050565b61087c83838360405180602001604052806000815250610ab9565b505050565b61088a81611523565b50565b610898838383611538565b505050565b6000806004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093d90612999565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b790612a2b565b60405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060038054610a16906125c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a42906125c4565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b5050505050905090565b610aab610aa4610f39565b83836116e0565b5050565b610ab761184d565b565b610aca610ac4610f39565b83610ffa565b610b09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b009061281e565b60405180910390fd5b610b158484848461189a565b50505050565b6060610b2682610ecd565b610b65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5c90612abd565b60405180910390fd5b6000610b6f6118f6565b90506000815111610b8f5760405180602001604052806000815250610bba565b80610b998461190d565b604051602001610baa929190612b19565b6040516020818303038152906040525b915050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610d2157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610d315750610d3082611a6e565b5b9050919050565b610d4061133f565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff161115610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590612baf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0590612c1b565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff168152506000808201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055509050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fb48361089d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061100582610ecd565b611044576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103b90612cad565b60405180910390fd5b600061104f8361089d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110be57508373ffffffffffffffffffffffffffffffffffffffff166110a68461046b565b73ffffffffffffffffffffffffffffffffffffffff16145b806110cf57506110ce8185610bc2565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110f88261089d565b73ffffffffffffffffffffffffffffffffffffffff161461114e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114590612d3f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b590612dd1565b60405180910390fd5b6111c9838383611ae8565b6111d4600082610f41565b6001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112249190612df1565b925050819055506001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461127b9190612e25565b92505081905550816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461133a838383611aed565b505050565b6000612710905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b090612ec7565b60405180910390fd5b6113c281610ecd565b15611402576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f990612f33565b60405180910390fd5b61140e60008383611ae8565b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461145e9190612e25565b92505081905550816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461151f60008383611aed565b5050565b61152c81611af2565b61153581611c0f565b50565b61154061133f565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff16111561159e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159590612baf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561160e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160590612f9f565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff168152506001600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561174f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117469061300b565b60405180910390fd5b80600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516118409190611f46565b60405180910390a3505050565b6000806000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050565b6118a58484846110d8565b6118b184848484611c6e565b6118f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e79061309d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611955576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611a69565b600082905060005b60008214611987578080611970906130bd565b915050600a8261198091906128f6565b915061195d565b60008167ffffffffffffffff8111156119a3576119a26123a7565b5b6040519080825280601f01601f1916602001820160405280156119d55781602001600182028036833780820191505090505b5090505b60008514611a62576001826119ee9190612df1565b9150600a856119fd9190613106565b6030611a099190612e25565b60f81b818381518110611a1f57611a1e613137565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611a5b91906128f6565b94506119d9565b8093505050505b919050565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611ae15750611ae082611e05565b5b9050919050565b505050565b505050565b6000611afd8261089d565b9050611b0b81600084611ae8565b611b16600083610f41565b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b669190612df1565b925050819055506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611c0b81600084611aed565b5050565b60016000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505050565b6000611c8f8473ffffffffffffffffffffffffffffffffffffffff16611e6f565b15611df8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611cb8610f39565b8786866040518563ffffffff1660e01b8152600401611cda94939291906131bb565b602060405180830381600087803b158015611cf457600080fd5b505af1925050508015611d2557506040513d601f19601f82011682018060405250810190611d22919061321c565b60015b611da8573d8060008114611d55576040519150601f19603f3d011682016040523d82523d6000602084013e611d5a565b606091505b50600081511415611da0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d979061309d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611dfd565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611edb81611ea6565b8114611ee657600080fd5b50565b600081359050611ef881611ed2565b92915050565b600060208284031215611f1457611f13611e9c565b5b6000611f2284828501611ee9565b91505092915050565b60008115159050919050565b611f4081611f2b565b82525050565b6000602082019050611f5b6000830184611f37565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f8c82611f61565b9050919050565b611f9c81611f81565b8114611fa757600080fd5b50565b600081359050611fb981611f93565b92915050565b60006bffffffffffffffffffffffff82169050919050565b611fe081611fbf565b8114611feb57600080fd5b50565b600081359050611ffd81611fd7565b92915050565b6000806040838503121561201a57612019611e9c565b5b600061202885828601611faa565b925050602061203985828601611fee565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561207d578082015181840152602081019050612062565b8381111561208c576000848401525b50505050565b6000601f19601f8301169050919050565b60006120ae82612043565b6120b8818561204e565b93506120c881856020860161205f565b6120d181612092565b840191505092915050565b600060208201905081810360008301526120f681846120a3565b905092915050565b6000819050919050565b612111816120fe565b811461211c57600080fd5b50565b60008135905061212e81612108565b92915050565b60006020828403121561214a57612149611e9c565b5b60006121588482850161211f565b91505092915050565b61216a81611f81565b82525050565b60006020820190506121856000830184612161565b92915050565b600080604083850312156121a2576121a1611e9c565b5b60006121b085828601611faa565b92505060206121c18582860161211f565b9150509250929050565b6000806000606084860312156121e4576121e3611e9c565b5b60006121f286828701611faa565b935050602061220386828701611faa565b92505060406122148682870161211f565b9150509250925092565b6000806040838503121561223557612234611e9c565b5b60006122438582860161211f565b92505060206122548582860161211f565b9150509250929050565b612267816120fe565b82525050565b60006040820190506122826000830185612161565b61228f602083018461225e565b9392505050565b6000806000606084860312156122af576122ae611e9c565b5b60006122bd8682870161211f565b93505060206122ce86828701611faa565b92505060406122df86828701611fee565b9150509250925092565b6000602082840312156122ff576122fe611e9c565b5b600061230d84828501611faa565b91505092915050565b600060208201905061232b600083018461225e565b92915050565b61233a81611f2b565b811461234557600080fd5b50565b60008135905061235781612331565b92915050565b6000806040838503121561237457612373611e9c565b5b600061238285828601611faa565b925050602061239385828601612348565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6123df82612092565b810181811067ffffffffffffffff821117156123fe576123fd6123a7565b5b80604052505050565b6000612411611e92565b905061241d82826123d6565b919050565b600067ffffffffffffffff82111561243d5761243c6123a7565b5b61244682612092565b9050602081019050919050565b82818337600083830152505050565b600061247561247084612422565b612407565b905082815260208101848484011115612491576124906123a2565b5b61249c848285612453565b509392505050565b600082601f8301126124b9576124b861239d565b5b81356124c9848260208601612462565b91505092915050565b600080600080608085870312156124ec576124eb611e9c565b5b60006124fa87828801611faa565b945050602061250b87828801611faa565b935050604061251c8782880161211f565b925050606085013567ffffffffffffffff81111561253d5761253c611ea1565b5b612549878288016124a4565b91505092959194509250565b6000806040838503121561256c5761256b611e9c565b5b600061257a85828601611faa565b925050602061258b85828601611faa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125dc57607f821691505b602082108114156125f0576125ef612595565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612652602c8361204e565b915061265d826125f6565b604082019050919050565b6000602082019050818103600083015261268181612645565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006126e460218361204e565b91506126ef82612688565b604082019050919050565b60006020820190508181036000830152612713816126d7565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b600061277660388361204e565b91506127818261271a565b604082019050919050565b600060208201905081810360008301526127a581612769565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061280860318361204e565b9150612813826127ac565b604082019050919050565b60006020820190508181036000830152612837816127fb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612878826120fe565b9150612883836120fe565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156128bc576128bb61283e565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612901826120fe565b915061290c836120fe565b92508261291c5761291b6128c7565b5b828204905092915050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061298360298361204e565b915061298e82612927565b604082019050919050565b600060208201905081810360008301526129b281612976565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612a15602a8361204e565b9150612a20826129b9565b604082019050919050565b60006020820190508181036000830152612a4481612a08565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612aa7602f8361204e565b9150612ab282612a4b565b604082019050919050565b60006020820190508181036000830152612ad681612a9a565b9050919050565b600081905092915050565b6000612af382612043565b612afd8185612add565b9350612b0d81856020860161205f565b80840191505092915050565b6000612b258285612ae8565b9150612b318284612ae8565b91508190509392505050565b7f455243323938313a20726f79616c7479206665652077696c6c2065786365656460008201527f2073616c65507269636500000000000000000000000000000000000000000000602082015250565b6000612b99602a8361204e565b9150612ba482612b3d565b604082019050919050565b60006020820190508181036000830152612bc881612b8c565b9050919050565b7f455243323938313a20696e76616c696420726563656976657200000000000000600082015250565b6000612c0560198361204e565b9150612c1082612bcf565b602082019050919050565b60006020820190508181036000830152612c3481612bf8565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612c97602c8361204e565b9150612ca282612c3b565b604082019050919050565b60006020820190508181036000830152612cc681612c8a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612d2960258361204e565b9150612d3482612ccd565b604082019050919050565b60006020820190508181036000830152612d5881612d1c565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612dbb60248361204e565b9150612dc682612d5f565b604082019050919050565b60006020820190508181036000830152612dea81612dae565b9050919050565b6000612dfc826120fe565b9150612e07836120fe565b925082821015612e1a57612e1961283e565b5b828203905092915050565b6000612e30826120fe565b9150612e3b836120fe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e7057612e6f61283e565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612eb160208361204e565b9150612ebc82612e7b565b602082019050919050565b60006020820190508181036000830152612ee081612ea4565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612f1d601c8361204e565b9150612f2882612ee7565b602082019050919050565b60006020820190508181036000830152612f4c81612f10565b9050919050565b7f455243323938313a20496e76616c696420706172616d65746572730000000000600082015250565b6000612f89601b8361204e565b9150612f9482612f53565b602082019050919050565b60006020820190508181036000830152612fb881612f7c565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612ff560198361204e565b915061300082612fbf565b602082019050919050565b6000602082019050818103600083015261302481612fe8565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061308760328361204e565b91506130928261302b565b604082019050919050565b600060208201905081810360008301526130b68161307a565b9050919050565b60006130c8826120fe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156130fb576130fa61283e565b5b600182019050919050565b6000613111826120fe565b915061311c836120fe565b92508261312c5761312b6128c7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061318d82613166565b6131978185613171565b93506131a781856020860161205f565b6131b081612092565b840191505092915050565b60006080820190506131d06000830187612161565b6131dd6020830186612161565b6131ea604083018561225e565b81810360608301526131fc8184613182565b905095945050505050565b60008151905061321681611ed2565b92915050565b60006020828403121561323257613231611e9c565b5b600061324084828501613207565b9150509291505056fea26469706673582212205f96ec165f550640eb5540e728245412859eb88051f269e13f959551ab4bda1864736f6c63430008090033";

type ERC721RoyaltyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721RoyaltyMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721RoyaltyMock__factory extends ContractFactory {
  constructor(...args: ERC721RoyaltyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721RoyaltyMock";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721RoyaltyMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721RoyaltyMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721RoyaltyMock {
    return super.attach(address) as ERC721RoyaltyMock;
  }
  connect(signer: Signer): ERC721RoyaltyMock__factory {
    return super.connect(signer) as ERC721RoyaltyMock__factory;
  }
  static readonly contractName: "ERC721RoyaltyMock";
  public readonly contractName: "ERC721RoyaltyMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RoyaltyMockInterface {
    return new utils.Interface(_abi) as ERC721RoyaltyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721RoyaltyMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721RoyaltyMock;
  }
}
