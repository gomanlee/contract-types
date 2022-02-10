import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StorageSlotMockInterface extends utils.Interface {
    contractName: "StorageSlotMock";
    functions: {
        "getAddress(bytes32)": FunctionFragment;
        "getBoolean(bytes32)": FunctionFragment;
        "getBytes32(bytes32)": FunctionFragment;
        "getUint256(bytes32)": FunctionFragment;
        "setAddress(bytes32,address)": FunctionFragment;
        "setBoolean(bytes32,bool)": FunctionFragment;
        "setBytes32(bytes32,bytes32)": FunctionFragment;
        "setUint256(bytes32,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getBoolean", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getBytes32", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getUint256", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setAddress", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setBoolean", values: [BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "setBytes32", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setUint256", values: [BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoolean", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUint256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBoolean", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUint256", data: BytesLike): Result;
    events: {};
}
export interface StorageSlotMock extends BaseContract {
    contractName: "StorageSlotMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StorageSlotMockInterface;
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
        getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAddress(slot: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBoolean(slot: BytesLike, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBytes32(slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setUint256(slot: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<string>;
    getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<string>;
    getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    setAddress(slot: BytesLike, value: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBoolean(slot: BytesLike, value: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBytes32(slot: BytesLike, value: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setUint256(slot: BytesLike, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<string>;
        getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<string>;
        getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setAddress(slot: BytesLike, value: string, overrides?: CallOverrides): Promise<void>;
        setBoolean(slot: BytesLike, value: boolean, overrides?: CallOverrides): Promise<void>;
        setBytes32(slot: BytesLike, value: BytesLike, overrides?: CallOverrides): Promise<void>;
        setUint256(slot: BytesLike, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setAddress(slot: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBoolean(slot: BytesLike, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBytes32(slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setUint256(slot: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAddress(slot: BytesLike, value: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBoolean(slot: BytesLike, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBytes32(slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setUint256(slot: BytesLike, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
