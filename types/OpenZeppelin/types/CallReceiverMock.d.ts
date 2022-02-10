import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CallReceiverMockInterface extends utils.Interface {
    contractName: "CallReceiverMock";
    functions: {
        "mockFunction()": FunctionFragment;
        "mockFunctionNonPayable()": FunctionFragment;
        "mockFunctionOutOfGas()": FunctionFragment;
        "mockFunctionRevertsNoReason()": FunctionFragment;
        "mockFunctionRevertsReason()": FunctionFragment;
        "mockFunctionThrows()": FunctionFragment;
        "mockFunctionWithArgs(uint256,uint256)": FunctionFragment;
        "mockFunctionWritesStorage()": FunctionFragment;
        "mockStaticFunction()": FunctionFragment;
        "sharedAnswer()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "mockFunction", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionNonPayable", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionOutOfGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionRevertsNoReason", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionRevertsReason", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionThrows", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockFunctionWithArgs", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mockFunctionWritesStorage", values?: undefined): string;
    encodeFunctionData(functionFragment: "mockStaticFunction", values?: undefined): string;
    encodeFunctionData(functionFragment: "sharedAnswer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "mockFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionNonPayable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionOutOfGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionRevertsNoReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionRevertsReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionThrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionWithArgs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunctionWritesStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockStaticFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedAnswer", data: BytesLike): Result;
    events: {
        "MockFunctionCalled()": EventFragment;
        "MockFunctionCalledWithArgs(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MockFunctionCalled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MockFunctionCalledWithArgs"): EventFragment;
}
export declare type MockFunctionCalledEvent = TypedEvent<[], {}>;
export declare type MockFunctionCalledEventFilter = TypedEventFilter<MockFunctionCalledEvent>;
export declare type MockFunctionCalledWithArgsEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    a: BigNumber;
    b: BigNumber;
}>;
export declare type MockFunctionCalledWithArgsEventFilter = TypedEventFilter<MockFunctionCalledWithArgsEvent>;
export interface CallReceiverMock extends BaseContract {
    contractName: "CallReceiverMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CallReceiverMockInterface;
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
        mockFunction(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionOutOfGas(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionRevertsNoReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionRevertsReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionThrows(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionWithArgs(a: BigNumberish, b: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockFunctionWritesStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mockStaticFunction(overrides?: CallOverrides): Promise<[string]>;
        sharedAnswer(overrides?: CallOverrides): Promise<[string]>;
    };
    mockFunction(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionNonPayable(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionOutOfGas(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionRevertsNoReason(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionRevertsReason(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionThrows(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionWithArgs(a: BigNumberish, b: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockFunctionWritesStorage(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mockStaticFunction(overrides?: CallOverrides): Promise<string>;
    sharedAnswer(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        mockFunction(overrides?: CallOverrides): Promise<string>;
        mockFunctionNonPayable(overrides?: CallOverrides): Promise<string>;
        mockFunctionOutOfGas(overrides?: CallOverrides): Promise<void>;
        mockFunctionRevertsNoReason(overrides?: CallOverrides): Promise<void>;
        mockFunctionRevertsReason(overrides?: CallOverrides): Promise<void>;
        mockFunctionThrows(overrides?: CallOverrides): Promise<void>;
        mockFunctionWithArgs(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<string>;
        mockFunctionWritesStorage(overrides?: CallOverrides): Promise<string>;
        mockStaticFunction(overrides?: CallOverrides): Promise<string>;
        sharedAnswer(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MockFunctionCalled()"(): MockFunctionCalledEventFilter;
        MockFunctionCalled(): MockFunctionCalledEventFilter;
        "MockFunctionCalledWithArgs(uint256,uint256)"(a?: null, b?: null): MockFunctionCalledWithArgsEventFilter;
        MockFunctionCalledWithArgs(a?: null, b?: null): MockFunctionCalledWithArgsEventFilter;
    };
    estimateGas: {
        mockFunction(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionOutOfGas(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionRevertsNoReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionRevertsReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionThrows(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionWithArgs(a: BigNumberish, b: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockFunctionWritesStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mockStaticFunction(overrides?: CallOverrides): Promise<BigNumber>;
        sharedAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        mockFunction(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionNonPayable(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionOutOfGas(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionRevertsNoReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionRevertsReason(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionThrows(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionWithArgs(a: BigNumberish, b: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockFunctionWritesStorage(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mockStaticFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sharedAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
