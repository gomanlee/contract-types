import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueCurrencyWithAutosweep } from "../MockTrueCurrencyWithAutosweep";
export declare class MockTrueCurrencyWithAutosweep__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueCurrencyWithAutosweep>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueCurrencyWithAutosweep;
    connect(signer: Signer): MockTrueCurrencyWithAutosweep__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueCurrencyWithAutosweep;
}
