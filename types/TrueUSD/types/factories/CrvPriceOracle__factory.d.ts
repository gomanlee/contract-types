import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CrvPriceOracle } from "../CrvPriceOracle";
export declare class CrvPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CrvPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CrvPriceOracle;
    connect(signer: Signer): CrvPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CrvPriceOracle;
}
