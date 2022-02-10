import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GovernorTimelockControl, GovernorTimelockControlInterface } from "../GovernorTimelockControl";
export declare class GovernorTimelockControl__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): GovernorTimelockControlInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernorTimelockControl;
}
