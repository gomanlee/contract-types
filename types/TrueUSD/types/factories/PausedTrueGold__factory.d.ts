import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PausedTrueGold } from "../PausedTrueGold";
export declare class PausedTrueGold__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PausedTrueGold>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PausedTrueGold;
    connect(signer: Signer): PausedTrueGold__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PausedTrueGold;
}
