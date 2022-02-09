import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PowTest } from "../PowTest";
export declare class PowTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PowTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PowTest;
    connect(signer: Signer): PowTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PowTest;
}
