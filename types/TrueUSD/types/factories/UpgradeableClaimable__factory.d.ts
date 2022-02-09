import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeableClaimable } from "../UpgradeableClaimable";
export declare class UpgradeableClaimable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UpgradeableClaimable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UpgradeableClaimable;
    connect(signer: Signer): UpgradeableClaimable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableClaimable;
}
