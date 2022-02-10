import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SignedSafeMathMockInterface extends utils.Interface {
    contractName: "SignedSafeMathMock";
    functions: {
        "add(int256,int256)": FunctionFragment;
        "div(int256,int256)": FunctionFragment;
        "mul(int256,int256)": FunctionFragment;
        "sub(int256,int256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "add", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "div", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mul", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sub", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "div", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mul", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sub", data: BytesLike): Result;
    events: {};
}
export interface SignedSafeMathMock extends BaseContract {
    contractName: "SignedSafeMathMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignedSafeMathMockInterface;
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
        add(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        div(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        mul(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        sub(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    add(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    div(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    mul(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    sub(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        add(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        div(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mul(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sub(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        add(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        div(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mul(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sub(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        div(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mul(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sub(a: BigNumberish, b: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
