import { Signer, ContractFactory, Overrides, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VestingWallet, VestingWalletInterface } from "../VestingWallet";
declare type VestingWalletConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class VestingWallet__factory extends ContractFactory {
    constructor(...args: VestingWalletConstructorParams);
    deploy(beneficiaryAddress: string, startTimestamp: BigNumberish, durationSeconds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VestingWallet>;
    getDeployTransaction(beneficiaryAddress: string, startTimestamp: BigNumberish, durationSeconds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VestingWallet;
    connect(signer: Signer): VestingWallet__factory;
    static readonly contractName: "VestingWallet";
    readonly contractName: "VestingWallet";
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b50604051620014e9380380620014e98339818101604052810190620000379190620001ce565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a190620002b1565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508167ffffffffffffffff1660a08167ffffffffffffffff16815250508067ffffffffffffffff1660c08167ffffffffffffffff1681525050505050620002d3565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001518262000124565b9050919050565b620001638162000144565b81146200016f57600080fd5b50565b600081519050620001838162000158565b92915050565b600067ffffffffffffffff82169050919050565b620001a88162000189565b8114620001b457600080fd5b50565b600081519050620001c8816200019d565b92915050565b600080600060608486031215620001ea57620001e96200011f565b5b6000620001fa8682870162000172565b93505060206200020d86828701620001b7565b92505060406200022086828701620001b7565b9150509250925092565b600082825260208201905092915050565b7f56657374696e6757616c6c65743a2062656e6566696369617279206973207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b600062000299602a836200022a565b9150620002a6826200023b565b604082019050919050565b60006020820190508181036000830152620002cc816200028a565b9050919050565b60805160a05160c0516111e66200030360003960006102620152600061051a0152600061036f01526111e66000f3fe60806040526004361061008a5760003560e01c8063810ec23b11610059578063810ec23b1461015257806386d1a69f1461018f57806396132521146101a65780639852595c146101d1578063be9a65551461020e57610091565b80630a17b06b146100965780630fb5a6b4146100d357806319165587146100fe57806338af3eed1461012757610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610a1e565b610239565b6040516100ca9190610a64565b60405180910390f35b3480156100df57600080fd5b506100e861025e565b6040516100f59190610a64565b60405180910390f35b34801561010a57600080fd5b5061012560048036038101906101209190610add565b610290565b005b34801561013357600080fd5b5061013c61036b565b6040516101499190610b19565b60405180910390f35b34801561015e57600080fd5b5061017960048036038101906101749190610b34565b610393565b6040516101869190610a64565b60405180910390f35b34801561019b57600080fd5b506101a4610442565b005b3480156101b257600080fd5b506101bb6104c4565b6040516101c89190610a64565b60405180910390f35b3480156101dd57600080fd5b506101f860048036038101906101f39190610add565b6104cd565b6040516102059190610a64565b60405180910390f35b34801561021a57600080fd5b50610223610516565b6040516102309190610a64565b60405180910390f35b60006102576102466104c4565b476102519190610ba3565b83610548565b9050919050565b60007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16905090565b600061029b826104cd565b6102a58342610393565b6102af9190610bf9565b905080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103009190610ba3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff167fc0e523490dd523c33b1878c9eb14ff46991e3f5b2cd33710918618f2a39cba1b8260405161034d9190610a64565b60405180910390a26103678261036161036b565b836105e2565b5050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600061043a6103a1846104cd565b8473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103da9190610b19565b60206040518083038186803b1580156103f257600080fd5b505afa158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190610c59565b6104349190610ba3565b83610548565b905092915050565b600061044c6104c4565b61045542610239565b61045f9190610bf9565b9050806000808282546104729190610ba3565b925050819055507fda9d4e5f101b8b9b1c5b76d0c5a9f7923571acfc02376aa076b75a8c080c956b816040516104a89190610a64565b60405180910390a16104c16104bb61036b565b82610668565b50565b60008054905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60007f000000000000000000000000000000000000000000000000000000000000000067ffffffffffffffff16905090565b6000610552610516565b8267ffffffffffffffff16101561056c57600090506105dc565b61057461025e565b61057c610516565b6105869190610ba3565b8267ffffffffffffffff16111561059f578290506105dc565b6105a761025e565b6105af610516565b8367ffffffffffffffff166105c49190610bf9565b846105cf9190610c86565b6105d99190610d0f565b90505b92915050565b6106638363a9059cbb60e01b8484604051602401610601929190610d40565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061075c565b505050565b804710156106ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a290610dc6565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516106d190610e17565b60006040518083038185875af1925050503d806000811461070e576040519150601f19603f3d011682016040523d82523d6000602084013e610713565b606091505b5050905080610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e90610e9e565b60405180910390fd5b505050565b60006107be826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166108239092919063ffffffff16565b905060008151111561081e57808060200190518101906107de9190610ef6565b61081d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081490610f95565b60405180910390fd5b5b505050565b6060610832848460008561083b565b90509392505050565b606082471015610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087790611027565b60405180910390fd5b6108898561094f565b6108c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bf90611093565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108f19190611122565b60006040518083038185875af1925050503d806000811461092e576040519150601f19603f3d011682016040523d82523d6000602084013e610933565b606091505b5091509150610943828286610972565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60608315610982578290506109d2565b6000835111156109955782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c9919061118e565b60405180910390fd5b9392505050565b600080fd5b600067ffffffffffffffff82169050919050565b6109fb816109de565b8114610a0657600080fd5b50565b600081359050610a18816109f2565b92915050565b600060208284031215610a3457610a336109d9565b5b6000610a4284828501610a09565b91505092915050565b6000819050919050565b610a5e81610a4b565b82525050565b6000602082019050610a796000830184610a55565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aaa82610a7f565b9050919050565b610aba81610a9f565b8114610ac557600080fd5b50565b600081359050610ad781610ab1565b92915050565b600060208284031215610af357610af26109d9565b5b6000610b0184828501610ac8565b91505092915050565b610b1381610a9f565b82525050565b6000602082019050610b2e6000830184610b0a565b92915050565b60008060408385031215610b4b57610b4a6109d9565b5b6000610b5985828601610ac8565b9250506020610b6a85828601610a09565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bae82610a4b565b9150610bb983610a4b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bee57610bed610b74565b5b828201905092915050565b6000610c0482610a4b565b9150610c0f83610a4b565b925082821015610c2257610c21610b74565b5b828203905092915050565b610c3681610a4b565b8114610c4157600080fd5b50565b600081519050610c5381610c2d565b92915050565b600060208284031215610c6f57610c6e6109d9565b5b6000610c7d84828501610c44565b91505092915050565b6000610c9182610a4b565b9150610c9c83610a4b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610cd557610cd4610b74565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d1a82610a4b565b9150610d2583610a4b565b925082610d3557610d34610ce0565b5b828204905092915050565b6000604082019050610d556000830185610b0a565b610d626020830184610a55565b9392505050565b600082825260208201905092915050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000610db0601d83610d69565b9150610dbb82610d7a565b602082019050919050565b60006020820190508181036000830152610ddf81610da3565b9050919050565b600081905092915050565b50565b6000610e01600083610de6565b9150610e0c82610df1565b600082019050919050565b6000610e2282610df4565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000610e88603a83610d69565b9150610e9382610e2c565b604082019050919050565b60006020820190508181036000830152610eb781610e7b565b9050919050565b60008115159050919050565b610ed381610ebe565b8114610ede57600080fd5b50565b600081519050610ef081610eca565b92915050565b600060208284031215610f0c57610f0b6109d9565b5b6000610f1a84828501610ee1565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000610f7f602a83610d69565b9150610f8a82610f23565b604082019050919050565b60006020820190508181036000830152610fae81610f72565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611011602683610d69565b915061101c82610fb5565b604082019050919050565b6000602082019050818103600083015261104081611004565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600061107d601d83610d69565b915061108882611047565b602082019050919050565b600060208201905081810360008301526110ac81611070565b9050919050565b600081519050919050565b60005b838110156110dc5780820151818401526020810190506110c1565b838111156110eb576000848401525b50505050565b60006110fc826110b3565b6111068185610de6565b93506111168185602086016110be565b80840191505092915050565b600061112e82846110f1565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b600061116082611139565b61116a8185610d69565b935061117a8185602086016110be565b61118381611144565b840191505092915050565b600060208201905081810360008301526111a88184611155565b90509291505056fea2646970667358221220114a0f1f4ced54c7b692016e8e98da6807fe009cf4638cd99d329510c7b04fc064736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): VestingWalletInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VestingWallet;
}
export {};