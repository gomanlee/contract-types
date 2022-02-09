import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingVault } from "../StakingVault";
export declare class StakingVault__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingVault>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingVault;
    connect(signer: Signer): StakingVault__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingVault;
}
