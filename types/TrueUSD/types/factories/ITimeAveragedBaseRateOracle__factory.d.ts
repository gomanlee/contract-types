import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITimeAveragedBaseRateOracle } from "../ITimeAveragedBaseRateOracle";
export declare class ITimeAveragedBaseRateOracle__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITimeAveragedBaseRateOracle;
}
