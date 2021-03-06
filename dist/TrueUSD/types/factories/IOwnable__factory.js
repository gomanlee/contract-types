"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOwnable__factory = void 0;
var ethers_1 = require("ethers");
var IOwnable__factory = /** @class */ (function () {
    function IOwnable__factory() {
    }
    IOwnable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IOwnable__factory;
}());
exports.IOwnable__factory = IOwnable__factory;
var _abi = [
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
