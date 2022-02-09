import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AvalancheTrueUsd } from "../AvalancheTrueUsd";
export declare class AvalancheTrueUsd__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AvalancheTrueUsd>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AvalancheTrueUsd;
    connect(signer: Signer): AvalancheTrueUsd__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AvalancheTrueUsd;
}
