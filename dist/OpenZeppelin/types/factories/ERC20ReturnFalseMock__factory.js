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
exports.ERC20ReturnFalseMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
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
                name: "",
                type: "address",
            },
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
var _bytecode = "0x608060405234801561001057600080fd5b50610367806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063095ea7b31461005157806323b872dd14610081578063a9059cbb146100b1578063dd62ed3e146100e1575b600080fd5b61006b600480360381019061006691906101fe565b610111565b6040516100789190610259565b60405180910390f35b61009b60048036038101906100969190610274565b610124565b6040516100a89190610259565b60405180910390f35b6100cb60048036038101906100c691906101fe565b610138565b6040516100d89190610259565b60405180910390f35b6100fb60048036038101906100f691906102c7565b61014b565b6040516101089190610316565b60405180910390f35b6000806001819055506000905092915050565b600080600181905550600090509392505050565b6000806001819055506000905092915050565b6000806001541461015b57600080fd5b6000905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101958261016a565b9050919050565b6101a58161018a565b81146101b057600080fd5b50565b6000813590506101c28161019c565b92915050565b6000819050919050565b6101db816101c8565b81146101e657600080fd5b50565b6000813590506101f8816101d2565b92915050565b6000806040838503121561021557610214610165565b5b6000610223858286016101b3565b9250506020610234858286016101e9565b9150509250929050565b60008115159050919050565b6102538161023e565b82525050565b600060208201905061026e600083018461024a565b92915050565b60008060006060848603121561028d5761028c610165565b5b600061029b868287016101b3565b93505060206102ac868287016101b3565b92505060406102bd868287016101e9565b9150509250925092565b600080604083850312156102de576102dd610165565b5b60006102ec858286016101b3565b92505060206102fd858286016101b3565b9150509250929050565b610310816101c8565b82525050565b600060208201905061032b6000830184610307565b9291505056fea2646970667358221220d47291040efacdfa0a01595c88298721bda0ebf2b54c02b1ff6b0a05147121ee64736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC20ReturnFalseMock__factory = /** @class */ (function (_super) {
    __extends(ERC20ReturnFalseMock__factory, _super);
    function ERC20ReturnFalseMock__factory() {
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
        _this.contractName = "ERC20ReturnFalseMock";
        return _this;
    }
    ERC20ReturnFalseMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC20ReturnFalseMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC20ReturnFalseMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC20ReturnFalseMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC20ReturnFalseMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC20ReturnFalseMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC20ReturnFalseMock__factory.bytecode = _bytecode;
    ERC20ReturnFalseMock__factory.abi = _abi;
    return ERC20ReturnFalseMock__factory;
}(ethers_1.ContractFactory));
exports.ERC20ReturnFalseMock__factory = ERC20ReturnFalseMock__factory;
