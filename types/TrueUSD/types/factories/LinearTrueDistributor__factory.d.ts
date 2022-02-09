import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LinearTrueDistributor } from "../LinearTrueDistributor";
export declare class LinearTrueDistributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LinearTrueDistributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LinearTrueDistributor;
    connect(signer: Signer): LinearTrueDistributor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LinearTrueDistributor;
}
