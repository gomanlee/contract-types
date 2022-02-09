import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChainlinkTruBusdOracle } from "../ChainlinkTruBusdOracle";
export declare class ChainlinkTruBusdOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ChainlinkTruBusdOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ChainlinkTruBusdOracle;
    connect(signer: Signer): ChainlinkTruBusdOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkTruBusdOracle;
}
