import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITrueRatingAgency } from "../ITrueRatingAgency";
export declare class ITrueRatingAgency__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITrueRatingAgency;
}
