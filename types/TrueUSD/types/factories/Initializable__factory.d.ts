import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Initializable } from "../Initializable";
export declare class Initializable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Initializable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Initializable;
    connect(signer: Signer): Initializable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Initializable;
}
