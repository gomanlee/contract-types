import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165Mock, ERC165MockInterface } from "../ERC165Mock";
declare type ERC165MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC165Mock__factory extends ContractFactory {
    constructor(...args: ERC165MockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165Mock;
    connect(signer: Signer): ERC165Mock__factory;
    static readonly contractName: "ERC165Mock";
    readonly contractName: "ERC165Mock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101c0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806301ffc9a714610030575b600080fd5b61004a60048036038101906100459190610127565b610060565b604051610057919061016f565b60405180910390f35b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610104816100cf565b811461010f57600080fd5b50565b600081359050610121816100fb565b92915050565b60006020828403121561013d5761013c6100ca565b5b600061014b84828501610112565b91505092915050565b60008115159050919050565b61016981610154565b82525050565b60006020820190506101846000830184610160565b9291505056fea2646970667358221220b000d88b0e0d58f3858bff02b3695a1a96b6e76eb910f13650574cc52e6c699564736f6c63430008090033";
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
    static createInterface(): ERC165MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165Mock;
}
export {};
