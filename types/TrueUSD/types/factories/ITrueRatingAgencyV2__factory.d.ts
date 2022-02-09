import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueRatingAgencyV2 } from "../ITrueRatingAgencyV2";
export declare class ITrueRatingAgencyV2__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueRatingAgencyV2;
}
