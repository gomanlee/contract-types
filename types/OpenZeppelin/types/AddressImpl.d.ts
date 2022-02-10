import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AddressImplInterface extends utils.Interface {
    contractName: "AddressImpl";
    functions: {
        "functionCall(address,bytes)": FunctionFragment;
        "functionCallWithValue(address,bytes,uint256)": FunctionFragment;
        "functionDelegateCall(address,bytes)": FunctionFragment;
        "functionStaticCall(address,bytes)": FunctionFragment;
        "isContract(address)": FunctionFragment;
        "sendValue(address,uint256)": FunctionFragment;
        "sharedAnswer()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "functionCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "functionCallWithValue", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "functionDelegateCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "functionStaticCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isContract", values: [string]): string;
    encodeFunctionData(functionFragment: "sendValue", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sharedAnswer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "functionCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "functionCallWithValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "functionDelegateCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "functionStaticCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedAnswer", data: BytesLike): Result;
    events: {
        "CallReturnValue(string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallReturnValue"): EventFragment;
}
export declare type CallReturnValueEvent = TypedEvent<[string], {
    data: string;
}>;
export declare type CallReturnValueEventFilter = TypedEventFilter<CallReturnValueEvent>;
export interface AddressImpl extends BaseContract {
    contractName: "AddressImpl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressImplInterface;
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
        functionCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        functionCallWithValue(target: string, data: BytesLike, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        functionDelegateCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        functionStaticCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isContract(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        sendValue(receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sharedAnswer(overrides?: CallOverrides): Promise<[string]>;
    };
    functionCall(target: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    functionCallWithValue(target: string, data: BytesLike, value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    functionDelegateCall(target: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    functionStaticCall(target: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isContract(account: string, overrides?: CallOverrides): Promise<boolean>;
    sendValue(receiver: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sharedAnswer(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        functionCall(target: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        functionCallWithValue(target: string, data: BytesLike, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        functionDelegateCall(target: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        functionStaticCall(target: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        isContract(account: string, overrides?: CallOverrides): Promise<boolean>;
        sendValue(receiver: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sharedAnswer(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CallReturnValue(string)"(data?: null): CallReturnValueEventFilter;
        CallReturnValue(data?: null): CallReturnValueEventFilter;
    };
    estimateGas: {
        functionCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        functionCallWithValue(target: string, data: BytesLike, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        functionDelegateCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        functionStaticCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isContract(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        sendValue(receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sharedAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        functionCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        functionCallWithValue(target: string, data: BytesLike, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        functionDelegateCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        functionStaticCall(target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isContract(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendValue(receiver: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sharedAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
