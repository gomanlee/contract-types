import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mock1InchV3 } from "../Mock1InchV3";
export declare class Mock1InchV3__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Mock1InchV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Mock1InchV3;
    connect(signer: Signer): Mock1InchV3__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock1InchV3;
}
