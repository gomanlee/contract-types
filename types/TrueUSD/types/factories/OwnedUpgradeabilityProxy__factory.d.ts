import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnedUpgradeabilityProxy } from "../OwnedUpgradeabilityProxy";
export declare class OwnedUpgradeabilityProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnedUpgradeabilityProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnedUpgradeabilityProxy;
    connect(signer: Signer): OwnedUpgradeabilityProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnedUpgradeabilityProxy;
}
