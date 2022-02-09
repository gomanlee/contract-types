"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOwnedUpgradeabilityProxy__factory = void 0;
var ethers_1 = require("ethers");
var IOwnedUpgradeabilityProxy__factory = /** @class */ (function () {
    function IOwnedUpgradeabilityProxy__factory() {
    }
    IOwnedUpgradeabilityProxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IOwnedUpgradeabilityProxy__factory;
}());
exports.IOwnedUpgradeabilityProxy__factory = IOwnedUpgradeabilityProxy__factory;
var _abi = [
    {
        inputs: [],
        name: "claimProxyOwnership",
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
                name: "impl",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingProxyOwner",
        outputs: [
            {
                internalType: "address",
                name: "pendingOwner",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proxyOwner",
        outputs: [
            {
                internalType: "address",
                name: "owner",
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
        name: "transferProxyOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];