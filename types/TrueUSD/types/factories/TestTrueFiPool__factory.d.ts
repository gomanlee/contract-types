import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTrueFiPool } from "../TestTrueFiPool";
export declare class TestTrueFiPool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTrueFiPool>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTrueFiPool;
    connect(signer: Signer): TestTrueFiPool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTrueFiPool;
}
