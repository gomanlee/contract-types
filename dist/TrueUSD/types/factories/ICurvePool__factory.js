"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurvePool__factory = void 0;
var ethers_1 = require("ethers");
var ICurvePool__factory = /** @class */ (function () {
    function ICurvePool__factory() {
    }
    ICurvePool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ICurvePool__factory;
}());
exports.ICurvePool__factory = ICurvePool__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256[4]",
                name: "amounts",
                type: "uint256[4]",
            },
            {
                internalType: "uint256",
                name: "min_mint_amount",
                type: "uint256",
            },
        ],
        name: "add_liquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_token_amount",
                type: "uint256",
            },
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
        ],
        name: "calc_withdraw_one_coin",
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
                internalType: "int128",
                name: "id",
                type: "int128",
            },
        ],
        name: "coins",
        outputs: [
            {
                internalType: "contract IYToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "curve",
        outputs: [
            {
                internalType: "contract ICurve",
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
                name: "_token_amount",
                type: "uint256",
            },
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "min_amount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "donate_dust",
                type: "bool",
            },
        ],
        name: "remove_liquidity_one_coin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
