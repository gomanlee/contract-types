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
exports.TrueFiVault__factory = void 0;
var ethers_1 = require("ethers");
var TrueFiVault__factory = /** @class */ (function (_super) {
    __extends(TrueFiVault__factory, _super);
    function TrueFiVault__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TrueFiVault__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TrueFiVault__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TrueFiVault__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TrueFiVault__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TrueFiVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TrueFiVault__factory;
}(ethers_1.ContractFactory));
exports.TrueFiVault__factory = TrueFiVault__factory;
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [],
        name: "DURATION",
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
        name: "beneficiary",
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
        name: "claimFeeRewards",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "claimRestake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "claimRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cooldown",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "delegatee",
                type: "address",
            },
        ],
        name: "delegate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "expiry",
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
                name: "_beneficiary",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "contract IVoteTokenWithERC20",
                name: "_tru",
                type: "address",
            },
            {
                internalType: "contract IStkTruToken",
                name: "_stkTru",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "stkTru",
        outputs: [
            {
                internalType: "contract IStkTruToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalBalance",
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
    {
        inputs: [],
        name: "tru",
        outputs: [
            {
                internalType: "contract IVoteTokenWithERC20",
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
                name: "amount",
                type: "uint256",
            },
        ],
        name: "unstake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdrawStkTru",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawToBeneficiary",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdrawTru",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address",
            },
        ],
        name: "withdrawable",
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
        name: "withdrawn",
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
var _bytecode = "0x608060405234801561001057600080fd5b5061271f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80637273c333116100e3578063c80ec5221161008c578063e30c397811610066578063e30c397814610381578063f2fde38b14610389578063f5525afc146103bc57610198565b8063c80ec5221461033e578063ce513b6f14610346578063e184c9be1461037957610198565b806396f40886116100bd57806396f40886146102fc578063a694fc3a14610319578063ad7a672f1461033657610198565b80637273c333146102e4578063787a08a6146102ec5780638da5cb5b146102f457610198565b806338af3eed116101455780635c19a95c1161011f5780635c19a95c146102a15780635c564b35146102d457806360484f1b146102dc57610198565b806338af3eed14610275578063392e53cd1461027d5780634e71e0c81461029957610198565b80632e17de78116101765780632e17de7814610207578063358394d814610224578063372500ab1461026d57610198565b8063089f0cf41461019d57806313e30a33146101bc5780631be05289146101ed575b600080fd5b6101ba600480360360208110156101b357600080fd5b50356103c4565b005b6101c4610613565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101f561062f565b60408051918252519081900360200190f35b6101ba6004803603602081101561021d57600080fd5b5035610637565b6101ba6004803603608081101561023a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359160408201358116916060013516610731565b6101ba61097f565b6101c4610a7c565b610285610a98565b604080519115158252519081900360200190f35b6101ba610aa1565b6101ba600480360360208110156102b757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b8f565b6101ba610cfb565b6101ba610dd9565b6101ba61113c565b6101ba61133b565b6101c4611411565b6101ba6004803603602081101561031257600080fd5b503561142d565b6101ba6004803603602081101561032f57600080fd5b503561153a565b6101f5611649565b6101f56118d9565b6101f56004803603602081101561035c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166118df565b6101f5611b76565b6101c4611b7c565b6101ba6004803603602081101561039f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611b98565b6101c4611c56565b60355473ffffffffffffffffffffffffffffffffffffffff163314610430576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b6039546104529073ffffffffffffffffffffffffffffffffffffffff166118df565b8111156104905760405162461bcd60e51b815260040180806020018281038252603581526020018061262d6035913960400191505060405180910390fd5b6105ea6105db603960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104fe57600080fd5b505afa158015610512573d6000803e3d6000fd5b505050506040513d602081101561052857600080fd5b5051603954604080517fc2778b2800000000000000000000000000000000000000000000000000000000815290516105cf9273ffffffffffffffffffffffffffffffffffffffff169163c2778b28916004808301926020929190829003018186803b15801561059657600080fd5b505afa1580156105aa573d6000803e3d6000fd5b505050506040513d60208110156105c057600080fd5b5051859063ffffffff611c7216565b9063ffffffff611cd416565b6037549063ffffffff611d3b16565b6037556039546106109073ffffffffffffffffffffffffffffffffffffffff1682611d95565b50565b60395473ffffffffffffffffffffffffffffffffffffffff1681565b6301e1338081565b60355473ffffffffffffffffffffffffffffffffffffffff1633146106a3576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603954604080517f2e17de7800000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff90921691632e17de789160248082019260009290919082900301818387803b15801561071657600080fd5b505af115801561072a573d6000803e3d6000fd5b5050505050565b600054610100900460ff168061074a575061074a611e20565b80610758575060005460ff16155b6107935760405162461bcd60e51b815260040180806020018281038252602e8152602001806125ff602e913960400191505060405180910390fd5b600054610100900460ff161580156107f957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61080233611e26565b603580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8716179055610850426301e13380611d3b565b6036556038805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179092556039805485841692169190911790819055603554604080517f5c19a95c0000000000000000000000000000000000000000000000000000000081529184166004830152519190921691635c19a95c91602480830192600092919082900301818387803b15801561090657600080fd5b505af115801561091a573d6000803e3d6000fd5b505060385461094a925073ffffffffffffffffffffffffffffffffffffffff16905033308763ffffffff611f8e16565b801561072a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050505050565b60355473ffffffffffffffffffffffffffffffffffffffff1633146109eb576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603954603854604080517fef5cfb8c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff92831660048201529051919092169163ef5cfb8c91602480830192600092919082900301818387803b158015610a6257600080fd5b505af1158015610a76573d6000803e3d6000fd5b50505050565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff163314610af75760405162461bcd60e51b81526004018080602001828103825260288152602001806126626028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b60355473ffffffffffffffffffffffffffffffffffffffff163314610bfb576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603854604080517f5c19a95c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291519190921691635c19a95c91602480830192600092919082900301818387803b158015610c6f57600080fd5b505af1158015610c83573d6000803e3d6000fd5b5050603954604080517f5c19a95c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301529151919092169350635c19a95c9250602480830192600092919082900301818387803b15801561071657600080fd5b60355473ffffffffffffffffffffffffffffffffffffffff163314610d67576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603954604080517fdb8510cd000000000000000000000000000000000000000000000000000000008152600060048201819052915173ffffffffffffffffffffffffffffffffffffffff9093169263db8510cd9260248084019391929182900301818387803b158015610a6257600080fd5b60355473ffffffffffffffffffffffffffffffffffffffff163314610e45576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634e71d92d6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610eaf57600080fd5b505af1158015610ec3573d6000803e3d6000fd5b505050506000603960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e92b87126040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3157600080fd5b505afa158015610f45573d6000803e3d6000fd5b505050506040513d6020811015610f5b57600080fd5b5051603554604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519293506110279273ffffffffffffffffffffffffffffffffffffffff928316928516916370a08231916024808301926020929190829003018186803b158015610fd757600080fd5b505afa158015610feb573d6000803e3d6000fd5b505050506040513d602081101561100157600080fd5b505173ffffffffffffffffffffffffffffffffffffffff8416919063ffffffff61202316565b603954604080517f647846a5000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163647846a5916004808301926020929190829003018186803b15801561109257600080fd5b505afa1580156110a6573d6000803e3d6000fd5b505050506040513d60208110156110bc57600080fd5b5051603554604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519293506111389273ffffffffffffffffffffffffffffffffffffffff928316928516916370a08231916024808301926020929190829003018186803b158015610fd757600080fd5b5050565b60355473ffffffffffffffffffffffffffffffffffffffff1633146111a8576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b60006111d36111c66301e133806036546120b590919063ffffffff16565b429063ffffffff6120b516565b90506301e133808110156112185760405162461bcd60e51b81526004018080602001828103825260258152602001806125936025913960400191505060405180910390fd5b61122061097f565b603854604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516112c69273ffffffffffffffffffffffffffffffffffffffff169182916370a0823191602480820192602092909190829003018186803b15801561129557600080fd5b505afa1580156112a9573d6000803e3d6000fd5b505050506040513d60208110156112bf57600080fd5b5051611d95565b603954604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516106109273ffffffffffffffffffffffffffffffffffffffff169182916370a0823191602480820192602092909190829003018186803b15801561129557600080fd5b60355473ffffffffffffffffffffffffffffffffffffffff1633146113a7576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b603960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663787a08a66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610a6257600080fd5b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60355473ffffffffffffffffffffffffffffffffffffffff163314611499576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b6114a161097f565b6038546114c39073ffffffffffffffffffffffffffffffffffffffff166118df565b8111156115015760405162461bcd60e51b815260040180806020018281038252603581526020018061262d6035913960400191505060405180910390fd5b603754611514908263ffffffff611d3b16565b6037556038546106109073ffffffffffffffffffffffffffffffffffffffff1682611d95565b60355473ffffffffffffffffffffffffffffffffffffffff1633146115a6576040805162461bcd60e51b815260206004820152601d60248201527f5472756546695661756c743a206f6e6c792062656e6566696369617279000000604482015290519081900360640190fd5b6039546038546115d69173ffffffffffffffffffffffffffffffffffffffff91821691168363ffffffff61211216565b603954604080517fa694fc3a00000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff9092169163a694fc3a9160248082019260009290919082900301818387803b15801561071657600080fd5b600080611824603960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116b757600080fd5b505afa1580156116cb573d6000803e3d6000fd5b505050506040513d60208110156116e157600080fd5b5051603954604080517fc2778b2800000000000000000000000000000000000000000000000000000000815290516105cf9273ffffffffffffffffffffffffffffffffffffffff169163c2778b28916004808301926020929190829003018186803b15801561174f57600080fd5b505afa158015611763573d6000803e3d6000fd5b505050506040513d602081101561177957600080fd5b5051603954604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b1580156117ec57600080fd5b505afa158015611800573d6000803e3d6000fd5b505050506040513d602081101561181657600080fd5b50519063ffffffff611c7216565b603854604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290519293506118d392849273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561189b57600080fd5b505afa1580156118af573d6000803e3d6000fd5b505050506040513d60208110156118c557600080fd5b50519063ffffffff611d3b16565b91505090565b60375481565b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b15801561195057600080fd5b505afa158015611964573d6000803e3d6000fd5b505050506040513d602081101561197a57600080fd5b505160365490915060009061199d906111c6906301e1338063ffffffff6120b516565b90506301e133808111156119b257506301e133805b60006119f86037546119ec6301e133806105cf866119e06037546119d4611649565b9063ffffffff611d3b16565b9063ffffffff611c7216565b9063ffffffff6120b516565b60395490915073ffffffffffffffffffffffffffffffffffffffff86811691161415611b5e57603954604080517fc2778b280000000000000000000000000000000000000000000000000000000081529051611b5b9273ffffffffffffffffffffffffffffffffffffffff169163c2778b28916004808301926020929190829003018186803b158015611a8a57600080fd5b505afa158015611a9e573d6000803e3d6000fd5b505050506040513d6020811015611ab457600080fd5b5051603954604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290516105cf9273ffffffffffffffffffffffffffffffffffffffff16916318160ddd916004808301926020929190829003018186803b158015611b2257600080fd5b505afa158015611b36573d6000803e3d6000fd5b505050506040513d6020811015611b4c57600080fd5b5051849063ffffffff611c7216565b90505b828111611b6b5780611b6d565b825b95945050505050565b60365481565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b611ba0612286565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614611c0f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60385473ffffffffffffffffffffffffffffffffffffffff1681565b600082611c8157506000611cce565b82820282848281611c8e57fe5b0414611ccb5760405162461bcd60e51b81526004018080602001828103825260218152602001806125de6021913960400191505060405180910390fd5b90505b92915050565b6000808211611d2a576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611d3357fe5b049392505050565b600082820183811015611ccb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b603554611dc29073ffffffffffffffffffffffffffffffffffffffff84811691168363ffffffff61202316565b6035546040805173ffffffffffffffffffffffffffffffffffffffff80861682526020820185905290921682820152517f56c54ba9bd38d8fd62012e42c7ee564519b09763c426d331b3661b537ead19b29181900360600190a15050565b303b1590565b600054610100900460ff1680611e3f5750611e3f611e20565b80611e4d575060005460ff16155b611e885760405162461bcd60e51b815260040180806020018281038252602e8152602001806125ff602e913960400191505060405180910390fd5b600054610100900460ff16158015611eee57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561113857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610a7690859061228a565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526120b090849061228a565b505050565b60008282111561210c576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b8015806121be5750604080517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561219057600080fd5b505afa1580156121a4573d6000803e3d6000fd5b505050506040513d60208110156121ba57600080fd5b5051155b6121f95760405162461bcd60e51b81526004018080602001828103825260368152602001806126b46036913960400191505060405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526120b090849061228a565b3390565b60606122ec826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123489092919063ffffffff16565b8051909150156120b05780806020019051602081101561230b57600080fd5b50516120b05760405162461bcd60e51b815260040180806020018281038252602a81526020018061268a602a913960400191505060405180910390fd5b60606123578484600085612361565b90505b9392505050565b6060824710156123a25760405162461bcd60e51b81526004018080602001828103825260268152602001806125b86026913960400191505060405180910390fd5b6123ab856124e8565b6123fc576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061246657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101612429565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146124c8576040519150601f19603f3d011682016040523d82523d6000602084013e6124cd565b606091505b50915091506124dd8282866124ee565b979650505050505050565b3b151590565b606083156124fd57508161235a565b82511561250d5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561255757818101518382015260200161253f565b50505050905090810190601f1680156125845780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5472756546695661756c743a207661756c74206973206e6f74206578706972656420796574416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65645472756546695661756c743a20617474656d7074696e6720746f207769746864726177206d6f7265207468616e20616c6c6f7765644f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220aeec684edf82f97eb7b66b304da3605dac176afea414e67834e48e30607ec44464736f6c634300060a0033";
