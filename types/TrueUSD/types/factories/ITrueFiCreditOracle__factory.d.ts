import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueFiCreditOracle } from "../ITrueFiCreditOracle";
export declare class ITrueFiCreditOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueFiCreditOracle;
}
