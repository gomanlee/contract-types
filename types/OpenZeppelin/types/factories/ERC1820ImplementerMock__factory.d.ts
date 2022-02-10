import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1820ImplementerMock, ERC1820ImplementerMockInterface } from "../ERC1820ImplementerMock";
declare type ERC1820ImplementerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1820ImplementerMock__factory extends ContractFactory {
    constructor(...args: ERC1820ImplementerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1820ImplementerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1820ImplementerMock;
    connect(signer: Signer): ERC1820ImplementerMock__factory;
    static readonly contractName: "ERC1820ImplementerMock";
    readonly contractName: "ERC1820ImplementerMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506102d0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063249cb3fa1461003b5780635536e45d1461006b575b600080fd5b61005560048036038101906100509190610230565b610087565b604051610062919061027f565b60405180910390f35b61008560048036038101906100809190610230565b61011d565b005b600080600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166100f3576000801b610115565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b905092915050565b610127828261012b565b5050565b600160008084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080fd5b6000819050919050565b6101af8161019c565b81146101ba57600080fd5b50565b6000813590506101cc816101a6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101fd826101d2565b9050919050565b61020d816101f2565b811461021857600080fd5b50565b60008135905061022a81610204565b92915050565b6000806040838503121561024757610246610197565b5b6000610255858286016101bd565b92505060206102668582860161021b565b9150509250929050565b6102798161019c565b82525050565b60006020820190506102946000830184610270565b9291505056fea2646970667358221220df6b0a863fd6a9c201611ba635968356db1dd8fef4475a187957cd76486e318864736f6c63430008090033";
    static readonly abi: {
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
    }[];
    static createInterface(): ERC1820ImplementerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1820ImplementerMock;
}
export {};
