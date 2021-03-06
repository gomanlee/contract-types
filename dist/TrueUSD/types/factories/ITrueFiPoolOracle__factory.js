"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITrueFiPoolOracle__factory = void 0;
var ethers_1 = require("ethers");
var ITrueFiPoolOracle__factory = /** @class */ (function () {
    function ITrueFiPoolOracle__factory() {
    }
    ITrueFiPoolOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ITrueFiPoolOracle__factory;
}());
exports.ITrueFiPoolOracle__factory = ITrueFiPoolOracle__factory;
var _abi = [
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20WithDecimals",
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
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "tokenToTru",
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
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "tokenToUsd",
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
                name: "truAmount",
                type: "uint256",
            },
        ],
        name: "truToToken",
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
