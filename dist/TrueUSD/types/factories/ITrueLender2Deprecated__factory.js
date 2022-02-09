"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITrueLender2Deprecated__factory = void 0;
var ethers_1 = require("ethers");
var ITrueLender2Deprecated__factory = /** @class */ (function () {
    function ITrueLender2Deprecated__factory() {
    }
    ITrueLender2Deprecated__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ITrueLender2Deprecated__factory;
}());
exports.ITrueLender2Deprecated__factory = ITrueLender2Deprecated__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "numerator",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "denominator",
                type: "uint256",
            },
        ],
        name: "distribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ILoanToken2Deprecated",
                name: "loan",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "transferAllLoanTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
        ],
        name: "value",
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