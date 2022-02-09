import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUniRouter } from "../IUniRouter";
export declare class IUniRouter__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IUniRouter;
}
