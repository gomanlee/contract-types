import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCurveGauge } from "../MockCurveGauge";
export declare class MockCurveGauge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockCurveGauge>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockCurveGauge;
    connect(signer: Signer): MockCurveGauge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockCurveGauge;
}
