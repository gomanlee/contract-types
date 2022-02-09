import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolFactory } from "../PoolFactory";
export declare class PoolFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolFactory;
    connect(signer: Signer): PoolFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolFactory;
}
