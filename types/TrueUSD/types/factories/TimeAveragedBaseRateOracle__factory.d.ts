import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TimeAveragedBaseRateOracle } from "../TimeAveragedBaseRateOracle";
export declare class TimeAveragedBaseRateOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TimeAveragedBaseRateOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TimeAveragedBaseRateOracle;
    connect(signer: Signer): TimeAveragedBaseRateOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TimeAveragedBaseRateOracle;
}
