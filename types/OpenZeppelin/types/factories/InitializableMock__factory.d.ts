import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InitializableMock, InitializableMockInterface } from "../InitializableMock";
declare type InitializableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InitializableMock__factory extends ContractFactory {
    constructor(...args: InitializableMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<InitializableMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): InitializableMock;
    connect(signer: Signer): InitializableMock__factory;
    static readonly contractName: "InitializableMock";
    readonly contractName: "InitializableMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061093c806100206000396000f3fe6080604052600436106100905760003560e01c80637cffe97a116100595780637cffe97a146101215780638129fc1c1461014c578063a9cc471814610163578063c3b8ef2a1461017a578063e955c9ec146101a557610090565b806218eaa8146100955780630c55699c146100b157806310065ed2146100dc57806368449d1b146100f357806376268ae81461010a575b600080fd5b6100af60048036038101906100aa91906106d8565b6101c1565b005b3480156100bd57600080fd5b506100c66102ad565b6040516100d39190610714565b60405180910390f35b3480156100e857600080fd5b506100f16102b3565b005b3480156100ff57600080fd5b5061010861031f565b005b34801561011657600080fd5b5061011f61040b565b005b34801561012d57600080fd5b506101366104f7565b604051610143919061074a565b60405180910390f35b34801561015857600080fd5b5061016161050a565b005b34801561016f57600080fd5b50610178610609565b005b34801561018657600080fd5b5061018f61064c565b60405161019c919061074a565b60405180910390f35b6101bf60048036038101906101ba91906106d8565b61065f565b005b600060019054906101000a900460ff166101e95760008054906101000a900460ff16156101f2565b6101f1610669565b5b610231576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610228906107e8565b60405180910390fd5b60008060019054906101000a900460ff161590508015610281576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8160018190555080156102a95760008060016101000a81548160ff0219169083151502179055505b5050565b60015481565b600060019054906101000a900460ff16610302576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f99061087a565b60405180910390fd5b6001600060036101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff166103475760008054906101000a900460ff1615610350565b61034f610669565b5b61038f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610386906107e8565b60405180910390fd5b60008060019054906101000a900460ff1615905080156103df576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6103e76102b3565b80156104085760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff166104335760008054906101000a900460ff161561043c565b61043b610669565b5b61047b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610472906107e8565b60405180910390fd5b60008060019054906101000a900460ff1615905080156104cb576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6104d361050a565b80156104f45760008060016101000a81548160ff0219169083151502179055505b50565b600060039054906101000a900460ff1681565b600060019054906101000a900460ff166105325760008054906101000a900460ff161561053b565b61053a610669565b5b61057a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610571906107e8565b60405180910390fd5b60008060019054906101000a900460ff1615905080156105ca576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6001600060026101000a81548160ff02191690831515021790555080156106065760008060016101000a81548160ff0219169083151502179055505b50565b600061064a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610641906108e6565b60405180910390fd5b565b600060029054906101000a900460ff1681565b8060018190555050565b60006106743061067a565b15905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080fd5b6000819050919050565b6106b5816106a2565b81146106c057600080fd5b50565b6000813590506106d2816106ac565b92915050565b6000602082840312156106ee576106ed61069d565b5b60006106fc848285016106c3565b91505092915050565b61070e816106a2565b82525050565b60006020820190506107296000830184610705565b92915050565b60008115159050919050565b6107448161072f565b82525050565b600060208201905061075f600083018461073b565b92915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006107d2602e83610765565b91506107dd82610776565b604082019050919050565b60006020820190508181036000830152610801816107c5565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000610864602b83610765565b915061086f82610808565b604082019050919050565b6000602082019050818103600083015261089381610857565b9050919050565b7f496e697469616c697a61626c654d6f636b20666f72636564206661696c757265600082015250565b60006108d0602083610765565b91506108db8261089a565b602082019050919050565b600060208201905081810360008301526108ff816108c3565b905091905056fea26469706673582212209eb2210e154bc1968e5cdbbbe6bed1e4543075a1a7641eae2241ab4ee4fdb4a764736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): InitializableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InitializableMock;
}
export {};
