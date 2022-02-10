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
exports.EnumerableUintSetMock__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "result",
                type: "bool",
            },
        ],
        name: "OperationResult",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "add",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "at",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "contains",
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
        inputs: [],
        name: "length",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "remove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "values",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506107b9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631003e2d2146100675780631f7b6d32146100835780634cc82215146100a1578063971217b7146100bd578063c34052e0146100db578063e0886f901461010b575b600080fd5b610081600480360381019061007c9190610555565b61013b565b005b61008b61018e565b6040516100989190610591565b60405180910390f35b6100bb60048036038101906100b69190610555565b61019f565b005b6100c56101f2565b6040516100d2919061066a565b60405180910390f35b6100f560048036038101906100f09190610555565b610203565b60405161010291906106a7565b60405180910390f35b61012560048036038101906101209190610555565b610220565b6040516101329190610591565b60405180910390f35b600061015182600061023d90919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405161018291906106a7565b60405180910390a15050565b600061019a6000610257565b905090565b60006101b582600061026c90919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33816040516101e691906106a7565b60405180910390a15050565b60606101fe6000610286565b905090565b60006102198260006102a790919063ffffffff16565b9050919050565b60006102368260006102c190919063ffffffff16565b9050919050565b600061024f836000018360001b6102db565b905092915050565b60006102658260000161034b565b9050919050565b600061027e836000018360001b61035c565b905092915050565b6060600061029683600001610470565b905060608190508092505050919050565b60006102b9836000018360001b6104cc565b905092915050565b60006102d083600001836104ef565b60001c905092915050565b60006102e783836104cc565b610340578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050610345565b600090505b92915050565b600081600001805490509050919050565b6000808360010160008481526020019081526020016000205490506000811461046457600060018261038e91906106f1565b90506000600186600001805490506103a691906106f1565b90508181146104155760008660000182815481106103c7576103c6610725565b5b90600052602060002001549050808760000184815481106103eb576103ea610725565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061042957610428610754565b5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061046a565b60009150505b92915050565b6060816000018054806020026020016040519081016040528092919081815260200182805480156104c057602002820191906000526020600020905b8154815260200190600101908083116104ac575b50505050509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b600082600001828154811061050757610506610725565b5b9060005260206000200154905092915050565b600080fd5b6000819050919050565b6105328161051f565b811461053d57600080fd5b50565b60008135905061054f81610529565b92915050565b60006020828403121561056b5761056a61051a565b5b600061057984828501610540565b91505092915050565b61058b8161051f565b82525050565b60006020820190506105a66000830184610582565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6105e18161051f565b82525050565b60006105f383836105d8565b60208301905092915050565b6000602082019050919050565b6000610617826105ac565b61062181856105b7565b935061062c836105c8565b8060005b8381101561065d57815161064488826105e7565b975061064f836105ff565b925050600181019050610630565b5085935050505092915050565b60006020820190508181036000830152610684818461060c565b905092915050565b60008115159050919050565b6106a18161068c565b82525050565b60006020820190506106bc6000830184610698565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106fc8261051f565b91506107078361051f565b92508282101561071a576107196106c2565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212203dd83dcb054484fc7c735851246692e0e4e1c45614aeaa269c27a32e715998e464736f6c63430008090033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var EnumerableUintSetMock__factory = /** @class */ (function (_super) {
    __extends(EnumerableUintSetMock__factory, _super);
    function EnumerableUintSetMock__factory() {
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
        _this.contractName = "EnumerableUintSetMock";
        return _this;
    }
    EnumerableUintSetMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    EnumerableUintSetMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    EnumerableUintSetMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    EnumerableUintSetMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    EnumerableUintSetMock__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    EnumerableUintSetMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    EnumerableUintSetMock__factory.bytecode = _bytecode;
    EnumerableUintSetMock__factory.abi = _abi;
    return EnumerableUintSetMock__factory;
}(ethers_1.ContractFactory));
exports.EnumerableUintSetMock__factory = EnumerableUintSetMock__factory;
