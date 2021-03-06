import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GovernorAlpha } from "../GovernorAlpha";
export declare class GovernorAlpha__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<GovernorAlpha>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): GovernorAlpha;
    connect(signer: Signer): GovernorAlpha__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorAlpha;
}
