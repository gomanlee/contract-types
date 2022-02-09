"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurveMinter__factory = void 0;
var ethers_1 = require("ethers");
var ICurveMinter__factory = /** @class */ (function () {
    function ICurveMinter__factory() {
    }
    ICurveMinter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ICurveMinter__factory;
}());
exports.ICurveMinter__factory = ICurveMinter__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "gauge",
                type: "address",
            },
        ],
        name: "mint",
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