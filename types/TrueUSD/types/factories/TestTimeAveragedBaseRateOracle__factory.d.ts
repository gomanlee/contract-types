import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTimeAveragedBaseRateOracle } from "../TestTimeAveragedBaseRateOracle";
export declare class TestTimeAveragedBaseRateOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTimeAveragedBaseRateOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTimeAveragedBaseRateOracle;
    connect(signer: Signer): TestTimeAveragedBaseRateOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTimeAveragedBaseRateOracle;
}
