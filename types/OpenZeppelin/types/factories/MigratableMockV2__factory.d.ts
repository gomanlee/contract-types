import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MigratableMockV2, MigratableMockV2Interface } from "../MigratableMockV2";
declare type MigratableMockV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MigratableMockV2__factory extends ContractFactory {
    constructor(...args: MigratableMockV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MigratableMockV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MigratableMockV2;
    connect(signer: Signer): MigratableMockV2__factory;
    static readonly contractName: "MigratableMockV2";
    readonly contractName: "MigratableMockV2";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103f0806100206000396000f3fe60806040526004361061003f5760003560e01c80630c55699c146100445780633e54bacb1461006f578063a56dfe4a1461008b578063fe4b84df146100b6575b600080fd5b34801561005057600080fd5b506100596100d2565b604051610066919061025e565b60405180910390f35b610089600480360381019061008491906102aa565b6100d8565b005b34801561009757600080fd5b506100a061011f565b6040516100ad919061025e565b60405180910390f35b6100d060048036038101906100cb91906102ea565b610125565b005b60015481565b600260009054906101000a900460ff16156100f257600080fd5b81600181905550806003819055506001600260006101000a81548160ff0219169083151502179055505050565b60035481565b600060019054906101000a900460ff1661014d5760008054906101000a900460ff1615610156565b610155610211565b5b610195576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018c9061039a565b60405180910390fd5b60008060019054906101000a900460ff1615905080156101e5576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b81600181905550801561020d5760008060016101000a81548160ff0219169083151502179055505b5050565b600061021c30610222565b15905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b61025881610245565b82525050565b6000602082019050610273600083018461024f565b92915050565b600080fd5b61028781610245565b811461029257600080fd5b50565b6000813590506102a48161027e565b92915050565b600080604083850312156102c1576102c0610279565b5b60006102cf85828601610295565b92505060206102e085828601610295565b9150509250929050565b600060208284031215610300576102ff610279565b5b600061030e84828501610295565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610384602e83610317565b915061038f82610328565b604082019050919050565b600060208201905081810360008301526103b381610377565b905091905056fea2646970667358221220f3a01be1a723def214b99ee4f56093b9281b13ec3f7294f9cbaaa12230d8bacf64736f6c63430008090033";
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
    static createInterface(): MigratableMockV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MigratableMockV2;
}
export {};