"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILiquidator2__factory = void 0;
var ethers_1 = require("ethers");
var ILiquidator2__factory = /** @class */ (function () {
    function ILiquidator2__factory() {
    }
    ILiquidator2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ILiquidator2__factory;
}());
exports.ILiquidator2__factory = ILiquidator2__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ILoanToken2Deprecated",
                name: "loan",
                type: "address",
            },
        ],
        name: "legacyLiquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IDebtToken[]",
                name: "debts",
                type: "address[]",
            },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];