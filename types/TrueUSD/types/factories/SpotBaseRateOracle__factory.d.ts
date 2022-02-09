import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SpotBaseRateOracle } from "../SpotBaseRateOracle";
export declare class SpotBaseRateOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_aaveLendingPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SpotBaseRateOracle>;
    getDeployTransaction(_aaveLendingPool: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SpotBaseRateOracle;
    connect(signer: Signer): SpotBaseRateOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SpotBaseRateOracle;
}
