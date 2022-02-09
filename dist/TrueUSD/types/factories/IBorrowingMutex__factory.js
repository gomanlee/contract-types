"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBorrowingMutex__factory = void 0;
var ethers_1 = require("ethers");
var IBorrowingMutex__factory = /** @class */ (function () {
    function IBorrowingMutex__factory() {
    }
    IBorrowingMutex__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IBorrowingMutex__factory;
}());
exports.IBorrowingMutex__factory = IBorrowingMutex__factory;
var _abi = [
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
                name: "borrower",
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