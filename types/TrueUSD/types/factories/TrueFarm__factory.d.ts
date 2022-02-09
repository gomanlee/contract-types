import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFarm } from "../TrueFarm";
export declare class TrueFarm__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFarm>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFarm;
    connect(signer: Signer): TrueFarm__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFarm;
}
