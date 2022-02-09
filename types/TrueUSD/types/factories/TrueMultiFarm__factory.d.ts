import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueMultiFarm } from "../TrueMultiFarm";
export declare class TrueMultiFarm__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueMultiFarm>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueMultiFarm;
    connect(signer: Signer): TrueMultiFarm__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueMultiFarm;
}
