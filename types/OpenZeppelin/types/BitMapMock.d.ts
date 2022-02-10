import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BitMapMockInterface extends utils.Interface {
    contractName: "BitMapMock";
    functions: {
        "get(uint256)": FunctionFragment;
        "set(uint256)": FunctionFragment;
        "setTo(uint256,bool)": FunctionFragment;
        "unset(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "set", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTo", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "unset", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unset", data: BytesLike): Result;
    events: {};
}
export interface BitMapMock extends BaseContract {
    contractName: "BitMapMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BitMapMockInterface;
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
        get(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        set(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTo(index: BigNumberish, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unset(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    get(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    set(index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTo(index: BigNumberish, value: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unset(index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        set(index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTo(index: BigNumberish, value: boolean, overrides?: CallOverrides): Promise<void>;
        unset(index: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        get(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        set(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTo(index: BigNumberish, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unset(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        set(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTo(index: BigNumberish, value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unset(index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
