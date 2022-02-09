import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueGoldController } from "../TrueGoldController";
export declare class TrueGoldController__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueGoldController>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueGoldController;
    connect(signer: Signer): TrueGoldController__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueGoldController;
}
