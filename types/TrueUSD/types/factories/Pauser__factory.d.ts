import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Pauser } from "../Pauser";
export declare class Pauser__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Pauser>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Pauser;
    connect(signer: Signer): Pauser__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Pauser;
}
