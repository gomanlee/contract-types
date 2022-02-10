import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CheckpointsImplInterface extends utils.Interface {
    contractName: "CheckpointsImpl";
    functions: {
        "getAtBlock(uint256)": FunctionFragment;
        "latest()": FunctionFragment;
        "push(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getAtBlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latest", values?: undefined): string;
    encodeFunctionData(functionFragment: "push", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getAtBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
    events: {};
}
export interface CheckpointsImpl extends BaseContract {
    contractName: "CheckpointsImpl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CheckpointsImplInterface;
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
        getAtBlock(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        latest(overrides?: CallOverrides): Promise<[BigNumber]>;
        push(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAtBlock(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    latest(overrides?: CallOverrides): Promise<BigNumber>;
    push(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAtBlock(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latest(overrides?: CallOverrides): Promise<BigNumber>;
        push(value: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    };
    filters: {};
    estimateGas: {
        getAtBlock(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latest(overrides?: CallOverrides): Promise<BigNumber>;
        push(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAtBlock(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latest(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        push(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
