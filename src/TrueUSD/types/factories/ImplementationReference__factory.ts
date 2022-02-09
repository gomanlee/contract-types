/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ImplementationReference } from "../ImplementationReference";

export class ImplementationReference__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ImplementationReference> {
    return super.deploy(_implementation, overrides || {}) as Promise<
      ImplementationReference
    >;
  }
  getDeployTransaction(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_implementation, overrides || {});
  }
  attach(address: string): ImplementationReference {
    return super.attach(address) as ImplementationReference;
  }
  connect(signer: Signer): ImplementationReference__factory {
    return super.connect(signer) as ImplementationReference__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ImplementationReference {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ImplementationReference;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "ImplementationChanged",
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
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b506040516108553803806108558339818101604052602081101561003357600080fd5b50516100493361006e602090811b61049617901c565b603580546001600160a01b0319166001600160a01b0392909216919091179055610169565b600054610100900460ff168061009057506100906001600160e01b0361016316565b8061009e575060005460ff16155b6100d95760405162461bcd60e51b815260040180806020018281038252602e815260200180610827602e913960400191505060405180910390fd5b600054610100900460ff16158015610104576000805460ff1961ff0019909116610100171660011790555b603380546001600160a01b0319166001600160a01b0384169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561015f576000805461ff00191690555b5050565b303b1590565b6106af806101786000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100d9578063d784d426146100e1578063e30c397814610114578063f2fde38b1461011c5761007d565b8063392e53cd146100825780634e71e0c81461009e5780635c60da1b146100a8575b600080fd5b61008a61014f565b604080519115158252519081900360200190f35b6100a6610158565b005b6100b0610260565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b061027c565b6100a6600480360360208110156100f757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610298565b6100b06103a2565b6100a66004803603602081101561013257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166103be565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff1633146101c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806106526028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b6102a0610619565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461032957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6035805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f2989b377844ae55f0ca303ad21490d8519f8cf871ad6b5ba3dbec736bb54c63f9181900360200190a150565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b6103c6610619565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461044f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600054610100900460ff16806104af57506104af61061d565b806104bd575060005460ff16155b610512576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610624602e913960400191505060405180910390fd5b600054610100900460ff1615801561057857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561061557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b3390565b303b159056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e6572a26469706673582212203853948606eac18274d162d941fcd1f960cd7c0396489311e273082beea402a764736f6c634300060a0033436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564";
