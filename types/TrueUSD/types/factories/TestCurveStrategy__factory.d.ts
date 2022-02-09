import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCurveStrategy } from "../TestCurveStrategy";
export declare class TestCurveStrategy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestCurveStrategy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestCurveStrategy;
    connect(signer: Signer): TestCurveStrategy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCurveStrategy;
}
