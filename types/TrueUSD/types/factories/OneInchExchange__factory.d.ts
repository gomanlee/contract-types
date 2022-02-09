import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OneInchExchange } from "../OneInchExchange";
export declare class OneInchExchange__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OneInchExchange>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OneInchExchange;
    connect(signer: Signer): OneInchExchange__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OneInchExchange;
}
