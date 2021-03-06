"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniswapPair__factory = void 0;
var ethers_1 = require("ethers");
var IUniswapPair__factory = /** @class */ (function () {
    function IUniswapPair__factory() {
    }
    IUniswapPair__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IUniswapPair__factory;
}());
exports.IUniswapPair__factory = IUniswapPair__factory;
var _abi = [
    {
        inputs: [],
        name: "getReserves",
        outputs: [
            {
                internalType: "uint112",
                name: "reserve0",
                type: "uint112",
            },
            {
                internalType: "uint112",
                name: "reserve1",
                type: "uint112",
            },
            {
                internalType: "uint32",
                name: "blockTimestampLast",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
