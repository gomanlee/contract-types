"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITrueRatingAgencyV2__factory = void 0;
var ethers_1 = require("ethers");
var ITrueRatingAgencyV2__factory = /** @class */ (function () {
    function ITrueRatingAgencyV2__factory() {
    }
    ITrueRatingAgencyV2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ITrueRatingAgencyV2__factory;
}());
exports.ITrueRatingAgencyV2__factory = ITrueRatingAgencyV2__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "voter",
                type: "address",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "getResults",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
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
