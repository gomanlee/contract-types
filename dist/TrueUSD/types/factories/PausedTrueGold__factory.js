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
exports.PausedTrueGold__factory = void 0;
var ethers_1 = require("ethers");
var PausedTrueGold__factory = /** @class */ (function (_super) {
    __extends(PausedTrueGold__factory, _super);
    function PausedTrueGold__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    PausedTrueGold__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    PausedTrueGold__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    PausedTrueGold__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PausedTrueGold__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PausedTrueGold__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return PausedTrueGold__factory;
}(ethers_1.ContractFactory));
exports.PausedTrueGold__factory = PausedTrueGold__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "burner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Mint",
        type: "event",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "newMin",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newMax",
                type: "uint256",
            },
        ],
        name: "SetBurnBounds",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "burn",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "burnMax",
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
        name: "burnMin",
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
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "minBurnAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxBurnAmount",
                type: "uint256",
            },
        ],
        name: "initialize",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
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
        inputs: [
            {
                internalType: "contract IOwnable",
                name: "ownable",
                type: "address",
            },
        ],
        name: "reclaimContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "to",
                type: "address",
            },
        ],
        name: "reclaimEther",
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
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "reclaimToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "minAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxAmount",
                type: "uint256",
            },
        ],
        name: "setBurnBounds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
];
var _bytecode = "0x608060405234801561001057600080fd5b506113e6806100206000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80635c131d70116100e35780639a6a30a41161008c578063dd62ed3e11610066578063dd62ed3e1461046f578063e4a30116146104aa578063f2fde38b146104cd5761018d565b80639a6a30a41461043c578063a457c2d714610229578063a9059cbb146102295761018d565b806388ee39cc116100bd57806388ee39cc146103c85780638da5cb5b1461040357806395d89b41146104345761018d565b80635c131d701461038d57806370a082311461039557806379cc6790146103145761018d565b80632aed7f3f1161014557806340c10f191161011f57806340c10f191461031457806342966c681461034d578063520060501461036a5761018d565b80632aed7f3f146102c1578063313ce567146102f657806339509351146102295761018d565b8063095ea7b311610176578063095ea7b31461022957806318160ddd1461027657806323b872dd1461027e5761018d565b806302d3fdc91461019257806306fdde03146101ac575b600080fd5b61019a610500565b60408051918252519081900360200190f35b6101b4610506565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ee5781810151838201526020016101d6565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102626004803603604081101561023f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561053d565b604080519115158252519081900360200190f35b61019a6105a6565b6102626004803603606081101561029457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561053d565b6102f4600480360360208110156102d757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166105ac565b005b6102fe6106c8565b6040805160ff9092168252519081900360200190f35b6102f46004803603604081101561032a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106cd565b6102f46004803603602081101561036357600080fd5b50356106cd565b6102f46004803603604081101561038057600080fd5b5080359060200135610734565b61019a6108a0565b61019a600480360360208110156103ab57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166108a6565b6102f4600480360360408110156103de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166108ce565b61040b610a9c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101b4610abe565b6102f46004803603602081101561045257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610af5565b61019a6004803603604081101561048557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610bc3565b6102f4600480360360408110156104c057600080fd5b5080359060200135610bfb565b6102f4600480360360208110156104e357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d23565b60045490565b60408051808201909152600881527f54727565476f6c64000000000000000000000000000000000000000000000000602082015290565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f546f6b656e2050617573656400000000000000000000000000000000000000006044820152905160009181900360640190fd5b60035490565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff16331461063857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60008054604080517ff2fde38b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff620100009093048316600482015290519184169263f2fde38b9260248084019382900301818387803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b5050505050565b600690565b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f546f6b656e205061757365640000000000000000000000000000000000000000604482015290519081900360640190fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146107c057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6107d38262bdd5a863ffffffff610eb416565b15610829576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806112ee6034913960400191505060405180910390fd5b61083c8162bdd5a863ffffffff610eb416565b15610892576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806113226034913960400191505060405180910390fd5b61089c8282610f35565b5050565b60055490565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff16331461095a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009173ffffffffffffffffffffffffffffffffffffffff8516916370a0823191602480820192602092909190829003018186803b1580156109ca57600080fd5b505afa1580156109de573d6000803e3d6000fd5b505050506040513d60208110156109f457600080fd5b5051604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820184905291519293509085169163a9059cbb916044808201926020929091908290030181600087803b158015610a7257600080fd5b505af1158015610a86573d6000803e3d6000fd5b505050506040513d60208110156106c157600080fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1690565b60408051808201909152600581527f54474f4c44000000000000000000000000000000000000000000000000000000602082015290565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610b8157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f1935050505015801561089c573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b600054610100900460ff1680610c145750610c14611063565b80610c22575060005460ff16155b610c77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611383602e913960400191505060405180910390fd5b600054610100900460ff16158015610cdd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610ce5611069565b610cef83836111db565b8015610d1e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610daf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610e1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112c86026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516936201000090930416917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b6000808211610f2457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000604482015290519081900360640190fd5b818381610f2d57fe5b069392505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610fc157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b8082111561101a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611356602d913960400191505060405180910390fd5b60048290556005819055604080518381526020810183905281517f21d54a4c1f750b4f93779e3e8b4de89db3f31bab8f203e68569727fee906cc32929181900390910190a15050565b303b1590565b600054610100900460ff16806110825750611082611063565b80611090575060005460ff16155b6110e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611383602e913960400191505060405180910390fd5b600054610100900460ff1615801561114b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff16336201000081029190911782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a380156111d857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b600054610100900460ff16806111f457506111f4611063565b80611202575060005460ff16155b611257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611383602e913960400191505060405180910390fd5b600054610100900460ff161580156112bd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610cef838361073456fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737354727565476f6c643a206d696e20616d6f756e74206973206e6f742061206d756c7469706c65206f662031322c3434312c30303054727565476f6c643a206d617820616d6f756e74206973206e6f742061206d756c7469706c65206f662031322c3434312c303030547275654d696e7461626c654275726e61626c653a206d696e2069732067726561746572207468656e206d6178436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a26469706673582212208f6fea3d8712e3ba46d2616dac232986fd3b57c6a5d9bf9b6dbbea48d2f1c47564736f6c634300060a0033";
