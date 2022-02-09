import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JugLike, JugLikeInterface } from "../JugLike";
declare type JugLikeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class JugLike__factory extends ContractFactory {
    constructor(...args: JugLikeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<JugLike>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): JugLike;
    connect(signer: Signer): JugLike__factory;
    static readonly contractName: "JugLike";
    readonly contractName: "JugLike";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060d68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80635001f3b5146037578063d9638d3614604f575b600080fd5b603d6082565b60408051918252519081900360200190f35b606960048036036020811015606357600080fd5b50356088565b6040805192835260208301919091528051918290030190f35b60015481565b600060208190529081526040902080546001909101548256fea265627a7a723158200f10bdf273c4ae6e0895e24b6f92bdb30dce8bc262688254ba99e09af4b472d864736f6c63430005100032";
    static readonly abi: {
        constant: boolean;
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
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): JugLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): JugLike;
}
export {};
