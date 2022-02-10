import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC777Sender, IERC777SenderInterface } from "../IERC777Sender";
export declare class IERC777Sender__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IERC777SenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC777Sender;
}
