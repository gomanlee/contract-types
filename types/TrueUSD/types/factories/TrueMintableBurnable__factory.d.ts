import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TrueMintableBurnable } from "../TrueMintableBurnable";
export declare class TrueMintableBurnable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): TrueMintableBurnable;
}
