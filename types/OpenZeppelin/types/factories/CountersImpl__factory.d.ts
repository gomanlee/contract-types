import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CountersImpl, CountersImplInterface } from "../CountersImpl";
declare type CountersImplConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CountersImpl__factory extends ContractFactory {
    constructor(...args: CountersImplConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CountersImpl>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CountersImpl;
    connect(signer: Signer): CountersImpl__factory;
    static readonly contractName: "CountersImpl";
    readonly contractName: "CountersImpl";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610236806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632baeceb7146100515780639fa6a6e31461005b578063d09de08a14610079578063d826f88f14610083575b600080fd5b61005961008d565b005b610063610099565b6040516100709190610168565b60405180910390f35b6100816100aa565b005b61008b6100b6565b005b61009760006100c2565b565b60006100a5600061011e565b905090565b6100b4600061012c565b565b6100c06000610142565b565b6000816000015490506000811161010e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610105906101e0565b60405180910390fd5b6001810382600001819055505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b6000819050919050565b6101628161014f565b82525050565b600060208201905061017d6000830184610159565b92915050565b600082825260208201905092915050565b7f436f756e7465723a2064656372656d656e74206f766572666c6f770000000000600082015250565b60006101ca601b83610183565b91506101d582610194565b602082019050919050565b600060208201905081810360008301526101f9816101bd565b905091905056fea26469706673582212200e823a191ce6f1c40186b3ddfb56b73ccc9b9f8c74c47f362240b7b49851b02f64736f6c63430008090033";
    static readonly abi: {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): CountersImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CountersImpl;
}
export {};
