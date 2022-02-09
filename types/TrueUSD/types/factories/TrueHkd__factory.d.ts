import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueHkd } from "../TrueHkd";
export declare class TrueHkd__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueHkd>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueHkd;
    connect(signer: Signer): TrueHkd__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueHkd;
}
