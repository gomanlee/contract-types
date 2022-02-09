import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueGold } from "../TrueGold";
export declare class TrueGold__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueGold>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueGold;
    connect(signer: Signer): TrueGold__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueGold;
}
