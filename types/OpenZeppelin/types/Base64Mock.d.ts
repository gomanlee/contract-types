import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Base64MockInterface extends utils.Interface {
    contractName: "Base64Mock";
    functions: {
        "encode(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "encode", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;
    events: {};
}
export interface Base64Mock extends BaseContract {
    contractName: "Base64Mock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Base64MockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        encode(value: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    encode(value: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        encode(value: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        encode(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        encode(value: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
