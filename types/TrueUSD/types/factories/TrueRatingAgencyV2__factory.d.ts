import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueRatingAgencyV2 } from "../TrueRatingAgencyV2";
export declare class TrueRatingAgencyV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueRatingAgencyV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueRatingAgencyV2;
    connect(signer: Signer): TrueRatingAgencyV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueRatingAgencyV2;
}
