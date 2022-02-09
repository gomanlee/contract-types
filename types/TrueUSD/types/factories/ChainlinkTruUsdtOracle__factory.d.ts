import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChainlinkTruUsdtOracle } from "../ChainlinkTruUsdtOracle";
export declare class ChainlinkTruUsdtOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ChainlinkTruUsdtOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ChainlinkTruUsdtOracle;
    connect(signer: Signer): ChainlinkTruUsdtOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkTruUsdtOracle;
}
