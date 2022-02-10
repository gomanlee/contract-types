"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC777Recipient__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "operatorData",
                type: "bytes",
            },
        ],
        name: "tokensReceived",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var IERC777Recipient__factory = /** @class */ (function () {
    function IERC777Recipient__factory() {
    }
    IERC777Recipient__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC777Recipient__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC777Recipient__factory.abi = _abi;
    return IERC777Recipient__factory;
}());
exports.IERC777Recipient__factory = IERC777Recipient__factory;