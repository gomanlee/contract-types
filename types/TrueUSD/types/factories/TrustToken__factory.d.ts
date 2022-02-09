import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrustToken } from "../TrustToken";
export declare class TrustToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrustToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrustToken;
    connect(signer: Signer): TrustToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrustToken;
}
