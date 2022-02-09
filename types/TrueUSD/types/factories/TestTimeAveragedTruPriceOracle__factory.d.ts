import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestTimeAveragedTruPriceOracle } from "../TestTimeAveragedTruPriceOracle";
export declare class TestTimeAveragedTruPriceOracle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestTimeAveragedTruPriceOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestTimeAveragedTruPriceOracle;
    connect(signer: Signer): TestTimeAveragedTruPriceOracle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestTimeAveragedTruPriceOracle;
}
