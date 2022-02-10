import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface InitializableMockInterface extends utils.Interface {
    contractName: "InitializableMock";
    functions: {
        "fail()": FunctionFragment;
        "initialize()": FunctionFragment;
        "initializeOnlyInitializing()": FunctionFragment;
        "initializeWithX(uint256)": FunctionFragment;
        "initializerNested()": FunctionFragment;
        "initializerRan()": FunctionFragment;
        "nonInitializable(uint256)": FunctionFragment;
        "onlyInitializingNested()": FunctionFragment;
        "onlyInitializingRan()": FunctionFragment;
        "x()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "fail", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeOnlyInitializing", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeWithX", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializerNested", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializerRan", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonInitializable", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "onlyInitializingNested", values?: undefined): string;
    encodeFunctionData(functionFragment: "onlyInitializingRan", values?: undefined): string;
    encodeFunctionData(functionFragment: "x", values?: undefined): string;
    decodeFunctionResult(functionFragment: "fail", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeOnlyInitializing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeWithX", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializerNested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializerRan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonInitializable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyInitializingNested", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyInitializingRan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "x", data: BytesLike): Result;
    events: {};
}
export interface InitializableMock extends BaseContract {
    contractName: "InitializableMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InitializableMockInterface;
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
        fail(overrides?: CallOverrides): Promise<[void]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeWithX(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializerNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializerRan(overrides?: CallOverrides): Promise<[boolean]>;
        nonInitializable(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onlyInitializingNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<[boolean]>;
        x(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    fail(overrides?: CallOverrides): Promise<void>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeOnlyInitializing(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeWithX(_x: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializerNested(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializerRan(overrides?: CallOverrides): Promise<boolean>;
    nonInitializable(_x: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onlyInitializingNested(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onlyInitializingRan(overrides?: CallOverrides): Promise<boolean>;
    x(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        fail(overrides?: CallOverrides): Promise<void>;
        initialize(overrides?: CallOverrides): Promise<void>;
        initializeOnlyInitializing(overrides?: CallOverrides): Promise<void>;
        initializeWithX(_x: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initializerNested(overrides?: CallOverrides): Promise<void>;
        initializerRan(overrides?: CallOverrides): Promise<boolean>;
        nonInitializable(_x: BigNumberish, overrides?: CallOverrides): Promise<void>;
        onlyInitializingNested(overrides?: CallOverrides): Promise<void>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<boolean>;
        x(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        fail(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeWithX(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializerNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializerRan(overrides?: CallOverrides): Promise<BigNumber>;
        nonInitializable(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onlyInitializingNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<BigNumber>;
        x(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fail(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeWithX(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializerNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializerRan(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonInitializable(_x: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onlyInitializingNested(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        x(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
