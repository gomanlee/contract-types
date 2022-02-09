import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IBorrowingMutex } from "../IBorrowingMutex";
export declare class IBorrowingMutex__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IBorrowingMutex;
}
