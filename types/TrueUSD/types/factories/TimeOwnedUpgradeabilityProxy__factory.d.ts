import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeOwnedUpgradeabilityProxy } from "../TimeOwnedUpgradeabilityProxy";
export declare class TimeOwnedUpgradeabilityProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TimeOwnedUpgradeabilityProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TimeOwnedUpgradeabilityProxy;
    connect(signer: Signer): TimeOwnedUpgradeabilityProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TimeOwnedUpgradeabilityProxy;
}
