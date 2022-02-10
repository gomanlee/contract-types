/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20PermitMock,
  ERC20PermitMockInterface,
} from "../ERC20PermitMock";

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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [],
    name: "getChainId",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
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
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c96101409081525060405162002a5438038062002a5483398181016040528101906200005291906200063b565b83806040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525086868160039080519060200190620000a49291906200034e565b508060049080519060200190620000bd9291906200034e565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620001298184846200018f60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050806101208181525050505050505050620001858282620001cb60201b60201c565b5050505062000916565b60008383834630604051602001620001ac95949392919062000728565b6040516020818303038152906040528051906020012090509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200023e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023590620007e6565b60405180910390fd5b62000252600083836200034460201b60201c565b806002600082825462000266919062000837565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002bd919062000837565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000324919062000894565b60405180910390a362000340600083836200034960201b60201c565b5050565b505050565b505050565b8280546200035c90620008e0565b90600052602060002090601f016020900481019282620003805760008555620003cc565b82601f106200039b57805160ff1916838001178555620003cc565b82800160010185558215620003cc579182015b82811115620003cb578251825591602001919060010190620003ae565b5b509050620003db9190620003df565b5090565b5b80821115620003fa576000816000905550600101620003e0565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000467826200041c565b810181811067ffffffffffffffff821117156200048957620004886200042d565b5b80604052505050565b60006200049e620003fe565b9050620004ac82826200045c565b919050565b600067ffffffffffffffff821115620004cf57620004ce6200042d565b5b620004da826200041c565b9050602081019050919050565b60005b8381101562000507578082015181840152602081019050620004ea565b8381111562000517576000848401525b50505050565b6000620005346200052e84620004b1565b62000492565b90508281526020810184848401111562000553576200055262000417565b5b62000560848285620004e7565b509392505050565b600082601f83011262000580576200057f62000412565b5b8151620005928482602086016200051d565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005c8826200059b565b9050919050565b620005da81620005bb565b8114620005e657600080fd5b50565b600081519050620005fa81620005cf565b92915050565b6000819050919050565b620006158162000600565b81146200062157600080fd5b50565b60008151905062000635816200060a565b92915050565b6000806000806080858703121562000658576200065762000408565b5b600085015167ffffffffffffffff8111156200067957620006786200040d565b5b620006878782880162000568565b945050602085015167ffffffffffffffff811115620006ab57620006aa6200040d565b5b620006b98782880162000568565b9350506040620006cc87828801620005e9565b9250506060620006df8782880162000624565b91505092959194509250565b6000819050919050565b6200070081620006eb565b82525050565b620007118162000600565b82525050565b6200072281620005bb565b82525050565b600060a0820190506200073f6000830188620006f5565b6200074e6020830187620006f5565b6200075d6040830186620006f5565b6200076c606083018562000706565b6200077b608083018462000717565b9695505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620007ce601f8362000785565b9150620007db8262000796565b602082019050919050565b600060208201905081810360008301526200080181620007bf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008448262000600565b9150620008518362000600565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000889576200088862000808565b5b828201905092915050565b6000602082019050620008ab600083018462000706565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620008f957607f821691505b6020821081141562000910576200090f620008b1565b5b50919050565b60805160a05160c05160e0516101005161012051610140516120e362000971600039600061078001526000610e9001526000610ed201526000610eb101526000610de601526000610e3c01526000610e6501526120e36000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80633950935111610097578063a457c2d711610066578063a457c2d71461029e578063a9059cbb146102ce578063d505accf146102fe578063dd62ed3e1461031a576100f5565b806339509351146101f057806370a08231146102205780637ecebe001461025057806395d89b4114610280576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce567146101965780633408e470146101b45780633644e515146101d2576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b61010261034a565b60405161010f91906113b5565b60405180910390f35b610132600480360381019061012d9190611470565b6103dc565b60405161013f91906114cb565b60405180910390f35b6101506103ff565b60405161015d91906114f5565b60405180910390f35b610180600480360381019061017b9190611510565b610409565b60405161018d91906114cb565b60405180910390f35b61019e610438565b6040516101ab919061157f565b60405180910390f35b6101bc610441565b6040516101c991906114f5565b60405180910390f35b6101da610449565b6040516101e791906115b3565b60405180910390f35b61020a60048036038101906102059190611470565b610458565b60405161021791906114cb565b60405180910390f35b61023a600480360381019061023591906115ce565b610502565b60405161024791906114f5565b60405180910390f35b61026a600480360381019061026591906115ce565b61054a565b60405161027791906114f5565b60405180910390f35b61028861059a565b60405161029591906113b5565b60405180910390f35b6102b860048036038101906102b39190611470565b61062c565b6040516102c591906114cb565b60405180910390f35b6102e860048036038101906102e39190611470565b610716565b6040516102f591906114cb565b60405180910390f35b61031860048036038101906103139190611653565b610739565b005b610334600480360381019061032f91906116f5565b61087b565b60405161034191906114f5565b60405180910390f35b60606003805461035990611764565b80601f016020809104026020016040519081016040528092919081815260200182805461038590611764565b80156103d25780601f106103a7576101008083540402835291602001916103d2565b820191906000526020600020905b8154815290600101906020018083116103b557829003601f168201915b5050505050905090565b6000806103e7610902565b90506103f481858561090a565b600191505092915050565b6000600254905090565b600080610414610902565b9050610421858285610ad5565b61042c858585610b61565b60019150509392505050565b60006012905090565b600046905090565b6000610453610de2565b905090565b600080610463610902565b90506104f7818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104f291906117c5565b61090a565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610593600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610efc565b9050919050565b6060600480546105a990611764565b80601f01602080910402602001604051908101604052809291908181526020018280546105d590611764565b80156106225780601f106105f757610100808354040283529160200191610622565b820191906000526020600020905b81548152906001019060200180831161060557829003601f168201915b5050505050905090565b600080610637610902565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f49061188d565b60405180910390fd5b61070a828686840361090a565b60019250505092915050565b600080610721610902565b905061072e818585610b61565b600191505092915050565b8342111561077c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610773906118f9565b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000008888886107ab8c610f0a565b896040516020016107c196959493929190611928565b60405160208183030381529060405280519060200120905060006107e482610f68565b905060006107f482878787610f82565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085b906119d5565b60405180910390fd5b61086f8a8a8a61090a565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561097a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097190611a67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e190611af9565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ac891906114f5565b60405180910390a3505050565b6000610ae1848461087b565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b5b5781811015610b4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4490611b65565b60405180910390fd5b610b5a848484840361090a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc890611bf7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3890611c89565b60405180910390fd5b610c4c838383610fad565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc990611d1b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d6591906117c5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dc991906114f5565b60405180910390a3610ddc848484610fb2565b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610e5e57507f000000000000000000000000000000000000000000000000000000000000000046145b15610e8b577f00000000000000000000000000000000000000000000000000000000000000009050610ef9565b610ef67f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610fb7565b90505b90565b600081600001549050919050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610f5781610efc565b9150610f6281610ff1565b50919050565b6000610f7b610f75610de2565b83611007565b9050919050565b6000806000610f938787878761103a565b91509150610fa081611147565b8192505050949350505050565b505050565b505050565b60008383834630604051602001610fd2959493929190611d3b565b6040516020818303038152906040528051906020012090509392505050565b6001816000016000828254019250508190555050565b6000828260405160200161101c929190611e06565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561107557600060039150915061113e565b601b8560ff161415801561108d5750601c8560ff1614155b1561109f57600060049150915061113e565b6000600187878787604051600081526020016040526040516110c49493929190611e3d565b6020604051602081039080840390855afa1580156110e6573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111355760006001925092505061113e565b80600092509250505b94509492505050565b6000600481111561115b5761115a611e82565b5b81600481111561116e5761116d611e82565b5b141561117957611319565b6001600481111561118d5761118c611e82565b5b8160048111156111a05761119f611e82565b5b14156111e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d890611efd565b60405180910390fd5b600260048111156111f5576111f4611e82565b5b81600481111561120857611207611e82565b5b1415611249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124090611f69565b60405180910390fd5b6003600481111561125d5761125c611e82565b5b8160048111156112705761126f611e82565b5b14156112b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a890611ffb565b60405180910390fd5b6004808111156112c4576112c3611e82565b5b8160048111156112d7576112d6611e82565b5b1415611318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130f9061208d565b60405180910390fd5b5b50565b600081519050919050565b600082825260208201905092915050565b60005b8381101561135657808201518184015260208101905061133b565b83811115611365576000848401525b50505050565b6000601f19601f8301169050919050565b60006113878261131c565b6113918185611327565b93506113a1818560208601611338565b6113aa8161136b565b840191505092915050565b600060208201905081810360008301526113cf818461137c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611407826113dc565b9050919050565b611417816113fc565b811461142257600080fd5b50565b6000813590506114348161140e565b92915050565b6000819050919050565b61144d8161143a565b811461145857600080fd5b50565b60008135905061146a81611444565b92915050565b60008060408385031215611487576114866113d7565b5b600061149585828601611425565b92505060206114a68582860161145b565b9150509250929050565b60008115159050919050565b6114c5816114b0565b82525050565b60006020820190506114e060008301846114bc565b92915050565b6114ef8161143a565b82525050565b600060208201905061150a60008301846114e6565b92915050565b600080600060608486031215611529576115286113d7565b5b600061153786828701611425565b935050602061154886828701611425565b92505060406115598682870161145b565b9150509250925092565b600060ff82169050919050565b61157981611563565b82525050565b60006020820190506115946000830184611570565b92915050565b6000819050919050565b6115ad8161159a565b82525050565b60006020820190506115c860008301846115a4565b92915050565b6000602082840312156115e4576115e36113d7565b5b60006115f284828501611425565b91505092915050565b61160481611563565b811461160f57600080fd5b50565b600081359050611621816115fb565b92915050565b6116308161159a565b811461163b57600080fd5b50565b60008135905061164d81611627565b92915050565b600080600080600080600060e0888a031215611672576116716113d7565b5b60006116808a828b01611425565b97505060206116918a828b01611425565b96505060406116a28a828b0161145b565b95505060606116b38a828b0161145b565b94505060806116c48a828b01611612565b93505060a06116d58a828b0161163e565b92505060c06116e68a828b0161163e565b91505092959891949750929550565b6000806040838503121561170c5761170b6113d7565b5b600061171a85828601611425565b925050602061172b85828601611425565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061177c57607f821691505b602082108114156117905761178f611735565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117d08261143a565b91506117db8361143a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118105761180f611796565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611877602583611327565b91506118828261181b565b604082019050919050565b600060208201905081810360008301526118a68161186a565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b60006118e3601d83611327565b91506118ee826118ad565b602082019050919050565b60006020820190508181036000830152611912816118d6565b9050919050565b611922816113fc565b82525050565b600060c08201905061193d60008301896115a4565b61194a6020830188611919565b6119576040830187611919565b61196460608301866114e6565b61197160808301856114e6565b61197e60a08301846114e6565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b60006119bf601e83611327565b91506119ca82611989565b602082019050919050565b600060208201905081810360008301526119ee816119b2565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a51602483611327565b9150611a5c826119f5565b604082019050919050565b60006020820190508181036000830152611a8081611a44565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ae3602283611327565b9150611aee82611a87565b604082019050919050565b60006020820190508181036000830152611b1281611ad6565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611b4f601d83611327565b9150611b5a82611b19565b602082019050919050565b60006020820190508181036000830152611b7e81611b42565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611be1602583611327565b9150611bec82611b85565b604082019050919050565b60006020820190508181036000830152611c1081611bd4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611c73602383611327565b9150611c7e82611c17565b604082019050919050565b60006020820190508181036000830152611ca281611c66565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611d05602683611327565b9150611d1082611ca9565b604082019050919050565b60006020820190508181036000830152611d3481611cf8565b9050919050565b600060a082019050611d5060008301886115a4565b611d5d60208301876115a4565b611d6a60408301866115a4565b611d7760608301856114e6565b611d846080830184611919565b9695505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611dcf600283611d8e565b9150611dda82611d99565b600282019050919050565b6000819050919050565b611e00611dfb8261159a565b611de5565b82525050565b6000611e1182611dc2565b9150611e1d8285611def565b602082019150611e2d8284611def565b6020820191508190509392505050565b6000608082019050611e5260008301876115a4565b611e5f6020830186611570565b611e6c60408301856115a4565b611e7960608301846115a4565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611ee7601883611327565b9150611ef282611eb1565b602082019050919050565b60006020820190508181036000830152611f1681611eda565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611f53601f83611327565b9150611f5e82611f1d565b602082019050919050565b60006020820190508181036000830152611f8281611f46565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611fe5602283611327565b9150611ff082611f89565b604082019050919050565b6000602082019050818103600083015261201481611fd8565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612077602283611327565b91506120828261201b565b604082019050919050565b600060208201905081810360008301526120a68161206a565b905091905056fea2646970667358221220cb7dd25c892d275e3742bc1bbd506199605b5087a0566a26ed87e53a5cec330464736f6c63430008090033";

type ERC20PermitMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PermitMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PermitMock__factory extends ContractFactory {
  constructor(...args: ERC20PermitMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20PermitMock";
  }

  deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ERC20PermitMock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20PermitMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): ERC20PermitMock {
    return super.attach(address) as ERC20PermitMock;
  }
  connect(signer: Signer): ERC20PermitMock__factory {
    return super.connect(signer) as ERC20PermitMock__factory;
  }
  static readonly contractName: "ERC20PermitMock";
  public readonly contractName: "ERC20PermitMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PermitMockInterface {
    return new utils.Interface(_abi) as ERC20PermitMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PermitMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20PermitMock;
  }
}
