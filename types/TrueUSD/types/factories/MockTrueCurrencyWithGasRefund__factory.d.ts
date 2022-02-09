import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueCurrencyWithGasRefund } from "../MockTrueCurrencyWithGasRefund";
export declare class MockTrueCurrencyWithGasRefund__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueCurrencyWithGasRefund>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueCurrencyWithGasRefund;
    connect(signer: Signer): MockTrueCurrencyWithGasRefund__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueCurrencyWithGasRefund;
}
