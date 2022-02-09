import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFiPool } from "../TrueFiPool";
export declare class TrueFiPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFiPool>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFiPool;
    connect(signer: Signer): TrueFiPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFiPool;
}
