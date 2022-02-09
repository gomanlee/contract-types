import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenController } from "../TokenController";
export declare class TokenController__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenController>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenController;
    connect(signer: Signer): TokenController__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenController;
}
