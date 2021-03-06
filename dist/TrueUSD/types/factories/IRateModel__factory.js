"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRateModel__factory = void 0;
var ethers_1 = require("ethers");
var IRateModel__factory = /** @class */ (function () {
    function IRateModel__factory() {
    }
    IRateModel__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IRateModel__factory;
}());
exports.IRateModel__factory = IRateModel__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "maxBorrowerLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "stakedTru",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalBorrowed",
                type: "uint256",
            },
        ],
        name: "borrowLimit",
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
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
        ],
        name: "borrowLimitAdjustment",
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
                internalType: "uint256",
                name: "partialRate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "__creditScoreAdjustmentRate",
                type: "uint256",
            },
        ],
        name: "combinedRate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
        ],
        name: "creditScoreAdjustmentRate",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "stakedAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "borrowedAmount",
                type: "uint256",
            },
        ],
        name: "effectiveScore",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "term",
                type: "uint256",
            },
        ],
        name: "fixedTermLoanAdjustment",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "maxBorrowerLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "stakedTru",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalBorrowed",
                type: "uint256",
            },
        ],
        name: "isOverLimit",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "afterAmountLent",
                type: "uint256",
            },
        ],
        name: "poolBasicRate",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "score",
                type: "uint8",
            },
            {
                internalType: "uint256",
                name: "afterAmountLent",
                type: "uint256",
            },
        ],
        name: "rate",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
        ],
        name: "securedRate",
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
                internalType: "contract ITrueFiPool2",
                name: "pool",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "afterAmountLent",
                type: "uint256",
            },
        ],
        name: "utilizationAdjustmentRate",
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
