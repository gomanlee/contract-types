"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPauseableContract__factory = void 0;
var ethers_1 = require("ethers");
var IPauseableContract__factory = /** @class */ (function () {
    function IPauseableContract__factory() {
    }
    IPauseableContract__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IPauseableContract__factory;
}());
exports.IPauseableContract__factory = IPauseableContract__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "bool",
                name: "pauseStatus",
                type: "bool",
            },
        ],
        name: "setPauseStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
