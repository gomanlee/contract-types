import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MathMockInterface extends utils.Interface {
    contractName: "MathMock";
    functions: {
        "average(uint256,uint256)": FunctionFragment;
        "ceilDiv(uint256,uint256)": FunctionFragment;
        "max(uint256,uint256)": FunctionFragment;
        "min(uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "average", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ceilDiv", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "max", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "min", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "average", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ceilDiv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;
    events: {};
}
export interface MathMock extends BaseContract {
    contractName: "MathMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MathMockInterface;
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
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        ceilDiv(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    ceilDiv(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ceilDiv(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ceilDiv(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ceilDiv(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
