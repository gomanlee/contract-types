import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CountersImplInterface extends utils.Interface {
    contractName: "CountersImpl";
    functions: {
        "current()": FunctionFragment;
        "decrement()": FunctionFragment;
        "increment()": FunctionFragment;
        "reset()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "current", values?: undefined): string;
    encodeFunctionData(functionFragment: "decrement", values?: undefined): string;
    encodeFunctionData(functionFragment: "increment", values?: undefined): string;
    encodeFunctionData(functionFragment: "reset", values?: undefined): string;
    decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decrement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
    events: {};
}
export interface CountersImpl extends BaseContract {
    contractName: "CountersImpl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CountersImplInterface;
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
        current(overrides?: CallOverrides): Promise<[BigNumber]>;
        decrement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reset(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    current(overrides?: CallOverrides): Promise<BigNumber>;
    decrement(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increment(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reset(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        current(overrides?: CallOverrides): Promise<BigNumber>;
        decrement(overrides?: CallOverrides): Promise<void>;
        increment(overrides?: CallOverrides): Promise<void>;
        reset(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        current(overrides?: CallOverrides): Promise<BigNumber>;
        decrement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reset(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        current(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decrement(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increment(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reset(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
