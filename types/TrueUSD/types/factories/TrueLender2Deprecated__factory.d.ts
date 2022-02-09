import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueLender2Deprecated } from "../TrueLender2Deprecated";
export declare class TrueLender2Deprecated__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueLender2Deprecated>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueLender2Deprecated;
    connect(signer: Signer): TrueLender2Deprecated__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueLender2Deprecated;
}
