import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurveGauge } from "../ICurveGauge";
export declare class ICurveGauge__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ICurveGauge;
}
