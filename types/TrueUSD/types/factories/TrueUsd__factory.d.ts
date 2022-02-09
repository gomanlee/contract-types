import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueUsd } from "../TrueUsd";
export declare class TrueUsd__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueUsd>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueUsd;
    connect(signer: Signer): TrueUsd__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueUsd;
}
