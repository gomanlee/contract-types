import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ClashingImplementationInterface extends utils.Interface {
    contractName: "ClashingImplementation";
    functions: {
        "admin()": FunctionFragment;
        "delegatedFunction()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatedFunction", values?: undefined): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedFunction", data: BytesLike): Result;
    events: {};
}
export interface ClashingImplementation extends BaseContract {
    contractName: "ClashingImplementation";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ClashingImplementationInterface;
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
        admin(overrides?: CallOverrides): Promise<[string]>;
        delegatedFunction(overrides?: CallOverrides): Promise<[boolean]>;
    };
    admin(overrides?: CallOverrides): Promise<string>;
    delegatedFunction(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        admin(overrides?: CallOverrides): Promise<string>;
        delegatedFunction(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        delegatedFunction(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatedFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
