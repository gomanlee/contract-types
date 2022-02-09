import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueAud } from "../TrueAud";
export declare class TrueAud__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueAud>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueAud;
    connect(signer: Signer): TrueAud__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueAud;
}
