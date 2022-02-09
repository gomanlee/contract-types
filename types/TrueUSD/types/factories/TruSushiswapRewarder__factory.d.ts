import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TruSushiswapRewarder } from "../TruSushiswapRewarder";
export declare class TruSushiswapRewarder__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TruSushiswapRewarder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TruSushiswapRewarder;
    connect(signer: Signer): TruSushiswapRewarder__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TruSushiswapRewarder;
}
