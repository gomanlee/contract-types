import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCurvePool } from "../MockCurvePool";
export declare class MockCurvePool__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockCurvePool>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockCurvePool;
    connect(signer: Signer): MockCurvePool__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCurvePool;
}
