import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IReclaimerToken } from "../IReclaimerToken";
export declare class IReclaimerToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IReclaimerToken;
}
