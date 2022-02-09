import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ComptrollerV2StorageInterface extends utils.Interface {
    contractName: "ComptrollerV2Storage";
    functions: {
        "_borrowGuardianPaused()": FunctionFragment;
        "_mintGuardianPaused()": FunctionFragment;
        "accountAssets(address,uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "borrowGuardianPaused(address)": FunctionFragment;
        "closeFactorMantissa()": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
        "liquidationIncentiveMantissa()": FunctionFragment;
        "markets(address)": FunctionFragment;
        "maxAssets()": FunctionFragment;
        "mintGuardianPaused(address)": FunctionFragment;
        "oracle()": FunctionFragment;
        "pauseGuardian()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "pendingComptrollerImplementation()": FunctionFragment;
        "seizeGuardianPaused()": FunctionFragment;
        "transferGuardianPaused()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_borrowGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "_mintGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [string]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [string]): string;
    encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [string]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingComptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "seizeGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferGuardianPaused", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingComptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferGuardianPaused", data: BytesLike): Result;
    events: {};
}
export interface ComptrollerV2Storage extends BaseContract {
    contractName: "ComptrollerV2Storage";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerV2StorageInterface;
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
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        borrowGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
            isComped: boolean;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        pauseGuardian(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
    };
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    borrowGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    markets(arg0: string, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        boolean
    ] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isComped: boolean;
    }>;
    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
    mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    oracle(overrides?: CallOverrides): Promise<string>;
    pauseGuardian(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        borrowGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
            isComped: boolean;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        oracle(overrides?: CallOverrides): Promise<string>;
        pauseGuardian(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        borrowGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
