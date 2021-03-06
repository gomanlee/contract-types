import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StringsMockInterface extends utils.Interface {
    contractName: "StringsMock";
    functions: {
        "fromUint256(uint256)": FunctionFragment;
        "fromUint256Hex(uint256)": FunctionFragment;
        "fromUint256HexFixed(uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "fromUint256", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fromUint256Hex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "fromUint256HexFixed", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "fromUint256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromUint256Hex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fromUint256HexFixed", data: BytesLike): Result;
    events: {};
}
export interface StringsMock extends BaseContract {
    contractName: "StringsMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StringsMockInterface;
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
        fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        fromUint256Hex(value: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        fromUint256HexFixed(value: BigNumberish, length: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
    fromUint256Hex(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
    fromUint256HexFixed(value: BigNumberish, length: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        fromUint256Hex(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        fromUint256HexFixed(value: BigNumberish, length: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fromUint256Hex(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fromUint256HexFixed(value: BigNumberish, length: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fromUint256(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fromUint256Hex(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fromUint256HexFixed(value: BigNumberish, length: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
