import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UUPSUpgradeableMock, UUPSUpgradeableMockInterface } from "../UUPSUpgradeableMock";
declare type UUPSUpgradeableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UUPSUpgradeableMock__factory extends ContractFactory {
    constructor(...args: UUPSUpgradeableMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UUPSUpgradeableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UUPSUpgradeableMock;
    connect(signer: Signer): UUPSUpgradeableMock__factory;
    static readonly contractName: "UUPSUpgradeableMock";
    readonly contractName: "UUPSUpgradeableMock";
    static readonly bytecode = "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161130a61007b60003960008181610163015281816101f2015281816102ec0152818161037b015261042b015261130a6000f3fe6080604052600436106100705760003560e01c806352d1902d1161004e57806352d1902d146100d15780639fa6a6e3146100fc578063d09de08a14610127578063d826f88f1461013e57610070565b80632baeceb7146100755780633659cfe61461008c5780634f1ef286146100b5575b600080fd5b34801561008157600080fd5b5061008a610155565b005b34801561009857600080fd5b506100b360048036038101906100ae9190610aab565b610161565b005b6100cf60048036038101906100ca9190610c1e565b6102ea565b005b3480156100dd57600080fd5b506100e6610427565b6040516100f39190610c93565b60405180910390f35b34801561010857600080fd5b506101116104e0565b60405161011e9190610cc7565b60405180910390f35b34801561013357600080fd5b5061013c6104f1565b005b34801561014a57600080fd5b506101536104fd565b005b61015f6000610509565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614156101f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e790610d65565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661022f610565565b73ffffffffffffffffffffffffffffffffffffffff1614610285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027c90610df7565b60405180910390fd5b61028e816105bc565b6102e781600067ffffffffffffffff8111156102ad576102ac610af3565b5b6040519080825280601f01601f1916602001820160405280156102df5781602001600182028036833780820191505090505b5060006105bf565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161415610379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037090610d65565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166103b8610565565b73ffffffffffffffffffffffffffffffffffffffff161461040e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040590610df7565b60405180910390fd5b610417826105bc565b610423828260016105bf565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16146104b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ae90610e89565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b60006104ec600061073c565b905090565b6104fb600061074a565b565b6105076000610760565b565b60008160000154905060008111610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054c90610ef5565b60405180910390fd5b6001810382600001819055505050565b60006105937f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61076d565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b6105eb7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b610777565b60000160009054906101000a900460ff161561060f5761060a83610781565b610737565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561065557600080fd5b505afa92505050801561068657506040513d601f19601f820116820180604052508101906106839190610f41565b60015b6106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc90610fe0565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461072a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072190611072565b60405180910390fd5b5061073683838361083a565b5b505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b6000819050919050565b6000819050919050565b61078a81610866565b6107c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c090611104565b60405180910390fd5b806107f67f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61076d565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61084383610889565b6000825111806108505750805b156108615761085f83836108d8565b505b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b61089281610781565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606108fd83836040518060600160405280602781526020016112ae60279139610905565b905092915050565b606061091084610866565b61094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094690611196565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516109779190611230565b600060405180830381855af49150503d80600081146109b2576040519150601f19603f3d011682016040523d82523d6000602084013e6109b7565b606091505b50915091506109c78282866109d2565b925050509392505050565b606083156109e257829050610a32565b6000835111156109f55782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a29919061128b565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a7882610a4d565b9050919050565b610a8881610a6d565b8114610a9357600080fd5b50565b600081359050610aa581610a7f565b92915050565b600060208284031215610ac157610ac0610a43565b5b6000610acf84828501610a96565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b2b82610ae2565b810181811067ffffffffffffffff82111715610b4a57610b49610af3565b5b80604052505050565b6000610b5d610a39565b9050610b698282610b22565b919050565b600067ffffffffffffffff821115610b8957610b88610af3565b5b610b9282610ae2565b9050602081019050919050565b82818337600083830152505050565b6000610bc1610bbc84610b6e565b610b53565b905082815260208101848484011115610bdd57610bdc610add565b5b610be8848285610b9f565b509392505050565b600082601f830112610c0557610c04610ad8565b5b8135610c15848260208601610bae565b91505092915050565b60008060408385031215610c3557610c34610a43565b5b6000610c4385828601610a96565b925050602083013567ffffffffffffffff811115610c6457610c63610a48565b5b610c7085828601610bf0565b9150509250929050565b6000819050919050565b610c8d81610c7a565b82525050565b6000602082019050610ca86000830184610c84565b92915050565b6000819050919050565b610cc181610cae565b82525050565b6000602082019050610cdc6000830184610cb8565b92915050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000610d4f602c83610ce2565b9150610d5a82610cf3565b604082019050919050565b60006020820190508181036000830152610d7e81610d42565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000610de1602c83610ce2565b9150610dec82610d85565b604082019050919050565b60006020820190508181036000830152610e1081610dd4565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000610e73603883610ce2565b9150610e7e82610e17565b604082019050919050565b60006020820190508181036000830152610ea281610e66565b9050919050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b6000610edf601b83610ce2565b9150610eea82610ea9565b602082019050919050565b60006020820190508181036000830152610f0e81610ed2565b9050919050565b610f1e81610c7a565b8114610f2957600080fd5b50565b600081519050610f3b81610f15565b92915050565b600060208284031215610f5757610f56610a43565b5b6000610f6584828501610f2c565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000610fca602e83610ce2565b9150610fd582610f6e565b604082019050919050565b60006020820190508181036000830152610ff981610fbd565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b600061105c602983610ce2565b915061106782611000565b604082019050919050565b6000602082019050818103600083015261108b8161104f565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006110ee602d83610ce2565b91506110f982611092565b604082019050919050565b6000602082019050818103600083015261111d816110e1565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b6000611180602683610ce2565b915061118b82611124565b604082019050919050565b600060208201905081810360008301526111af81611173565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156111ea5780820151818401526020810190506111cf565b838111156111f9576000848401525b50505050565b600061120a826111b6565b61121481856111c1565b93506112248185602086016111cc565b80840191505092915050565b600061123c82846111ff565b915081905092915050565b600081519050919050565b600061125d82611247565b6112678185610ce2565b93506112778185602086016111cc565b61128081610ae2565b840191505092915050565b600060208201905081810360008301526112a58184611252565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212203fc18fce0fd95a46c883ea22aafa1145d57f0a1584074638a5c2ac1d08f38bf964736f6c63430008090033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UUPSUpgradeableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UUPSUpgradeableMock;
}
export {};
