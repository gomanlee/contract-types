import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AvalancheTokenController } from "../AvalancheTokenController";
export declare class AvalancheTokenController__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AvalancheTokenController>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AvalancheTokenController;
    connect(signer: Signer): AvalancheTokenController__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AvalancheTokenController;
}
