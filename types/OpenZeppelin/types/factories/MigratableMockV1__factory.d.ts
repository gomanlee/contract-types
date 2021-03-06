import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MigratableMockV1, MigratableMockV1Interface } from "../MigratableMockV1";
declare type MigratableMockV1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MigratableMockV1__factory extends ContractFactory {
    constructor(...args: MigratableMockV1ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MigratableMockV1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MigratableMockV1;
    connect(signer: Signer): MigratableMockV1__factory;
    static readonly contractName: "MigratableMockV1";
    readonly contractName: "MigratableMockV1";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610306806100206000396000f3fe6080604052600436106100295760003560e01c80630c55699c1461002e578063fe4b84df14610059575b600080fd5b34801561003a57600080fd5b50610043610075565b60405161005091906101b4565b60405180910390f35b610073600480360381019061006e9190610200565b61007b565b005b60015481565b600060019054906101000a900460ff166100a35760008054906101000a900460ff16156100ac565b6100ab610167565b5b6100eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e2906102b0565b60405180910390fd5b60008060019054906101000a900460ff16159050801561013b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8160018190555080156101635760008060016101000a81548160ff0219169083151502179055505b5050565b600061017230610178565b15905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b6101ae8161019b565b82525050565b60006020820190506101c960008301846101a5565b92915050565b600080fd5b6101dd8161019b565b81146101e857600080fd5b50565b6000813590506101fa816101d4565b92915050565b600060208284031215610216576102156101cf565b5b6000610224848285016101eb565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061029a602e8361022d565b91506102a58261023e565b604082019050919050565b600060208201905081810360008301526102c98161028d565b905091905056fea264697066735822122045bb2b956c74fdf8586042976546b3525c52072df528bdda4094df3240ad033e64736f6c63430008090033";
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
    static createInterface(): MigratableMockV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MigratableMockV1;
}
export {};
