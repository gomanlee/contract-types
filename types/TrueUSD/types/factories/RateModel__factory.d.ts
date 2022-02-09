import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RateModel } from "../RateModel";
export declare class RateModel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RateModel>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RateModel;
    connect(signer: Signer): RateModel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RateModel;
}
