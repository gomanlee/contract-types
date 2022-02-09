import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurve } from "../ICurve";
export declare class ICurve__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ICurve;
}
