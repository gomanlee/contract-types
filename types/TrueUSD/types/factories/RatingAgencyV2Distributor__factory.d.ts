import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RatingAgencyV2Distributor } from "../RatingAgencyV2Distributor";
export declare class RatingAgencyV2Distributor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RatingAgencyV2Distributor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RatingAgencyV2Distributor;
    connect(signer: Signer): RatingAgencyV2Distributor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RatingAgencyV2Distributor;
}
