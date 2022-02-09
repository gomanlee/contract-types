import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ComptrollerG1Interface extends utils.Interface {
    contractName: "ComptrollerG1";
    functions: {
        "_become(address,address,uint256,uint256,bool)": FunctionFragment;
        "_setCloseFactor(uint256)": FunctionFragment;
        "_setCollateralFactor(address,uint256)": FunctionFragment;
        "_setLiquidationIncentive(uint256)": FunctionFragment;
        "_setMaxAssets(uint256)": FunctionFragment;
        "_setPriceOracle(address)": FunctionFragment;
        "_supportMarket(address)": FunctionFragment;
        "accountAssets(address,uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "borrowAllowed(address,address,uint256)": FunctionFragment;
        "borrowVerify(address,address,uint256)": FunctionFragment;
        "checkMembership(address,address)": FunctionFragment;
        "closeFactorMantissa()": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "exitMarket(address)": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "getAssetsIn(address)": FunctionFragment;
        "isComptroller()": FunctionFragment;
        "liquidateBorrowAllowed(address,address,address,address,uint256)": FunctionFragment;
        "liquidateBorrowVerify(address,address,address,address,uint256,uint256)": FunctionFragment;
        "liquidateCalculateSeizeTokens(address,address,uint256)": FunctionFragment;
        "liquidationIncentiveMantissa()": FunctionFragment;
        "markets(address)": FunctionFragment;
        "maxAssets()": FunctionFragment;
        "mintAllowed(address,address,uint256)": FunctionFragment;
        "mintVerify(address,address,uint256,uint256)": FunctionFragment;
        "oracle()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "pendingComptrollerImplementation()": FunctionFragment;
        "redeemAllowed(address,address,uint256)": FunctionFragment;
        "redeemVerify(address,address,uint256,uint256)": FunctionFragment;
        "repayBorrowAllowed(address,address,address,uint256)": FunctionFragment;
        "repayBorrowVerify(address,address,address,uint256,uint256)": FunctionFragment;
        "seizeAllowed(address,address,address,address,uint256)": FunctionFragment;
        "seizeVerify(address,address,address,address,uint256)": FunctionFragment;
        "transferAllowed(address,address,address,uint256)": FunctionFragment;
        "transferVerify(address,address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_become", values: [string, string, BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMaxAssets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "_supportMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowVerify", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [string, string]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [string[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [string]): string;
    encodeFunctionData(functionFragment: "isComptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowVerify", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [string]): string;
    encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingComptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowVerify", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeVerify", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferVerify", values: [string, string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCollateralFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMaxAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_supportMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isComptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCalculateSeizeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingComptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferVerify", data: BytesLike): Result;
    events: {
        "Failure(uint256,uint256,uint256)": EventFragment;
        "MarketEntered(address,address)": EventFragment;
        "MarketExited(address,address)": EventFragment;
        "MarketListed(address)": EventFragment;
        "NewCloseFactor(uint256,uint256)": EventFragment;
        "NewCollateralFactor(address,uint256,uint256)": EventFragment;
        "NewLiquidationIncentive(uint256,uint256)": EventFragment;
        "NewMaxAssets(uint256,uint256)": EventFragment;
        "NewPriceOracle(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketEntered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketExited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketListed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCloseFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCollateralFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewLiquidationIncentive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewMaxAssets"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPriceOracle"): EventFragment;
}
export declare type FailureEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    error: BigNumber;
    info: BigNumber;
    detail: BigNumber;
}>;
export declare type FailureEventFilter = TypedEventFilter<FailureEvent>;
export declare type MarketEnteredEvent = TypedEvent<[
    string,
    string
], {
    cToken: string;
    account: string;
}>;
export declare type MarketEnteredEventFilter = TypedEventFilter<MarketEnteredEvent>;
export declare type MarketExitedEvent = TypedEvent<[
    string,
    string
], {
    cToken: string;
    account: string;
}>;
export declare type MarketExitedEventFilter = TypedEventFilter<MarketExitedEvent>;
export declare type MarketListedEvent = TypedEvent<[string], {
    cToken: string;
}>;
export declare type MarketListedEventFilter = TypedEventFilter<MarketListedEvent>;
export declare type NewCloseFactorEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldCloseFactorMantissa: BigNumber;
    newCloseFactorMantissa: BigNumber;
}>;
export declare type NewCloseFactorEventFilter = TypedEventFilter<NewCloseFactorEvent>;
export declare type NewCollateralFactorEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    cToken: string;
    oldCollateralFactorMantissa: BigNumber;
    newCollateralFactorMantissa: BigNumber;
}>;
export declare type NewCollateralFactorEventFilter = TypedEventFilter<NewCollateralFactorEvent>;
export declare type NewLiquidationIncentiveEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldLiquidationIncentiveMantissa: BigNumber;
    newLiquidationIncentiveMantissa: BigNumber;
}>;
export declare type NewLiquidationIncentiveEventFilter = TypedEventFilter<NewLiquidationIncentiveEvent>;
export declare type NewMaxAssetsEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldMaxAssets: BigNumber;
    newMaxAssets: BigNumber;
}>;
export declare type NewMaxAssetsEventFilter = TypedEventFilter<NewMaxAssetsEvent>;
export declare type NewPriceOracleEvent = TypedEvent<[
    string,
    string
], {
    oldPriceOracle: string;
    newPriceOracle: string;
}>;
export declare type NewPriceOracleEventFilter = TypedEventFilter<NewPriceOracleEvent>;
export interface ComptrollerG1 extends BaseContract {
    contractName: "ComptrollerG1";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerG1Interface;
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
        _become(unitroller: string, _oracle: string, _closeFactorMantissa: BigNumberish, _maxAssets: BigNumberish, reinitializing: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setCollateralFactor(cToken: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setMaxAssets(newMaxAssets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _supportMarket(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowVerify(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<[string[]]>;
        isComptroller(overrides?: CallOverrides): Promise<[boolean]>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidateBorrowVerify(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintVerify(cToken: string, minter: string, mintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayBorrowVerify(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, borrowerIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        seizeVerify(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferVerify(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _become(unitroller: string, _oracle: string, _closeFactorMantissa: BigNumberish, _maxAssets: BigNumberish, reinitializing: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setCollateralFactor(cToken: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setMaxAssets(newMaxAssets: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPriceOracle(newOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _supportMarket(cToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowVerify(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    enterMarkets(cTokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exitMarket(cTokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
    isComptroller(overrides?: CallOverrides): Promise<boolean>;
    liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidateBorrowVerify(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    markets(arg0: string, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
    }>;
    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
    mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintVerify(cToken: string, minter: string, mintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    oracle(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayBorrowVerify(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, borrowerIndex: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    seizeVerify(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferVerify(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _become(unitroller: string, _oracle: string, _closeFactorMantissa: BigNumberish, _maxAssets: BigNumberish, reinitializing: boolean, overrides?: CallOverrides): Promise<void>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setCollateralFactor(cToken: string, newCollateralFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setMaxAssets(newMaxAssets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setPriceOracle(newOracle: string, overrides?: CallOverrides): Promise<BigNumber>;
        _supportMarket(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowVerify(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        enterMarkets(cTokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        exitMarket(cTokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
        isComptroller(overrides?: CallOverrides): Promise<boolean>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowVerify(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintVerify(cToken: string, minter: string, mintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        oracle(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowVerify(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, borrowerIndex: BigNumberish, overrides?: CallOverrides): Promise<void>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        seizeVerify(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferVerify(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Failure(uint256,uint256,uint256)"(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
        "MarketEntered(address,address)"(cToken?: null, account?: null): MarketEnteredEventFilter;
        MarketEntered(cToken?: null, account?: null): MarketEnteredEventFilter;
        "MarketExited(address,address)"(cToken?: null, account?: null): MarketExitedEventFilter;
        MarketExited(cToken?: null, account?: null): MarketExitedEventFilter;
        "MarketListed(address)"(cToken?: null): MarketListedEventFilter;
        MarketListed(cToken?: null): MarketListedEventFilter;
        "NewCloseFactor(uint256,uint256)"(oldCloseFactorMantissa?: null, newCloseFactorMantissa?: null): NewCloseFactorEventFilter;
        NewCloseFactor(oldCloseFactorMantissa?: null, newCloseFactorMantissa?: null): NewCloseFactorEventFilter;
        "NewCollateralFactor(address,uint256,uint256)"(cToken?: null, oldCollateralFactorMantissa?: null, newCollateralFactorMantissa?: null): NewCollateralFactorEventFilter;
        NewCollateralFactor(cToken?: null, oldCollateralFactorMantissa?: null, newCollateralFactorMantissa?: null): NewCollateralFactorEventFilter;
        "NewLiquidationIncentive(uint256,uint256)"(oldLiquidationIncentiveMantissa?: null, newLiquidationIncentiveMantissa?: null): NewLiquidationIncentiveEventFilter;
        NewLiquidationIncentive(oldLiquidationIncentiveMantissa?: null, newLiquidationIncentiveMantissa?: null): NewLiquidationIncentiveEventFilter;
        "NewMaxAssets(uint256,uint256)"(oldMaxAssets?: null, newMaxAssets?: null): NewMaxAssetsEventFilter;
        NewMaxAssets(oldMaxAssets?: null, newMaxAssets?: null): NewMaxAssetsEventFilter;
        "NewPriceOracle(address,address)"(oldPriceOracle?: null, newPriceOracle?: null): NewPriceOracleEventFilter;
        NewPriceOracle(oldPriceOracle?: null, newPriceOracle?: null): NewPriceOracleEventFilter;
    };
    estimateGas: {
        _become(unitroller: string, _oracle: string, _closeFactorMantissa: BigNumberish, _maxAssets: BigNumberish, reinitializing: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setCollateralFactor(cToken: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setMaxAssets(newMaxAssets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _supportMarket(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowVerify(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isComptroller(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidateBorrowVerify(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintVerify(cToken: string, minter: string, mintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayBorrowVerify(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, borrowerIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        seizeVerify(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferVerify(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _become(unitroller: string, _oracle: string, _closeFactorMantissa: BigNumberish, _maxAssets: BigNumberish, reinitializing: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setCollateralFactor(cToken: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setMaxAssets(newMaxAssets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _supportMarket(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowVerify(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exitMarket(cTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isComptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidateBorrowVerify(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintVerify(cToken: string, minter: string, mintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrowVerify(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, borrowerIndex: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        seizeVerify(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferVerify(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
