"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockBorrowingMutex__factory = void 0;
var ethers_1 = require("ethers");
var MockBorrowingMutex__factory = /** @class */ (function (_super) {
    __extends(MockBorrowingMutex__factory, _super);
    function MockBorrowingMutex__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockBorrowingMutex__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockBorrowingMutex__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockBorrowingMutex__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockBorrowingMutex__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockBorrowingMutex__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return MockBorrowingMutex__factory;
}(ethers_1.ContractFactory));
exports.MockBorrowingMutex__factory = MockBorrowingMutex__factory;
var _abi = [
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
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
        ],
        name: "ban",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
        ],
        name: "isBanned",
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
                name: "borrower",
                type: "address",
            },
        ],
        name: "isUnlocked",
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
                name: "borrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "_locker",
                type: "address",
            },
        ],
        name: "lock",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "locker",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "borrower",
                type: "address",
            },
        ],
        name: "unlock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610974806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638da5cb5b11610081578063d71c9c121161005b578063d71c9c121461023f578063e30c397814610272578063f2fde38b1461027a576100d4565b80638da5cb5b146101a857806397c3ccd8146101d957806397f735d51461020c576100d4565b8063392e53cd116100b2578063392e53cd146101905780634e71e0c8146101985780638129fc1c146101a0576100d4565b806317ffe171146100d95780632bbf532a146101165780632f6c493c1461015d575b600080fd5b610114600480360360408110156100ef57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166102ad565b005b6101496004803603602081101561012c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610300565b604080519115158252519081900360200190f35b6101146004803603602081101561017357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661032c565b610149610378565b610114610381565b610114610489565b6101b06105a6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610114600480360360208110156101ef57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105c2565b6101496004803603602081101561022257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610611565b6101b06004803603602081101561025557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661063f565b6101b0610667565b6101146004803603602081101561029057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610683565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260356020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b73ffffffffffffffffffffffffffffffffffffffff908116600090815260356020526040902054161590565b73ffffffffffffffffffffffffffffffffffffffff16600090815260356020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff1633146103f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806109176028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b600054610100900460ff16806104a257506104a261075b565b806104b0575060005460ff16155b610505576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806108e9602e913960400191505060405180910390fd5b600054610100900460ff1615801561056b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61057433610761565b80156105a357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16600090815260356020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001179055565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152603560205260409020541660011490565b60356020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b61068b6108e4565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461071457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b303b1590565b600054610100900460ff168061077a575061077a61075b565b80610788575060005460ff16155b6107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806108e9602e913960400191505060405180910390fd5b600054610100900460ff1615801561084357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a380156108e057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b339056fe436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e6572a2646970667358221220b3c2df74749a97373c8a9fe05bce07a8ca4cf34d40fbfa9204fa68d42b35791264736f6c634300060a0033";
