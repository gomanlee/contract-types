import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TruPriceOracle } from "../TruPriceOracle";
export declare class TruPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TruPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TruPriceOracle;
    connect(signer: Signer): TruPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TruPriceOracle;
}
