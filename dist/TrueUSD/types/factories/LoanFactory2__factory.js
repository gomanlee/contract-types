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
exports.LoanFactory2__factory = void 0;
var ethers_1 = require("ethers");
var LoanFactory2__factory = /** @class */ (function (_super) {
    __extends(LoanFactory2__factory, _super);
    function LoanFactory2__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    LoanFactory2__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LoanFactory2__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LoanFactory2__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LoanFactory2__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LoanFactory2__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return LoanFactory2__factory;
}(ethers_1.ContractFactory));
exports.LoanFactory2__factory = LoanFactory2__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IBorrowingMutex",
                name: "borrowingMutex",
                type: "address",
            },
        ],
        name: "BorrowingMutexChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract ILineOfCreditAgency",
                name: "creditAgency",
                type: "address",
            },
        ],
        name: "CreditAgencyChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract ITrueFiCreditOracle",
                name: "creditOracle",
                type: "address",
            },
        ],
        name: "CreditOracleChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IDebtToken",
                name: "debtToken",
                type: "address",
            },
        ],
        name: "DebtTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IDebtToken",
                name: "debtTokenImplementation",
                type: "address",
            },
        ],
        name: "DebtTokenImplementationChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFixedTermLoanAgency",
                name: "ftlAgency",
                type: "address",
            },
        ],
        name: "FixedTermLoanAgencyChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFixedTermLoan",
                name: "loanToken",
                type: "address",
            },
        ],
        name: "LoanTokenCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFixedTermLoan",
                name: "loanTokenImplementation",
                type: "address",
            },
        ],
        name: "LoanTokenImplementationChanged",
        type: "event",
    },
    {
        inputs: [],
        name: "admin",
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
        name: "borrowingMutex",
        outputs: [
            {
                internalType: "contract IBorrowingMutex",
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
                internalType: "contract ITrueFiPool2",
                name: "_pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_debt",
                type: "uint256",
            },
        ],
        name: "createDebtToken",
        outputs: [
            {
                internalType: "contract IDebtToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ITrueFiPool2",
                name: "_pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_term",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_apy",
                type: "uint256",
            },
        ],
        name: "createLoanToken",
        outputs: [
            {
                internalType: "contract IFixedTermLoan",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "creditAgency",
        outputs: [
            {
                internalType: "contract ILineOfCreditAgency",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "creditOracle",
        outputs: [
            {
                internalType: "contract ITrueFiCreditOracle",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "debtTokenImplementation",
        outputs: [
            {
                internalType: "contract IDebtToken",
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
                internalType: "address",
                name: "borrower",
                type: "address",
            },
        ],
        name: "debtTokens",
        outputs: [
            {
                internalType: "contract IDebtToken[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ftlAgency",
        outputs: [
            {
                internalType: "contract IFixedTermLoanAgency",
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
                internalType: "contract IFixedTermLoanAgency",
                name: "_ftlAgency",
                type: "address",
            },
            {
                internalType: "address",
                name: "_liquidator",
                type: "address",
            },
            {
                internalType: "contract ITrueFiCreditOracle",
                name: "_creditOracle",
                type: "address",
            },
            {
                internalType: "contract IBorrowingMutex",
                name: "_borrowingMutex",
                type: "address",
            },
            {
                internalType: "contract ILineOfCreditAgency",
                name: "_creditAgency",
                type: "address",
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
                internalType: "contract IDebtToken",
                name: "",
                type: "address",
            },
        ],
        name: "isDebtToken",
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
                internalType: "contract ILoanToken2Deprecated",
                name: "",
                type: "address",
            },
        ],
        name: "isLegacyLoanToken",
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
                internalType: "contract IFixedTermLoan",
                name: "",
                type: "address",
            },
        ],
        name: "isLoanToken",
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
        name: "liquidator",
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
        name: "loanTokenImplementation",
        outputs: [
            {
                internalType: "contract IFixedTermLoan",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "setAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBorrowingMutex",
                name: "_mutex",
                type: "address",
            },
        ],
        name: "setBorrowingMutex",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ILineOfCreditAgency",
                name: "_creditAgency",
                type: "address",
            },
        ],
        name: "setCreditAgency",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ITrueFiCreditOracle",
                name: "_creditOracle",
                type: "address",
            },
        ],
        name: "setCreditOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IDebtToken",
                name: "_implementation",
                type: "address",
            },
        ],
        name: "setDebtTokenImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFixedTermLoanAgency",
                name: "_ftlAgency",
                type: "address",
            },
        ],
        name: "setFixedTermLoanAgency",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFixedTermLoan",
                name: "_implementation",
                type: "address",
            },
        ],
        name: "setLoanTokenImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611968806100206000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80637fe49641116100e3578063d0ba1c071161008c578063e36922a511610066578063e36922a51461053e578063f00e0efd14610546578063f851a4401461054e5761018d565b8063d0ba1c07146104d0578063e1b1cc7014610503578063e367d347146105365761018d565b8063965d598f116100bd578063965d598f146103cb578063a820be541461044e578063b69ad6c51461049d5761018d565b80637fe496411461035d578063931173a31461036557806394b6588f146103985761018d565b8063380347391161014557806346e917ec1161011f57806346e917ec146102b45780635976ab98146102f75780637cf0b44d1461032a5761018d565b80633803473914610271578063392e53cd146102a45780634046ebae146102ac5761018d565b80632cae2096116101765780632cae20961461021a5780632dd96d61146102225780632f9c964e146102695761018d565b8063026ae76f146101925780631459457a146101c3575b600080fd5b61019a610556565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610218600480360360a08110156101d957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101358216916040820135811691606081013582169160809091013516610572565b005b610218610711565b6102556004803603602081101561023857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610751565b604080519115158252519081900360200190f35b61019a610766565b6102556004803603602081101561028757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610782565b610255610797565b61019a6107a0565b61019a600480360360608110156102ca57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107bc565b6102186004803603602081101561030d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a42565b6102556004803603602081101561034057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610b97565b61019a610bac565b6102186004803603602081101561037b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610bc8565b610218600480360360208110156103ae57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610d1d565b6103fe600480360360208110156103e157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e72565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561043a578181015183820152602001610422565b505050509050019250505060405180910390f35b61019a600480360360a081101561046457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060800135610f03565b610218600480360360208110156104b357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611156565b610218600480360360208110156104e657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166112ab565b6102186004803603602081101561051957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611400565b61019a611555565b61019a611571565b61019a61158d565b61019a6115a9565b603c5473ffffffffffffffffffffffffffffffffffffffff1681565b600054610100900460ff168061058b575061058b6115c5565b80610599575060005460ff16155b6105ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061177c602e913960400191505060405180910390fd5b600054610100900460ff1615801561065457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b603f805473ffffffffffffffffffffffffffffffffffffffff8089167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255603780548216331790556036805488841690831617905560398054878416908316179055603a8054868416908316179055603c805492851692909116919091179055801561070957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b505050505050565b603780547fffffffffffffffffffffffff0000000000000000000000000000000000000000167316cea306506c387713c70b9c1205fd5ac997e78e179055565b60406020819052600091825290205460ff1681565b603b5473ffffffffffffffffffffffffffffffffffffffff1681565b603e6020526000908152604090205460ff1681565b60005460ff1690565b60365473ffffffffffffffffffffffffffffffffffffffff1681565b603c5460009073ffffffffffffffffffffffffffffffffffffffff163314806107f457503360009081526040602081905290205460ff165b610849576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806118936035913960400191505060405180910390fd5b603d5473ffffffffffffffffffffffffffffffffffffffff16806108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806118ff6034913960400191505060405180910390fd5b60006108c3826115cb565b603654604080517ff7013ef600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152336024830152898116604483015292831660648201526084810188905290519293509083169163f7013ef69160a48082019260009290919082900301818387803b15801561095757600080fd5b505af115801561096b573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff8083166000818152603e6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155948b168352604182528083208054958601815583529181902090930180547fffffffffffffffffffffffff000000000000000000000000000000000000000016831790558051918252517fa04071def2118a99b8bbefa9ed83b2c676f122681248ac9c946001262c59228293509081900390910190a195945050505050565b60375473ffffffffffffffffffffffffffffffffffffffff163314610ab2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610b1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806118296035913960400191505060405180910390fd5b6039805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fde9a8db67d3efe7440f2196da0aa3eacd77e05c53e3447e8ce6fb6d5f55e42539181900360200190a150565b60336020526000908152604090205460ff1681565b603d5473ffffffffffffffffffffffffffffffffffffffff1681565b60375473ffffffffffffffffffffffffffffffffffffffff163314610c38576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ca4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603581526020018061185e6035913960400191505060405180910390fd5b603c805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fa3b7c37094bf89b6d0651a093211a836579c59059fa7a793de706a534127e5d89181900360200190a150565b60375473ffffffffffffffffffffffffffffffffffffffff163314610d8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610df9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e8152602001806117eb603e913960400191505060405180910390fd5b603f805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fc7f1fd42b5afbc3bec81a983c71538b521247fe962f121e22a5693194c67916f9181900360200190a150565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260416020908152604091829020805483518184028101840190945280845260609392830182828015610ef657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610ecb575b505050505090505b919050565b603f5460009073ffffffffffffffffffffffffffffffffffffffff163314610f76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806117136035913960400191505060405180910390fd5b603b5473ffffffffffffffffffffffffffffffffffffffff1680610fe5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806117486034913960400191505060405180910390fd5b6000610ff0826115cb565b603a54603f54603754603954604080517f0974f94c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8f8116600483015295861660248201528d86166044820152938516606485015291841660848401523060a4840152831660c483015260e482018a9052610104820189905261012482018890525192935090831691630974f94c916101448082019260009290919082900301818387803b1580156110b457600080fd5b505af11580156110c8573d6000803e3d6000fd5b50505073ffffffffffffffffffffffffffffffffffffffff82166000818152604060208181529181902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558051928352517f76798570126d3c18775ba46bf883a4be57792ec5f030d32af263b8b1a013cee09350918290030190a1979650505050505050565b60375473ffffffffffffffffffffffffffffffffffffffff1633146111c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611232576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806118c86037913960400191505060405180910390fd5b603a805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fc05e464a872ccdbe4ad1e9a67c2ca810d3ed2cd53a5a0923c0f7a1307c6df40b9181900360200190a150565b60375473ffffffffffffffffffffffffffffffffffffffff16331461131b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611387576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806116d26041913960600191505060405180910390fd5b603d805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f255efdc0fa8ca05ee520898aaf5e1e9c39d410b3c121cd1d3fb379263e4b0feb9181900360200190a150565b60375473ffffffffffffffffffffffffffffffffffffffff163314611470576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806116ae6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166114dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806117aa6041913960600191505060405180910390fd5b603b805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fe94bdf6ffe73bd40238f94e716f9918d21ca17334eb67075058d6add458f41199181900360200190a150565b603a5473ffffffffffffffffffffffffffffffffffffffff1681565b60395473ffffffffffffffffffffffffffffffffffffffff1681565b603f5473ffffffffffffffffffffffffffffffffffffffff1681565b60375473ffffffffffffffffffffffffffffffffffffffff1681565b303b1590565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f091505073ffffffffffffffffffffffffffffffffffffffff8116610efe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015290519081900360640190fdfe4c6f616e466163746f72793a2043616c6c6572206973206e6f74207468652061646d696e4c6f616e466163746f72793a2043616e6e6f7420736574206465627420746f6b656e20696d706c656d656e746174696f6e20746f207a65726f20616464726573734c6f616e466163746f72793a2043616c6c6572206973206e6f7420746865206669786564207465726d206c6f616e206167656e63794c6f616e466163746f72793a204c6f616e20746f6b656e20696d706c656d656e746174696f6e2073686f756c6420626520736574436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a65644c6f616e466163746f72793a2043616e6e6f7420736574206c6f616e20746f6b656e20696d706c656d656e746174696f6e20746f207a65726f20616464726573734c6f616e466163746f72793a2043616e6e6f7420736574206669786564207465726d206c6f616e206167656e637920746f207a65726f20616464726573734c6f616e466163746f72793a2043616e6e6f742073657420637265646974206f7261636c6520746f207a65726f20616464726573734c6f616e466163746f72793a2043616e6e6f742073657420637265646974206167656e637920746f207a65726f20616464726573734c6f616e466163746f72793a2043616c6c6572206973206e65697468657220637265646974206167656e6379206e6f72206c6f616e4c6f616e466163746f72793a2043616e6e6f742073657420626f72726f77696e67206d7574657820746f207a65726f20616464726573734c6f616e466163746f72793a204465627420746f6b656e20696d706c656d656e746174696f6e2073686f756c6420626520736574a26469706673582212201ce322351556cab01dbadfe8cb89ecefc697d3fdf4eac1ccb4a6e69363db07ad64736f6c634300060a0033";