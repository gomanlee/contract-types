import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Implementation4, Implementation4Interface } from "../Implementation4";
declare type Implementation4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Implementation4__factory extends ContractFactory {
    constructor(...args: Implementation4ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Implementation4>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Implementation4;
    connect(signer: Signer): Implementation4__factory;
    static readonly contractName: "Implementation4";
    readonly contractName: "Implementation4";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061032a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100455760003560e01c8063209652551461004f578063552410771461006d5780638129fc1c1461008957610046565b5b60018081905550005b610057610093565b60405161006491906101d8565b60405180910390f35b61008760048036038101906100829190610224565b61009d565b005b6100916100a7565b005b6000600154905090565b8060018190555050565b600060019054906101000a900460ff166100cf5760008054906101000a900460ff16156100d8565b6100d761018b565b5b610117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010e906102d4565b60405180910390fd5b60008060019054906101000a900460ff161590508015610167576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156101885760008060016101000a81548160ff0219169083151502179055505b50565b60006101963061019c565b15905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b6101d2816101bf565b82525050565b60006020820190506101ed60008301846101c9565b92915050565b600080fd5b610201816101bf565b811461020c57600080fd5b50565b60008135905061021e816101f8565b92915050565b60006020828403121561023a576102396101f3565b5b60006102488482850161020f565b91505092915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006102be602e83610251565b91506102c982610262565b604082019050919050565b600060208201905081810360008301526102ed816102b1565b905091905056fea26469706673582212207a7a775a48c6e35d6b0bfa7b77e5753911032ab240391a81f8e21d1e63139c7c64736f6c63430008090033";
    static readonly abi: ({
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): Implementation4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Implementation4;
}
export {};
