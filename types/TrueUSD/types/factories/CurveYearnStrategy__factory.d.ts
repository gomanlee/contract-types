import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveYearnStrategy } from "../CurveYearnStrategy";
export declare class CurveYearnStrategy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveYearnStrategy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveYearnStrategy;
    connect(signer: Signer): CurveYearnStrategy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveYearnStrategy;
}
