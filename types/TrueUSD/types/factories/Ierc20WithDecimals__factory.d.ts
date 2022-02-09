import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Ierc20WithDecimals } from "../Ierc20WithDecimals";
export declare class Ierc20WithDecimals__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc20WithDecimals;
}
