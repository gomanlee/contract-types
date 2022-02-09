import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StringReturn } from "../StringReturn";
export declare class StringReturn__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StringReturn>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StringReturn;
    connect(signer: Signer): StringReturn__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StringReturn;
}
