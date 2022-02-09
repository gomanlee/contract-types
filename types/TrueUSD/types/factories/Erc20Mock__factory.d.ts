import { Signer, BigNumberish, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Erc20Mock } from "../Erc20Mock";
export declare class Erc20Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(initialAccount: string, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<Erc20Mock>;
    getDeployTransaction(initialAccount: string, initialBalance: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Erc20Mock;
    connect(signer: Signer): Erc20Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Erc20Mock;
}
