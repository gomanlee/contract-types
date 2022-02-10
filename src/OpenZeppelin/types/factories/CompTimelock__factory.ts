/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CompTimelock, CompTimelockInterface } from "../CompTimelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200208b3803806200208b8339818101604052810190620000379190620001bd565b6202a30081101562000080576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000077906200028b565b60405180910390fd5b62278d00811115620000c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c09062000323565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600281905550505062000345565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200014a826200011d565b9050919050565b6200015c816200013d565b81146200016857600080fd5b50565b6000815190506200017c8162000151565b92915050565b6000819050919050565b620001978162000182565b8114620001a357600080fd5b50565b600081519050620001b7816200018c565b92915050565b60008060408385031215620001d757620001d662000118565b5b6000620001e7858286016200016b565b9250506020620001fa85828601620001a6565b9150509250929050565b600082825260208201905092915050565b7f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360008201527f7420657863656564206d696e696d756d2064656c61792e000000000000000000602082015250565b60006200027360378362000204565b9150620002808262000215565b604082019050919050565b60006020820190508181036000830152620002a68162000264565b9050919050565b7f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60008201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000602082015250565b60006200030b60388362000204565b91506200031882620002ad565b604082019050919050565b600060208201905081810360008301526200033e81620002fc565b9050919050565b611d3680620003556000396000f3fe6080604052600436106100c65760003560e01c80636a42b8f81161007f578063c1a287e211610059578063c1a287e214610254578063e177246e1461027f578063f2b06537146102a8578063f851a440146102e5576100cd565b80636a42b8f8146101d35780637d645fab146101fe578063b1b43ae514610229576100cd565b80630825f38f146100d25780630e18b6811461010257806326782247146101195780633a66f901146101445780634dd18bf514610181578063591fcdfe146101aa576100cd565b366100cd57005b600080fd5b6100ec60048036038101906100e79190611026565b610310565b6040516100f99190611161565b60405180910390f35b34801561010e57600080fd5b50610117610656565b005b34801561012557600080fd5b5061012e6107cd565b60405161013b9190611192565b60405180910390f35b34801561015057600080fd5b5061016b60048036038101906101669190611026565b6107f3565b60405161017891906111c6565b60405180910390f35b34801561018d57600080fd5b506101a860048036038101906101a391906111e1565b61099c565b005b3480156101b657600080fd5b506101d160048036038101906101cc9190611026565b610ab3565b005b3480156101df57600080fd5b506101e8610bfd565b6040516101f5919061121d565b60405180910390f35b34801561020a57600080fd5b50610213610c03565b604051610220919061121d565b60405180910390f35b34801561023557600080fd5b5061023e610c0a565b60405161024b919061121d565b60405180910390f35b34801561026057600080fd5b50610269610c11565b604051610276919061121d565b60405180910390f35b34801561028b57600080fd5b506102a660048036038101906102a19190611238565b610c18565b005b3480156102b457600080fd5b506102cf60048036038101906102ca9190611291565b610d4b565b6040516102dc91906112d9565b60405180910390f35b3480156102f157600080fd5b506102fa610d6b565b6040516103079190611192565b60405180910390f35b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039790611377565b60405180910390fd5b600086868686866040516020016103bb9594939291906113db565b6040516020818303038152906040528051906020012090506003600082815260200190815260200160002060009054906101000a900460ff16610433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042a906114ae565b60405180910390fd5b8261043c610d8f565b101561047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490611566565b60405180910390fd5b621275008361048c91906115b5565b610494610d8f565b11156104d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cc9061167d565b60405180910390fd5b60006003600083815260200190815260200160002060006101000a81548160ff021916908315150217905550606060008651141561051557849050610541565b85805190602001208560405160200161052f929190611726565b60405160208183030381529060405290505b6000808973ffffffffffffffffffffffffffffffffffffffff16898460405161056a919061174e565b60006040518083038185875af1925050503d80600081146105a7576040519150601f19603f3d011682016040523d82523d6000602084013e6105ac565b606091505b5091509150816105f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e8906117d7565b60405180910390fd5b8973ffffffffffffffffffffffffffffffffffffffff16847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b60405161063e94939291906117f7565b60405180910390a38094505050505095945050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106dd906118bc565b60405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c60405160405180910390a2565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b9061194e565b60405180910390fd5b60025461088f610d8f565b61089991906115b5565b8210156108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d290611a06565b60405180910390fd5b600086868686866040516020016108f69594939291906113db565b60405160208183030381529060405280519060200120905060016003600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508673ffffffffffffffffffffffffffffffffffffffff16817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f8888888860405161098794939291906117f7565b60405180910390a38091505095945050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0190611a98565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75660405160405180910390a250565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3890611b2a565b60405180910390fd5b60008585858585604051602001610b5c9594939291906113db565b60405160208183030381529060405280519060200120905060006003600083815260200190815260200160002060006101000a81548160ff0219169083151502179055508573ffffffffffffffffffffffffffffffffffffffff16817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051610bed94939291906117f7565b60405180910390a3505050505050565b60025481565b62278d0081565b6202a30081565b6212750081565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7d90611bbc565b60405180910390fd5b6202a300811015610ccc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc390611c4e565b60405180910390fd5b62278d00811115610d12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0990611ce0565b60405180910390fd5b806002819055506002547f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c60405160405180910390a250565b60036020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600042905090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610dd682610dab565b9050919050565b610de681610dcb565b8114610df157600080fd5b50565b600081359050610e0381610ddd565b92915050565b6000819050919050565b610e1c81610e09565b8114610e2757600080fd5b50565b600081359050610e3981610e13565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e9282610e49565b810181811067ffffffffffffffff82111715610eb157610eb0610e5a565b5b80604052505050565b6000610ec4610d97565b9050610ed08282610e89565b919050565b600067ffffffffffffffff821115610ef057610eef610e5a565b5b610ef982610e49565b9050602081019050919050565b82818337600083830152505050565b6000610f28610f2384610ed5565b610eba565b905082815260208101848484011115610f4457610f43610e44565b5b610f4f848285610f06565b509392505050565b600082601f830112610f6c57610f6b610e3f565b5b8135610f7c848260208601610f15565b91505092915050565b600067ffffffffffffffff821115610fa057610f9f610e5a565b5b610fa982610e49565b9050602081019050919050565b6000610fc9610fc484610f85565b610eba565b905082815260208101848484011115610fe557610fe4610e44565b5b610ff0848285610f06565b509392505050565b600082601f83011261100d5761100c610e3f565b5b813561101d848260208601610fb6565b91505092915050565b600080600080600060a0868803121561104257611041610da1565b5b600061105088828901610df4565b955050602061106188828901610e2a565b945050604086013567ffffffffffffffff81111561108257611081610da6565b5b61108e88828901610f57565b935050606086013567ffffffffffffffff8111156110af576110ae610da6565b5b6110bb88828901610ff8565b92505060806110cc88828901610e2a565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b60005b838110156111135780820151818401526020810190506110f8565b83811115611122576000848401525b50505050565b6000611133826110d9565b61113d81856110e4565b935061114d8185602086016110f5565b61115681610e49565b840191505092915050565b6000602082019050818103600083015261117b8184611128565b905092915050565b61118c81610dcb565b82525050565b60006020820190506111a76000830184611183565b92915050565b6000819050919050565b6111c0816111ad565b82525050565b60006020820190506111db60008301846111b7565b92915050565b6000602082840312156111f7576111f6610da1565b5b600061120584828501610df4565b91505092915050565b61121781610e09565b82525050565b6000602082019050611232600083018461120e565b92915050565b60006020828403121561124e5761124d610da1565b5b600061125c84828501610e2a565b91505092915050565b61126e816111ad565b811461127957600080fd5b50565b60008135905061128b81611265565b92915050565b6000602082840312156112a7576112a6610da1565b5b60006112b58482850161127c565b91505092915050565b60008115159050919050565b6112d3816112be565b82525050565b60006020820190506112ee60008301846112ca565b92915050565b600082825260208201905092915050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160008201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000602082015250565b60006113616038836112f4565b915061136c82611305565b604082019050919050565b6000602082019050818103600083015261139081611354565b9050919050565b600081519050919050565b60006113ad82611397565b6113b781856112f4565b93506113c78185602086016110f5565b6113d081610e49565b840191505092915050565b600060a0820190506113f06000830188611183565b6113fd602083018761120e565b818103604083015261140f81866113a2565b905081810360608301526114238185611128565b9050611432608083018461120e565b9695505050505050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206861736e2774206265656e207175657565642e000000602082015250565b6000611498603d836112f4565b91506114a38261143c565b604082019050919050565b600060208201905081810360008301526114c78161148b565b9050919050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060208201527f6c6f636b2e000000000000000000000000000000000000000000000000000000604082015250565b60006115506045836112f4565b915061155b826114ce565b606082019050919050565b6000602082019050818103600083015261157f81611543565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c082610e09565b91506115cb83610e09565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611600576115ff611586565b5b828201905092915050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e206973207374616c652e00000000000000000000000000602082015250565b60006116676033836112f4565b91506116728261160b565b604082019050919050565b600060208201905081810360008301526116968161165a565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b6116e46116df8261169d565b6116c9565b82525050565b600081905092915050565b6000611700826110d9565b61170a81856116ea565b935061171a8185602086016110f5565b80840191505092915050565b600061173282856116d3565b60048201915061174282846116f5565b91508190509392505050565b600061175a82846116f5565b915081905092915050565b7f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260008201527f616e73616374696f6e20657865637574696f6e2072657665727465642e000000602082015250565b60006117c1603d836112f4565b91506117cc82611765565b604082019050919050565b600060208201905081810360008301526117f0816117b4565b9050919050565b600060808201905061180c600083018761120e565b818103602083015261181e81866113a2565b905081810360408301526118328185611128565b9050611841606083018461120e565b95945050505050565b7f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460008201527f20636f6d652066726f6d2070656e64696e6741646d696e2e0000000000000000602082015250565b60006118a66038836112f4565b91506118b18261184a565b604082019050919050565b600060208201905081810360008301526118d581611899565b9050919050565b7f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60008201527f206d75737420636f6d652066726f6d2061646d696e2e00000000000000000000602082015250565b60006119386036836112f4565b9150611943826118dc565b604082019050919050565b600060208201905081810360008301526119678161192b565b9050919050565b7f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960008201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360208201527f66792064656c61792e0000000000000000000000000000000000000000000000604082015250565b60006119f06049836112f4565b91506119fb8261196e565b606082019050919050565b60006020820190508181036000830152611a1f816119e3565b9050919050565b7f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060008201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e0000000000000000602082015250565b6000611a826038836112f4565b9150611a8d82611a26565b604082019050919050565b60006020820190508181036000830152611ab181611a75565b9050919050565b7f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60008201527f6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000000602082015250565b6000611b146037836112f4565b9150611b1f82611ab8565b604082019050919050565b60006020820190508181036000830152611b4381611b07565b9050919050565b7f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60008201527f6d652066726f6d2054696d656c6f636b2e000000000000000000000000000000602082015250565b6000611ba66031836112f4565b9150611bb182611b4a565b604082019050919050565b60006020820190508181036000830152611bd581611b99565b9050919050565b7f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560008201527f7863656564206d696e696d756d2064656c61792e000000000000000000000000602082015250565b6000611c386034836112f4565b9150611c4382611bdc565b604082019050919050565b60006020820190508181036000830152611c6781611c2b565b9050919050565b7f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60008201527f6f7420657863656564206d6178696d756d2064656c61792e0000000000000000602082015250565b6000611cca6038836112f4565b9150611cd582611c6e565b604082019050919050565b60006020820190508181036000830152611cf981611cbd565b905091905056fea2646970667358221220bbabdfb9040d905ad5f7bcef54cef4a310bd26b8337772fae12042f4ac77ca0d64736f6c63430008090033";

type CompTimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompTimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompTimelock__factory extends ContractFactory {
  constructor(...args: CompTimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CompTimelock";
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CompTimelock> {
    return super.deploy(
      admin_,
      delay_,
      overrides || {}
    ) as Promise<CompTimelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): CompTimelock {
    return super.attach(address) as CompTimelock;
  }
  connect(signer: Signer): CompTimelock__factory {
    return super.connect(signer) as CompTimelock__factory;
  }
  static readonly contractName: "CompTimelock";
  public readonly contractName: "CompTimelock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompTimelockInterface {
    return new utils.Interface(_abi) as CompTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompTimelock {
    return new Contract(address, _abi, signerOrProvider) as CompTimelock;
  }
}
