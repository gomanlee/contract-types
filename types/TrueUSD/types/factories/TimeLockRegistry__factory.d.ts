import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeLockRegistry } from "../TimeLockRegistry";
export declare class TimeLockRegistry__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TimeLockRegistry>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TimeLockRegistry;
    connect(signer: Signer): TimeLockRegistry__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TimeLockRegistry;
}
