import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChainlinkTruTusdOracle } from "../ChainlinkTruTusdOracle";
export declare class ChainlinkTruTusdOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ChainlinkTruTusdOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ChainlinkTruTusdOracle;
    connect(signer: Signer): ChainlinkTruTusdOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkTruTusdOracle;
}
