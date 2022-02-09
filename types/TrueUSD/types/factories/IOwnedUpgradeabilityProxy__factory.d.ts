import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOwnedUpgradeabilityProxy } from "../IOwnedUpgradeabilityProxy";
export declare class IOwnedUpgradeabilityProxy__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOwnedUpgradeabilityProxy;
}
