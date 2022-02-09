import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenFaucet } from "../TokenFaucet";
export declare class TokenFaucet__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TokenFaucet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TokenFaucet;
    connect(signer: Signer): TokenFaucet__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenFaucet;
}
