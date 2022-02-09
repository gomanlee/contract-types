import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueFiPool2 } from "../TrueFiPool2";
export declare class TrueFiPool2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueFiPool2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueFiPool2;
    connect(signer: Signer): TrueFiPool2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueFiPool2;
}
