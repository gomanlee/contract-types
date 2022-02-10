import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ConstructorInitializableMockInterface extends utils.Interface {
    contractName: "ConstructorInitializableMock";
    functions: {
        "initialize()": FunctionFragment;
        "initializeOnlyInitializing()": FunctionFragment;
        "initializerRan()": FunctionFragment;
        "onlyInitializingRan()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeOnlyInitializing", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializerRan", values?: undefined): string;
    encodeFunctionData(functionFragment: "onlyInitializingRan", values?: undefined): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeOnlyInitializing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializerRan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyInitializingRan", data: BytesLike): Result;
    events: {};
}
export interface ConstructorInitializableMock extends BaseContract {
    contractName: "ConstructorInitializableMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConstructorInitializableMockInterface;
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
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializerRan(overrides?: CallOverrides): Promise<[boolean]>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<[boolean]>;
    };
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeOnlyInitializing(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializerRan(overrides?: CallOverrides): Promise<boolean>;
    onlyInitializingRan(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        initialize(overrides?: CallOverrides): Promise<void>;
        initializeOnlyInitializing(overrides?: CallOverrides): Promise<void>;
        initializerRan(overrides?: CallOverrides): Promise<boolean>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializerRan(overrides?: CallOverrides): Promise<BigNumber>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeOnlyInitializing(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializerRan(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onlyInitializingRan(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
