import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadStrategy } from "../BadStrategy";
export declare class BadStrategy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_token: string, _pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BadStrategy>;
    getDeployTransaction(_token: string, _pool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BadStrategy;
    connect(signer: Signer): BadStrategy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BadStrategy;
}
