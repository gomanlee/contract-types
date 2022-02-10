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
exports.MigratableMockV3__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "anotherValue",
                type: "uint256",
            },
        ],
        name: "migrate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "migrate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "x",
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
        name: "y",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b50610454806100206000396000f3fe60806040526004361061004a5760003560e01c80630c55699c1461004f5780633e54bacb1461007a5780638fd3ab8014610096578063a56dfe4a146100a0578063fe4b84df146100cb575b600080fd5b34801561005b57600080fd5b506100646100e7565b60405161007191906102c2565b60405180910390f35b610094600480360381019061008f919061030e565b6100ed565b005b61009e610134565b005b3480156100ac57600080fd5b506100b5610183565b6040516100c291906102c2565b60405180910390f35b6100e560048036038101906100e0919061034e565b610189565b005b60015481565b600260009054906101000a900460ff161561010757600080fd5b81600181905550806003819055506001600260006101000a81548160ff0219169083151502179055505050565b600460009054906101000a900460ff161561014e57600080fd5b60006001549050600354600181905550806003819055506001600460006101000a81548160ff02191690831515021790555050565b60035481565b600060019054906101000a900460ff166101b15760008054906101000a900460ff16156101ba565b6101b9610275565b5b6101f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f0906103fe565b60405180910390fd5b60008060019054906101000a900460ff161590508015610249576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8160018190555080156102715760008060016101000a81548160ff0219169083151502179055505b5050565b600061028030610286565b15905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b6102bc816102a9565b82525050565b60006020820190506102d760008301846102b3565b92915050565b600080fd5b6102eb816102a9565b81146102f657600080fd5b50565b600081359050610308816102e2565b92915050565b60008060408385031215610325576103246102dd565b5b6000610333858286016102f9565b9250506020610344858286016102f9565b9150509250929050565b600060208284031215610364576103636102dd565b5b6000610372848285016102f9565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006103e8602e8361037b565b91506103f38261038c565b604082019050919050565b60006020820190508181036000830152610417816103db565b905091905056fea26469706673582212202caef171721a2e75afbbed9b9a0f44d270b15791efe3bdad523dc7e8fdcf3ce264736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MigratableMockV3__factory = /** @class */ (function (_super) {
    __extends(MigratableMockV3__factory, _super);
    function MigratableMockV3__factory() {
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
        _this.contractName = "MigratableMockV3";
        return _this;
    }
    MigratableMockV3__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MigratableMockV3__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MigratableMockV3__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MigratableMockV3__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MigratableMockV3__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MigratableMockV3__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MigratableMockV3__factory.bytecode = _bytecode;
    MigratableMockV3__factory.abi = _abi;
    return MigratableMockV3__factory;
}(ethers_1.ContractFactory));
exports.MigratableMockV3__factory = MigratableMockV3__factory;
