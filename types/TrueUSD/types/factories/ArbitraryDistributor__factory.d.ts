import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ArbitraryDistributor } from "../ArbitraryDistributor";
export declare class ArbitraryDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ArbitraryDistributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ArbitraryDistributor;
    connect(signer: Signer): ArbitraryDistributor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitraryDistributor;
}
