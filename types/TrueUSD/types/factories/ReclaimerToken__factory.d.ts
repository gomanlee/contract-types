import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ReclaimerToken } from "../ReclaimerToken";
export declare class ReclaimerToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ReclaimerToken;
}
