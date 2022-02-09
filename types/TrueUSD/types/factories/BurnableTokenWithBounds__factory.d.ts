import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BurnableTokenWithBounds } from "../BurnableTokenWithBounds";
export declare class BurnableTokenWithBounds__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): BurnableTokenWithBounds;
}
