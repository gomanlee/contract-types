import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ImplInterface extends utils.Interface {
    contractName: "Impl";
    functions: {
        "version()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface Impl extends BaseContract {
    contractName: "Impl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ImplInterface;
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
        version(overrides?: CallOverrides): Promise<[string]>;
    };
    version(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        version(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
