import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Implementation4Interface extends utils.Interface {
    contractName: "Implementation4";
    functions: {
        "getValue()": FunctionFragment;
        "initialize()": FunctionFragment;
        "setValue(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "setValue", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
    events: {};
}
export interface Implementation4 extends BaseContract {
    contractName: "Implementation4";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Implementation4Interface;
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
        getValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setValue(_number: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getValue(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setValue(_number: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: CallOverrides): Promise<void>;
        setValue(_number: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setValue(_number: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setValue(_number: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
