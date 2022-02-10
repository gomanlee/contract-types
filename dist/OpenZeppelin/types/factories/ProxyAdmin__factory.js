"use strict";
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
exports.ProxyAdmin__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "changeProxyAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyAdmin",
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
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
        ],
        name: "getProxyImplementation",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
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
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract TransparentUpgradeableProxy",
                name: "proxy",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e938061010d6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461012857806399a88ec414610144578063f2fde38b1461016d578063f3b7dead146101965761007b565b8063204e1c7a14610080578063715018a6146100bd5780637eff275e146100d45780638da5cb5b146100fd575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906108b9565b6101d3565b6040516100b49190610907565b60405180910390f35b3480156100c957600080fd5b506100d2610267565b005b3480156100e057600080fd5b506100fb60048036038101906100f6919061094e565b6102ef565b005b34801561010957600080fd5b506101126103da565b60405161011f9190610907565b60405180910390f35b610142600480360381019061013d9190610ad4565b610403565b005b34801561015057600080fd5b5061016b6004803603810190610166919061094e565b6104f2565b005b34801561017957600080fd5b50610194600480360381019061018f9190610b43565b6105dd565b005b3480156101a257600080fd5b506101bd60048036038101906101b891906108b9565b6106d5565b6040516101ca9190610907565b60405180910390f35b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516101fb90610bc7565b600060405180830381855afa9150503d8060008114610236576040519150601f19603f3d011682016040523d82523d6000602084013e61023b565b606091505b50915091508161024a57600080fd5b8080602001905181019061025e9190610c08565b92505050919050565b61026f610769565b73ffffffffffffffffffffffffffffffffffffffff1661028d6103da565b73ffffffffffffffffffffffffffffffffffffffff16146102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da90610c92565b60405180910390fd5b6102ed6000610771565b565b6102f7610769565b73ffffffffffffffffffffffffffffffffffffffff166103156103da565b73ffffffffffffffffffffffffffffffffffffffff161461036b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036290610c92565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16638f283970826040518263ffffffff1660e01b81526004016103a49190610907565b600060405180830381600087803b1580156103be57600080fd5b505af11580156103d2573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61040b610769565b73ffffffffffffffffffffffffffffffffffffffff166104296103da565b73ffffffffffffffffffffffffffffffffffffffff161461047f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047690610c92565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16634f1ef2863484846040518463ffffffff1660e01b81526004016104bb929190610d3a565b6000604051808303818588803b1580156104d457600080fd5b505af11580156104e8573d6000803e3d6000fd5b5050505050505050565b6104fa610769565b73ffffffffffffffffffffffffffffffffffffffff166105186103da565b73ffffffffffffffffffffffffffffffffffffffff161461056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590610c92565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16633659cfe6826040518263ffffffff1660e01b81526004016105a79190610907565b600060405180830381600087803b1580156105c157600080fd5b505af11580156105d5573d6000803e3d6000fd5b505050505050565b6105e5610769565b73ffffffffffffffffffffffffffffffffffffffff166106036103da565b73ffffffffffffffffffffffffffffffffffffffff1614610659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065090610c92565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c090610ddc565b60405180910390fd5b6106d281610771565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff166040516106fd90610e48565b600060405180830381855afa9150503d8060008114610738576040519150601f19603f3d011682016040523d82523d6000602084013e61073d565b606091505b50915091508161074c57600080fd5b808060200190518101906107609190610c08565b92505050919050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061087482610849565b9050919050565b600061088682610869565b9050919050565b6108968161087b565b81146108a157600080fd5b50565b6000813590506108b38161088d565b92915050565b6000602082840312156108cf576108ce61083f565b5b60006108dd848285016108a4565b91505092915050565b60006108f182610849565b9050919050565b610901816108e6565b82525050565b600060208201905061091c60008301846108f8565b92915050565b61092b816108e6565b811461093657600080fd5b50565b60008135905061094881610922565b92915050565b600080604083850312156109655761096461083f565b5b6000610973858286016108a4565b925050602061098485828601610939565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6109e182610998565b810181811067ffffffffffffffff82111715610a00576109ff6109a9565b5b80604052505050565b6000610a13610835565b9050610a1f82826109d8565b919050565b600067ffffffffffffffff821115610a3f57610a3e6109a9565b5b610a4882610998565b9050602081019050919050565b82818337600083830152505050565b6000610a77610a7284610a24565b610a09565b905082815260208101848484011115610a9357610a92610993565b5b610a9e848285610a55565b509392505050565b600082601f830112610abb57610aba61098e565b5b8135610acb848260208601610a64565b91505092915050565b600080600060608486031215610aed57610aec61083f565b5b6000610afb868287016108a4565b9350506020610b0c86828701610939565b925050604084013567ffffffffffffffff811115610b2d57610b2c610844565b5b610b3986828701610aa6565b9150509250925092565b600060208284031215610b5957610b5861083f565b5b6000610b6784828501610939565b91505092915050565b600081905092915050565b7f5c60da1b00000000000000000000000000000000000000000000000000000000600082015250565b6000610bb1600483610b70565b9150610bbc82610b7b565b600482019050919050565b6000610bd282610ba4565b9150819050919050565b610be581610869565b8114610bf057600080fd5b50565b600081519050610c0281610bdc565b92915050565b600060208284031215610c1e57610c1d61083f565b5b6000610c2c84828501610bf3565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c7c602083610c35565b9150610c8782610c46565b602082019050919050565b60006020820190508181036000830152610cab81610c6f565b9050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610cec578082015181840152602081019050610cd1565b83811115610cfb576000848401525b50505050565b6000610d0c82610cb2565b610d168185610cbd565b9350610d26818560208601610cce565b610d2f81610998565b840191505092915050565b6000604082019050610d4f60008301856108f8565b8181036020830152610d618184610d01565b90509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610dc6602683610c35565b9150610dd182610d6a565b604082019050919050565b60006020820190508181036000830152610df581610db9565b9050919050565b7ff851a44000000000000000000000000000000000000000000000000000000000600082015250565b6000610e32600483610b70565b9150610e3d82610dfc565b600482019050919050565b6000610e5382610e25565b915081905091905056fea2646970667358221220f8c105714c97f445e512755ea4f465ab2bc854a2175262830a3dbcb998ae8da864736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ProxyAdmin__factory = /** @class */ (function (_super) {
    __extends(ProxyAdmin__factory, _super);
    function ProxyAdmin__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        _this.contractName = "ProxyAdmin";
        return _this;
    }
    ProxyAdmin__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ProxyAdmin__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ProxyAdmin__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ProxyAdmin__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ProxyAdmin__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ProxyAdmin__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ProxyAdmin__factory.bytecode = _bytecode;
    ProxyAdmin__factory.abi = _abi;
    return ProxyAdmin__factory;
}(ethers_1.ContractFactory));
exports.ProxyAdmin__factory = ProxyAdmin__factory;
