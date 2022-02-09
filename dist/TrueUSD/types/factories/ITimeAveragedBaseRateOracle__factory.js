"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITimeAveragedBaseRateOracle__factory = void 0;
var ethers_1 = require("ethers");
var ITimeAveragedBaseRateOracle__factory = /** @class */ (function () {
    function ITimeAveragedBaseRateOracle__factory() {
    }
    ITimeAveragedBaseRateOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ITimeAveragedBaseRateOracle__factory;
}());
exports.ITimeAveragedBaseRateOracle__factory = ITimeAveragedBaseRateOracle__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint16",
                name: "numberOfValues",
                type: "uint16",
            },
        ],
        name: "calculateAverageAPY",
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
        inputs: [],
        name: "getMonthlyAPY",
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
        inputs: [],
        name: "getWeeklyAPY",
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
        inputs: [],
        name: "getYearlyAPY",
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
