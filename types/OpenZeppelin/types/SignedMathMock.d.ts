import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SignedMathMockInterface extends utils.Interface {
    contractName: "SignedMathMock";
    functions: {
        "abs(int256)": FunctionFragment;
        "average(int256,int256)": FunctionFragment;
        "max(int256,int256)": FunctionFragment;
        "min(int256,int256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "abs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "average", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "max", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "min", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "abs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "average", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;
    events: {};
}
export interface SignedMathMock extends BaseContract {
    contractName: "SignedMathMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignedMathMockInterface;
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
        abs(n: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        abs(n: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        average(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        max(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        min(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
