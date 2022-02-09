import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCurve } from "../MockCurve";
export declare class MockCurve__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockCurve>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockCurve;
    connect(signer: Signer): MockCurve__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCurve;
}
