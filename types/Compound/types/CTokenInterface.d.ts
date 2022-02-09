import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CTokenInterfaceInterface extends utils.Interface {
    contractName: "CTokenInterface";
    functions: {
        "_acceptAdmin()": FunctionFragment;
        "_reduceReserves(uint256)": FunctionFragment;
        "_setComptroller(address)": FunctionFragment;
        "_setInterestRateModel(address)": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setReserveFactor(uint256)": FunctionFragment;
        "accrualBlockNumber()": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "admin()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfUnderlying(address)": FunctionFragment;
        "borrowBalanceCurrent(address)": FunctionFragment;
        "borrowBalanceStored(address)": FunctionFragment;
        "borrowIndex()": FunctionFragment;
        "borrowRatePerBlock()": FunctionFragment;
        "comptroller()": FunctionFragment;
        "decimals()": FunctionFragment;
        "exchangeRateCurrent()": FunctionFragment;
        "exchangeRateStored()": FunctionFragment;
        "getAccountSnapshot(address)": FunctionFragment;
        "getCash()": FunctionFragment;
        "interestRateModel()": FunctionFragment;
        "isCToken()": FunctionFragment;
        "name()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "protocolSeizeShareMantissa()": FunctionFragment;
        "reserveFactorMantissa()": FunctionFragment;
        "seize(address,address,uint256)": FunctionFragment;
        "supplyRatePerBlock()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalBorrows()": FunctionFragment;
        "totalBorrowsCurrent()": FunctionFragment;
        "totalReserves()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_reduceReserves", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setComptroller", values: [string]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrualBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowBalanceStored", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [string]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isCToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolSeizeShareMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserveFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "seize", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrows", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrowsCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_reduceReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setComptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrualBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolSeizeShareMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserveFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowsCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "AccrueInterest(uint256,uint256,uint256,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "Borrow(address,uint256,uint256,uint256)": EventFragment;
        "Failure(uint256,uint256,uint256)": EventFragment;
        "LiquidateBorrow(address,address,uint256,address,uint256)": EventFragment;
        "Mint(address,uint256,uint256)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewComptroller(address,address)": EventFragment;
        "NewMarketInterestRateModel(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewReserveFactor(uint256,uint256)": EventFragment;
        "Redeem(address,uint256,uint256)": EventFragment;
        "RepayBorrow(address,address,uint256,uint256,uint256)": EventFragment;
        "ReservesAdded(address,uint256,uint256)": EventFragment;
        "ReservesReduced(address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccrueInterest"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidateBorrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewComptroller"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewMarketInterestRateModel"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewReserveFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayBorrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReservesReduced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type AccrueInterestEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    cashPrior: BigNumber;
    interestAccumulated: BigNumber;
    borrowIndex: BigNumber;
    totalBorrows: BigNumber;
}>;
export declare type AccrueInterestEventFilter = TypedEventFilter<AccrueInterestEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    amount: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type BorrowEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    borrower: string;
    borrowAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}>;
export declare type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
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
export declare type LiquidateBorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], {
    liquidator: string;
    borrower: string;
    repayAmount: BigNumber;
    cTokenCollateral: string;
    seizeTokens: BigNumber;
}>;
export declare type LiquidateBorrowEventFilter = TypedEventFilter<LiquidateBorrowEvent>;
export declare type MintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    minter: string;
    mintAmount: BigNumber;
    mintTokens: BigNumber;
}>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export declare type NewAdminEvent = TypedEvent<[
    string,
    string
], {
    oldAdmin: string;
    newAdmin: string;
}>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export declare type NewComptrollerEvent = TypedEvent<[
    string,
    string
], {
    oldComptroller: string;
    newComptroller: string;
}>;
export declare type NewComptrollerEventFilter = TypedEventFilter<NewComptrollerEvent>;
export declare type NewMarketInterestRateModelEvent = TypedEvent<[
    string,
    string
], {
    oldInterestRateModel: string;
    newInterestRateModel: string;
}>;
export declare type NewMarketInterestRateModelEventFilter = TypedEventFilter<NewMarketInterestRateModelEvent>;
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export declare type NewReserveFactorEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    oldReserveFactorMantissa: BigNumber;
    newReserveFactorMantissa: BigNumber;
}>;
export declare type NewReserveFactorEventFilter = TypedEventFilter<NewReserveFactorEvent>;
export declare type RedeemEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    redeemer: string;
    redeemAmount: BigNumber;
    redeemTokens: BigNumber;
}>;
export declare type RedeemEventFilter = TypedEventFilter<RedeemEvent>;
export declare type RepayBorrowEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    payer: string;
    borrower: string;
    repayAmount: BigNumber;
    accountBorrows: BigNumber;
    totalBorrows: BigNumber;
}>;
export declare type RepayBorrowEventFilter = TypedEventFilter<RepayBorrowEvent>;
export declare type ReservesAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    benefactor: string;
    addAmount: BigNumber;
    newTotalReserves: BigNumber;
}>;
export declare type ReservesAddedEventFilter = TypedEventFilter<ReservesAddedEvent>;
export declare type ReservesReducedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    admin: string;
    reduceAmount: BigNumber;
    newTotalReserves: BigNumber;
}>;
export declare type ReservesReducedEventFilter = TypedEventFilter<ReservesReducedEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    amount: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface CTokenInterface extends BaseContract {
    contractName: "CTokenInterface";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CTokenInterfaceInterface;
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
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setComptroller(newComptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        comptroller(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        interestRateModel(overrides?: CallOverrides): Promise<[string]>;
        isCToken(overrides?: CallOverrides): Promise<[boolean]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setComptroller(newComptroller: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    accrueInterest(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(owner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowBalanceCurrent(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    comptroller(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    exchangeRateCurrent(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
    getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    interestRateModel(overrides?: CallOverrides): Promise<string>;
    isCToken(overrides?: CallOverrides): Promise<boolean>;
    name(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowsCurrent(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _acceptAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setComptroller(newComptroller: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<string>;
        isCToken(overrides?: CallOverrides): Promise<boolean>;
        name(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AccrueInterest(uint256,uint256,uint256,uint256)"(cashPrior?: null, interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        AccrueInterest(cashPrior?: null, interestAccumulated?: null, borrowIndex?: null, totalBorrows?: null): AccrueInterestEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, amount?: null): ApprovalEventFilter;
        "Borrow(address,uint256,uint256,uint256)"(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        Borrow(borrower?: null, borrowAmount?: null, accountBorrows?: null, totalBorrows?: null): BorrowEventFilter;
        "Failure(uint256,uint256,uint256)"(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
        "LiquidateBorrow(address,address,uint256,address,uint256)"(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        LiquidateBorrow(liquidator?: null, borrower?: null, repayAmount?: null, cTokenCollateral?: null, seizeTokens?: null): LiquidateBorrowEventFilter;
        "Mint(address,uint256,uint256)"(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        Mint(minter?: null, mintAmount?: null, mintTokens?: null): MintEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewComptroller(address,address)"(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        NewComptroller(oldComptroller?: null, newComptroller?: null): NewComptrollerEventFilter;
        "NewMarketInterestRateModel(address,address)"(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        NewMarketInterestRateModel(oldInterestRateModel?: null, newInterestRateModel?: null): NewMarketInterestRateModelEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewReserveFactor(uint256,uint256)"(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        NewReserveFactor(oldReserveFactorMantissa?: null, newReserveFactorMantissa?: null): NewReserveFactorEventFilter;
        "Redeem(address,uint256,uint256)"(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        Redeem(redeemer?: null, redeemAmount?: null, redeemTokens?: null): RedeemEventFilter;
        "RepayBorrow(address,address,uint256,uint256,uint256)"(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        RepayBorrow(payer?: null, borrower?: null, repayAmount?: null, accountBorrows?: null, totalBorrows?: null): RepayBorrowEventFilter;
        "ReservesAdded(address,uint256,uint256)"(benefactor?: null, addAmount?: null, newTotalReserves?: null): ReservesAddedEventFilter;
        ReservesAdded(benefactor?: null, addAmount?: null, newTotalReserves?: null): ReservesAddedEventFilter;
        "ReservesReduced(address,uint256,uint256)"(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        ReservesReduced(admin?: null, reduceAmount?: null, newTotalReserves?: null): ReservesReducedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, amount?: null): TransferEventFilter;
    };
    estimateGas: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setComptroller(newComptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        isCToken(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _reduceReserves(reduceAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setComptroller(newComptroller: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(owner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowBalanceStored(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchangeRateStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isCToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowsCurrent(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
