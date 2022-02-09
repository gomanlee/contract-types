import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ComptrollerLensInterfaceInterface extends utils.Interface {
    contractName: "ComptrollerLensInterface";
    functions: {
        "borrowCaps(address)": FunctionFragment;
        "claimComp(address)": FunctionFragment;
        "compAccrued(address)": FunctionFragment;
        "compBorrowSpeeds(address)": FunctionFragment;
        "compSpeeds(address)": FunctionFragment;
        "compSupplySpeeds(address)": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "getAssetsIn(address)": FunctionFragment;
        "markets(address)": FunctionFragment;
        "oracle()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "borrowCaps", values: [string]): string;
    encodeFunctionData(functionFragment: "claimComp", values: [string]): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "compBorrowSpeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "compSpeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "compSupplySpeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [string]): string;
    encodeFunctionData(functionFragment: "markets", values: [string]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplySpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    events: {};
}
export interface ComptrollerLensInterface extends BaseContract {
    contractName: "ComptrollerLensInterface";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerLensInterfaceInterface;
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
        borrowCaps(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimComp(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        compAccrued(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccountLiquidity(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAssetsIn(arg0: string, overrides?: CallOverrides): Promise<[string[]]>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
    };
    borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimComp(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAccountLiquidity(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getAssetsIn(arg0: string, overrides?: CallOverrides): Promise<string[]>;
    markets(arg0: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    oracle(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimComp(arg0: string, overrides?: CallOverrides): Promise<void>;
        compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountLiquidity(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAssetsIn(arg0: string, overrides?: CallOverrides): Promise<string[]>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimComp(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountLiquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        borrowCaps(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimComp(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        compAccrued(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compBorrowSpeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSpeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSupplySpeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountLiquidity(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsIn(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
