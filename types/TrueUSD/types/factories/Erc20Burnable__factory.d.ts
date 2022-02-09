import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Erc20Burnable } from "../Erc20Burnable";
export declare class Erc20Burnable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): Erc20Burnable;
}
