import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueGbp } from "../TrueGbp";
export declare class TrueGbp__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueGbp>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueGbp;
    connect(signer: Signer): TrueGbp__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueGbp;
}
