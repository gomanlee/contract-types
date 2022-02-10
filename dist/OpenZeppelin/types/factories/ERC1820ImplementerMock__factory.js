"use strict";
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
exports.ERC1820ImplementerMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
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
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "registerInterfaceForAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506102d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063249cb3fa1461003b5780635536e45d1461006b575b600080fd5b61005560048036038101906100509190610230565b610087565b604051610062919061027f565b60405180910390f35b61008560048036038101906100809190610230565b61011d565b005b600080600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166100f3576000801b610115565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b905092915050565b610127828261012b565b5050565b600160008084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080fd5b6000819050919050565b6101af8161019c565b81146101ba57600080fd5b50565b6000813590506101cc816101a6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101fd826101d2565b9050919050565b61020d816101f2565b811461021857600080fd5b50565b60008135905061022a81610204565b92915050565b6000806040838503121561024757610246610197565b5b6000610255858286016101bd565b92505060206102668582860161021b565b9150509250929050565b6102798161019c565b82525050565b60006020820190506102946000830184610270565b9291505056fea2646970667358221220df6b0a863fd6a9c201611ba635968356db1dd8fef4475a187957cd76486e318864736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC1820ImplementerMock__factory = /** @class */ (function (_super) {
    __extends(ERC1820ImplementerMock__factory, _super);
    function ERC1820ImplementerMock__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        _this.contractName = "ERC1820ImplementerMock";
        return _this;
    }
    ERC1820ImplementerMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC1820ImplementerMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC1820ImplementerMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1820ImplementerMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1820ImplementerMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC1820ImplementerMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC1820ImplementerMock__factory.bytecode = _bytecode;
    ERC1820ImplementerMock__factory.abi = _abi;
    return ERC1820ImplementerMock__factory;
}(ethers_1.ContractFactory));
exports.ERC1820ImplementerMock__factory = ERC1820ImplementerMock__factory;