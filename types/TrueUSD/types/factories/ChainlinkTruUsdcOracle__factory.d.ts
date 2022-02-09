import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChainlinkTruUsdcOracle } from "../ChainlinkTruUsdcOracle";
export declare class ChainlinkTruUsdcOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ChainlinkTruUsdcOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ChainlinkTruUsdcOracle;
    connect(signer: Signer): ChainlinkTruUsdcOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkTruUsdcOracle;
}
