import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockTrueCurrency } from "../MockTrueCurrency";
export declare class MockTrueCurrency__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockTrueCurrency>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockTrueCurrency;
    connect(signer: Signer): MockTrueCurrency__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTrueCurrency;
}
