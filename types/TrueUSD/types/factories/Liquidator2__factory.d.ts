import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Liquidator2 } from "../Liquidator2";
export declare class Liquidator2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Liquidator2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Liquidator2;
    connect(signer: Signer): Liquidator2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Liquidator2;
}
