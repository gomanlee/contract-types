import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TrueLender } from "../TrueLender";
export declare class TrueLender__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TrueLender>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TrueLender;
    connect(signer: Signer): TrueLender__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TrueLender;
}
