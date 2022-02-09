import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILiquidator2 } from "../ILiquidator2";
export declare class ILiquidator2__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILiquidator2;
}
