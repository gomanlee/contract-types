import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTrueRatingAgencyV2 } from "../TestTrueRatingAgencyV2";
export declare class TestTrueRatingAgencyV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTrueRatingAgencyV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTrueRatingAgencyV2;
    connect(signer: Signer): TestTrueRatingAgencyV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTrueRatingAgencyV2;
}
