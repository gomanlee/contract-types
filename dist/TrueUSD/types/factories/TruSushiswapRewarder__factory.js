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
exports.TruSushiswapRewarder__factory = void 0;
var ethers_1 = require("ethers");
var TruSushiswapRewarder__factory = /** @class */ (function (_super) {
    __extends(TruSushiswapRewarder__factory, _super);
    function TruSushiswapRewarder__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TruSushiswapRewarder__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TruSushiswapRewarder__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TruSushiswapRewarder__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TruSushiswapRewarder__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TruSushiswapRewarder__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TruSushiswapRewarder__factory;
}(ethers_1.ContractFactory));
exports.TruSushiswapRewarder__factory = TruSushiswapRewarder__factory;
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
        inputs: [],
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_rewardMultiplier",
                type: "uint256",
            },
            {
                internalType: "contract IERC20",
                name: "_trustToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_MASTERCHEF_V2",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isInitialized",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sushiAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "onSushiReward",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sushiAmount",
                type: "uint256",
            },
        ],
        name: "pendingTokens",
        outputs: [
            {
                internalType: "contract IERC20[]",
                name: "rewardTokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "rewardAmounts",
                type: "uint256[]",
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
var _bytecode = "0x608060405234801561001057600080fd5b50610e48806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063b4988fd01161005b578063b4988fd014610133578063d63b3c4914610174578063e30c39781461024c578063f2fde38b1461025457610088565b8063392e53cd1461008d5780634e71e0c8146100a95780638bf63742146100b35780638da5cb5b14610102575b600080fd5b610095610287565b604080519115158252519081900360200190f35b6100b1610290565b005b6100b1600480360360a08110156100c957600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff602082013581169160408101359091169060608101359060800135610398565b61010a610540565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b16004803603606081101561014957600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff6020820135811691604001351661055c565b6101b36004803603606081101561018a57600080fd5b5080359073ffffffffffffffffffffffffffffffffffffffff60208201351690604001356106cd565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156101f75781810151838201526020016101df565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561023657818101518382015260200161021e565b5050505090500194505050505060405180910390f35b61010a6107ae565b6100b16004803603602081101561026a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107ca565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff163314610300576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610dc16028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60375473ffffffffffffffffffffffffffffffffffffffff163314610408576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610d2b6021913960400191505060405180910390fd5b6000670de0b6b3a7640000610428603554856108a290919063ffffffff16565b8161042f57fe5b603654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193909204935060009273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b1580156104a857600080fd5b505afa1580156104bc573d6000803e3d6000fd5b505050506040513d60208110156104d257600080fd5b505190508082111561050d576036546105089073ffffffffffffffffffffffffffffffffffffffff16868363ffffffff61091e16565b610537565b6036546105379073ffffffffffffffffffffffffffffffffffffffff16868463ffffffff61091e16565b50505050505050565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b600054610100900460ff168061057557506105756109b0565b80610583575060005460ff16155b6105d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180610d93602e913960400191505060405180910390fd5b600054610100900460ff1615801561063e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b60358490556036805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255603780549285169290911691909117905580156106c757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b60408051600180825281830190925260609182918291602080830190803683375050603654825192935073ffffffffffffffffffffffffffffffffffffffff169183915060009061071a57fe5b73ffffffffffffffffffffffffffffffffffffffff9290921660209283029190910190910152604080516001808252818301909252606091816020016020820280368337019050509050670de0b6b3a7640000610782603554876108a290919063ffffffff16565b8161078957fe5b048160008151811061079757fe5b602090810291909101015290969095509350505050565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b6107d26109b6565b60335473ffffffffffffffffffffffffffffffffffffffff90811691161461085b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000826108b157506000610918565b828202828482816108be57fe5b0414610915576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610d726021913960400191505060405180910390fd5b90505b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526109ab9084906109ba565b505050565b303b1590565b3390565b6060610a1c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a929092919063ffffffff16565b8051909150156109ab57808060200190516020811015610a3b57600080fd5b50516109ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610de9602a913960400191505060405180910390fd5b6060610aa18484600085610aab565b90505b9392505050565b606082471015610b06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610d4c6026913960400191505060405180910390fd5b610b0f85610c66565b610b7a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310610be457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610ba7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610c46576040519150601f19603f3d011682016040523d82523d6000602084013e610c4b565b606091505b5091509150610c5b828286610c6c565b979650505050505050565b3b151590565b60608315610c7b575081610aa4565b825115610c8b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cef578181015183820152602001610cd7565b50505050905090810190601f168015610d1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e2e416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220a2929a183d26991ddcbf27bcf4daf8719d57ecc94ec354a832595b4f857ec1b764736f6c634300060a0033";
