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
exports.TestTimeAveragedTruPriceOracle__factory = void 0;
var ethers_1 = require("ethers");
var TestTimeAveragedTruPriceOracle__factory = /** @class */ (function (_super) {
    __extends(TestTimeAveragedTruPriceOracle__factory, _super);
    function TestTimeAveragedTruPriceOracle__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TestTimeAveragedTruPriceOracle__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TestTimeAveragedTruPriceOracle__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TestTimeAveragedTruPriceOracle__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestTimeAveragedTruPriceOracle__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestTimeAveragedTruPriceOracle__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TestTimeAveragedTruPriceOracle__factory;
}(ethers_1.ContractFactory));
exports.TestTimeAveragedTruPriceOracle__factory = TestTimeAveragedTruPriceOracle__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract AggregatorV3Interface",
                name: "newAggregator",
                type: "address",
            },
        ],
        name: "AggregatorChanged",
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
        inputs: [],
        name: "BUFFER_SIZE",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "TIME_WINDOW",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "bufferSize",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "numberOfValues",
                type: "uint16",
            },
        ],
        name: "calculateAveragePrice",
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
        name: "claimOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cooldownTime",
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
        name: "getLatestTruPrice",
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
        name: "getTotalsBuffer",
        outputs: [
            {
                internalType: "uint256[366]",
                name: "",
                type: "uint256[366]",
            },
            {
                internalType: "uint256[366]",
                name: "",
                type: "uint256[366]",
            },
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getWeeklyPrice",
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
                internalType: "contract AggregatorV3Interface",
                name: "_truPriceFeed",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_cooldownTime",
                type: "uint256",
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
        name: "isOffCooldown",
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
                internalType: "contract AggregatorV3Interface",
                name: "newTruPriceFeed",
                type: "address",
            },
        ],
        name: "setAggregator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "totalsBuffer",
        outputs: [
            {
                internalType: "uint16",
                name: "currIndex",
                type: "uint16",
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
        name: "truPriceFeed",
        outputs: [
            {
                internalType: "contract AggregatorV3Interface",
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
                name: "tokenAmount",
                type: "uint256",
            },
        ],
        name: "truToUsd",
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
        name: "update",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611374806100206000396000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c806384d24515116100cd578063c94a6f4d11610081578063e30c397811610066578063e30c397814610351578063f2fde38b14610359578063f9120af61461038c5761016b565b8063c94a6f4d146102fb578063cd6dc687146103185761016b565b80639c2c770b116100b25780639c2c770b146102e3578063a2e62045146102eb578063b319c6b7146102f35761016b565b806384d24515146102ba5780638da5cb5b146102db5761016b565b80632e60d931116101245780634e71e0c8116101095780634e71e0c8146102a057806354ae2701146102aa5780637546c8e0146102b25761016b565b80632e60d9311461025f578063392e53cd146102845761016b565b806304be5e591161015557806304be5e59146101975780632066d64e14610214578063256a9905146102455761016b565b80624e394e1461017057806301dd70b71461018f575b600080fd5b6101786103bf565b6040805161ffff9092168252519081900360200190f35b6101786103c5565b61019f6103d0565b6040518084612dc080838360005b838110156101c55781810151838201526020016101ad565b505050509050018361016e60200280838360005b838110156101f15781810151838201526020016101d9565b505050509050018261ffff1661ffff168152602001935050505060405180910390f35b61021c610464565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61024d610480565b60408051918252519081900360200190f35b61026761052b565b6040805167ffffffffffffffff9092168252519081900360200190f35b61028c610532565b604080519115158252519081900360200190f35b6102a861053b565b005b61028c610643565b61024d610681565b61024d600480360360208110156102d057600080fd5b503561ffff166106a4565b61021c610897565b6101786108b3565b6102a86108b8565b61024d610a0b565b61024d6004803603602081101561031157600080fd5b5035610a11565b6102a86004803603604081101561032e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a42565b61021c610bae565b6102a86004803603602081101561036f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610bca565b6102a8600480360360208110156103a257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ca2565b61016e81565b6103135461ffff1681565b6103d861117e565b6103e061117e565b6103135460408051612dc081019091526000916037916101a59161ffff16908361016e8282826020028201915b81548152602001906001019080831161040d57505060408051612dc081019182905294975086935061016e9250905082845b81548152602001906001019080831161043f5750505050509150925092509250909192565b60355473ffffffffffffffffffffffffffffffffffffffff1681565b600080603560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156104eb57600080fd5b505afa1580156104ff573d6000803e3d6000fd5b505050506040513d60a081101561051557600080fd5b5060200151905061052581610dac565b91505090565b62093a8081565b60005460ff1690565b60345473ffffffffffffffffffffffffffffffffffffffff1633146105ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806112d36028913960400191505060405180910390fd5b60345460335460405173ffffffffffffffffffffffffffffffffffffffff92831692909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360348054603380547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff841617909155169055565b6103135460009081906101a59061ffff1661016e811061065f57fe5b0154905061067860365482610e0b90919063ffffffff16565b42101591505090565b60008060365462093a8067ffffffffffffffff168161069c57fe5b049050610525815b6000808261ffff1611610702576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604581526020018061119f6045913960600191505060405180910390fd5b61070a6108b3565b61ffff168261ffff1610610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c81526020018061120a604c913960600191505060405180910390fd5b6103135461ffff16600061077b6108b3565b61ffff16846107886108b3565b84010361ffff168161079657fe5b0690506101a561ffff821661016e81106107ac57fe5b01546108135760008261ffff161161080f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260448152602001806112fb6044913960600191505060405180910390fd5b5060005b600061084c603761ffff841661016e811061082a57fe5b0154603761ffff861661016e811061083e57fe5b01549063ffffffff610e8616565b9050600061087b6101a561ffff851661016e811061086657fe5b01546101a561ffff871661016e811061083e57fe5b905061088d828263ffffffff610efd16565b9695505050505050565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b600890565b6108c0610643565b610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806112a5602e913960400191505060405180910390fd5b6103135461ffff1660006109276108b3565b61ffff168260010161ffff168161093a57fe5b0690506000610947610480565b90504260006109716101a561ffff871661016e811061096257fe5b0154839063ffffffff610e8616565b90506109a6610986848363ffffffff610f7e16565b603761ffff881661016e811061099857fe5b01549063ffffffff610e0b16565b603761ffff861661016e81106109b857fe5b0155816101a561ffff861661016e81106109ce57fe5b0155505061031380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff93909316929092179091555050565b60365481565b6000610a3c6064610a30610a23610681565b859063ffffffff610f7e16565b9063ffffffff610f7e16565b92915050565b600054610100900460ff1680610a5b5750610a5b610ff1565b80610a69575060005460ff16155b610abe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611277602e913960400191505060405180910390fd5b600054610100900460ff16158015610b2457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610b2d33610ff7565b603580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790556036829055426101a5600001558015610ba957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050565b60345473ffffffffffffffffffffffffffffffffffffffff1690565b610bd261117a565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610c5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610caa61117a565b60335473ffffffffffffffffffffffffffffffffffffffff908116911614610d3357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6035805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517ff3e6c1f3232787b8b03756f60107e7d526693a5e42a7f0e13dc3448cc62a5a7f9181900360200190a150565b600080821215610e07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806111e46026913960400191505060405180910390fd5b5090565b600082820183811015610e7f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082821115610ef757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211610f6d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610f7657fe5b049392505050565b600082610f8d57506000610a3c565b82820282848281610f9a57fe5b0414610e7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806112566021913960400191505060405180910390fd5b303b1590565b600054610100900460ff16806110105750611010610ff1565b8061101e575060005460ff16155b611073576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611277602e913960400191505060405180910390fd5b600054610100900460ff161580156110d957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3801561117657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b3390565b60405180612dc0016040528061016e90602082028036833750919291505056fe54696d65417665726167656454727550726963654f7261636c653a204e756d626572206f662076616c7565732073686f756c642062652067726561746572207468616e203054696d654176657261676550726963654f7261636c653a2075696e7420756e646572666c6f7754696d65417665726167656454727550726963654f7261636c653a204e756d626572206f662076616c7565732073686f756c64206265206c657373207468616e206275666665722073697a65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a656454696d65417665726167656454727550726963654f7261636c653a20427566666572206f6e20636f6f6c646f776e4f776e61626c653a2063616c6c6572206973206e6f74207468652070656e64696e67206f776e657254696d65417665726167656454727550726963654f7261636c653a2043616e6e6f742075736520627566666572206265666f726520616e79207570646174652063616c6ca2646970667358221220d9243818f71e57fb3255ea82bad66ee4da0b84a63e8d7f3a039b9c53eb10481364736f6c634300060a0033";
