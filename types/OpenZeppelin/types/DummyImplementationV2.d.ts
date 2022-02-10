import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DummyImplementationV2Interface extends utils.Interface {
    contractName: "DummyImplementationV2";
    functions: {
        "get()": FunctionFragment;
        "initialize(uint256,string,uint256[])": FunctionFragment;
        "initializeNonPayable()": FunctionFragment;
        "initializeNonPayableWithValue(uint256)": FunctionFragment;
        "initializePayable()": FunctionFragment;
        "initializePayableWithValue(uint256)": FunctionFragment;
        "migrate(uint256)": FunctionFragment;
        "reverts()": FunctionFragment;
        "text()": FunctionFragment;
        "value()": FunctionFragment;
        "values(uint256)": FunctionFragment;
        "version()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "get", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "initializeNonPayable", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeNonPayableWithValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializePayable", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializePayableWithValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "migrate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "reverts", values?: undefined): string;
    encodeFunctionData(functionFragment: "text", values?: undefined): string;
    encodeFunctionData(functionFragment: "value", values?: undefined): string;
    encodeFunctionData(functionFragment: "values", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeNonPayable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeNonPayableWithValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePayable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializePayableWithValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reverts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface DummyImplementationV2 extends BaseContract {
    contractName: "DummyImplementationV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DummyImplementationV2Interface;
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
        get(overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_value: BigNumberish, _text: string, _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializeNonPayableWithValue(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializePayable(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initializePayableWithValue(_value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        migrate(newVal: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        reverts(overrides?: CallOverrides): Promise<[void]>;
        text(overrides?: CallOverrides): Promise<[string]>;
        value(overrides?: CallOverrides): Promise<[BigNumber]>;
        values(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
    };
    get(overrides?: CallOverrides): Promise<boolean>;
    initialize(_value: BigNumberish, _text: string, _values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeNonPayable(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializeNonPayableWithValue(_value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializePayable(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initializePayableWithValue(_value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    migrate(newVal: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    reverts(overrides?: CallOverrides): Promise<void>;
    text(overrides?: CallOverrides): Promise<string>;
    value(overrides?: CallOverrides): Promise<BigNumber>;
    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        get(overrides?: CallOverrides): Promise<boolean>;
        initialize(_value: BigNumberish, _text: string, _values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        initializeNonPayable(overrides?: CallOverrides): Promise<void>;
        initializeNonPayableWithValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initializePayable(overrides?: CallOverrides): Promise<void>;
        initializePayableWithValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        migrate(newVal: BigNumberish, overrides?: CallOverrides): Promise<void>;
        reverts(overrides?: CallOverrides): Promise<void>;
        text(overrides?: CallOverrides): Promise<string>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
        values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        get(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_value: BigNumberish, _text: string, _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializeNonPayableWithValue(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializePayable(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initializePayableWithValue(_value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        migrate(newVal: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        reverts(overrides?: CallOverrides): Promise<BigNumber>;
        text(overrides?: CallOverrides): Promise<BigNumber>;
        value(overrides?: CallOverrides): Promise<BigNumber>;
        values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        get(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_value: BigNumberish, _text: string, _values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializeNonPayableWithValue(_value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializePayable(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initializePayableWithValue(_value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        migrate(newVal: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        reverts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        text(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        value(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        values(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
