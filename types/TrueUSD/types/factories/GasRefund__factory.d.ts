import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GasRefund } from "../GasRefund";
export declare class GasRefund__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): GasRefund;
}
