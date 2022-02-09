import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueCad } from "../TrueCad";
export declare class TrueCad__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueCad>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueCad;
    connect(signer: Signer): TrueCad__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueCad;
}
