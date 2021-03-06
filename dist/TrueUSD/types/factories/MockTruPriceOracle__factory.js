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
exports.MockTruPriceOracle__factory = void 0;
var ethers_1 = require("ethers");
var MockTruPriceOracle__factory = /** @class */ (function (_super) {
    __extends(MockTruPriceOracle__factory, _super);
    function MockTruPriceOracle__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MockTruPriceOracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockTruPriceOracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockTruPriceOracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockTruPriceOracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockTruPriceOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return MockTruPriceOracle__factory;
}(ethers_1.ContractFactory));
exports.MockTruPriceOracle__factory = MockTruPriceOracle__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "truToUsd",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "usdToTru",
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
var _bytecode = "0x608060405234801561001057600080fd5b5060d78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063c94a6f4d146037578063cdb2813b146063575b600080fd5b605160048036036020811015604b57600080fd5b5035607d565b60408051918252519081900360200190f35b605160048036036020811015607757600080fd5b50356091565b600060046402540be40083025b0492915050565b60006402540be40060048302608a56fea26469706673582212208920a3eef7d6b03db3805a046effd0bbaee9bfb3fbe8f647588857c671b73abb64736f6c634300060a0033";
