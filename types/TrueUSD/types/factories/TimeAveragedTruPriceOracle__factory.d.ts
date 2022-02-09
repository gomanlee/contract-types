import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeAveragedTruPriceOracle } from "../TimeAveragedTruPriceOracle";
export declare class TimeAveragedTruPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TimeAveragedTruPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TimeAveragedTruPriceOracle;
    connect(signer: Signer): TimeAveragedTruPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TimeAveragedTruPriceOracle;
}
