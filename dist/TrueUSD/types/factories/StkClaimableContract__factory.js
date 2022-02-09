"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StkClaimableContract__factory = void 0;
var ethers_1 = require("ethers");
var StkClaimableContract__factory = /** @class */ (function (_super) {
    __extends(StkClaimableContract__factory, _super);
    function StkClaimableContract__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    StkClaimableContract__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    StkClaimableContract__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    StkClaimableContract__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    StkClaimableContract__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    StkClaimableContract__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return StkClaimableContract__factory;
}(ethers_1.ContractFactory));
exports.StkClaimableContract__factory = StkClaimableContract__factory;
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "balanceOf",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        name: "checkpoints",
        outputs: [
            {
                internalType: "uint32",
                name: "fromBlock",
                type: "uint32",
            },
            {
                internalType: "uint96",
                name: "votes",
                type: "uint96",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "delegates",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "initalized",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "numCheckpoints",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
var _bytecode = "0x608060405234801561001057600080fd5b50600580546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36105d5806100606000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80637ecebe0011610081578063e30c39781161005b578063e30c39781461026a578063f1127ed814610272578063f2fde38b146102de576100d4565b80637ecebe00146101f45780638da5cb5b14610227578063dd62ed3e1461022f576100d4565b80635be1a091116100b25780635be1a091146101595780636fcfff451461017557806370a08231146101c1576100d4565b806318160ddd146100d95780634e71e0c8146100f3578063587cde1e146100fd575b600080fd5b6100e1610311565b60408051918252519081900360200190f35b6100fb610317565b005b6101306004803603602081101561011357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166103d5565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101616103fd565b604080519115158252519081900360200190f35b6101a86004803603602081101561018b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610406565b6040805163ffffffff9092168252519081900360200190f35b6100e1600480360360208110156101d757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661041e565b6100e16004803603602081101561020a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610430565b610130610442565b6100e16004803603604081101561024557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661045e565b61013061047b565b6102b16004803603604081101561028857600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610497565b6040805163ffffffff90931683526bffffffffffffffffffffffff90911660208301528051918290030190f35b6100fb600480360360208110156102f457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104d2565b60015481565b60065473ffffffffffffffffffffffffffffffffffffffff16331461033b57600080fd5b60065460055460405173ffffffffffffffffffffffffffffffffffffffff92831692839216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600680549091169055565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60005460ff1681565b60096020526000908152604090205463ffffffff1681565b60026020526000908152604090205481565b600a6020526000908152604090205481565b60055473ffffffffffffffffffffffffffffffffffffffff1690565b600360209081526000928352604080842090915290825290205481565b60065473ffffffffffffffffffffffffffffffffffffffff1690565b600860209081526000928352604080842090915290825290205463ffffffff81169064010000000090046bffffffffffffffffffffffff1682565b60055473ffffffffffffffffffffffffffffffffffffffff16331461055857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015290519081900360640190fd5b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fea26469706673582212207f53a7c85483f7bd7630cca8b587df5451507151462f7868a79cd051263ecec464736f6c634300060a0033";
