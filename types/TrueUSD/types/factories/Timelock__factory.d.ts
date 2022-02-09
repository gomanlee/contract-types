import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock } from "../Timelock";
export declare class Timelock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Timelock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Timelock;
    connect(signer: Signer): Timelock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Timelock;
}
