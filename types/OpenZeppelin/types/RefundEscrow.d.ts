import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RefundEscrowInterface extends utils.Interface {
    contractName: "RefundEscrow";
    functions: {
        "beneficiary()": FunctionFragment;
        "beneficiaryWithdraw()": FunctionFragment;
        "close()": FunctionFragment;
        "deposit(address)": FunctionFragment;
        "depositsOf(address)": FunctionFragment;
        "enableRefunds()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "state()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdraw(address)": FunctionFragment;
        "withdrawalAllowed(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "beneficiary", values?: undefined): string;
    encodeFunctionData(functionFragment: "beneficiaryWithdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "close", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string]): string;
    encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
    encodeFunctionData(functionFragment: "enableRefunds", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "state", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawalAllowed", values: [string]): string;
    decodeFunctionResult(functionFragment: "beneficiary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beneficiaryWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableRefunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawalAllowed", data: BytesLike): Result;
    events: {
        "Deposited(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RefundsClosed()": EventFragment;
        "RefundsEnabled()": EventFragment;
        "Withdrawn(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundsClosed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundsEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export declare type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], {
    payee: string;
    weiAmount: BigNumber;
}>;
export declare type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export declare type RefundsClosedEvent = TypedEvent<[], {}>;
export declare type RefundsClosedEventFilter = TypedEventFilter<RefundsClosedEvent>;
export declare type RefundsEnabledEvent = TypedEvent<[], {}>;
export declare type RefundsEnabledEventFilter = TypedEventFilter<RefundsEnabledEvent>;
export declare type WithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], {
    payee: string;
    weiAmount: BigNumber;
}>;
export declare type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface RefundEscrow extends BaseContract {
    contractName: "RefundEscrow";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RefundEscrowInterface;
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
        beneficiary(overrides?: CallOverrides): Promise<[string]>;
        beneficiaryWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposit(refundee: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositsOf(payee: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        enableRefunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        state(overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    beneficiary(overrides?: CallOverrides): Promise<string>;
    beneficiaryWithdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    close(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposit(refundee: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;
    enableRefunds(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    state(overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(payee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        beneficiary(overrides?: CallOverrides): Promise<string>;
        beneficiaryWithdraw(overrides?: CallOverrides): Promise<void>;
        close(overrides?: CallOverrides): Promise<void>;
        deposit(refundee: string, overrides?: CallOverrides): Promise<void>;
        depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;
        enableRefunds(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        state(overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdraw(payee: string, overrides?: CallOverrides): Promise<void>;
        withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Deposited(address,uint256)"(payee?: string | null, weiAmount?: null): DepositedEventFilter;
        Deposited(payee?: string | null, weiAmount?: null): DepositedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "RefundsClosed()"(): RefundsClosedEventFilter;
        RefundsClosed(): RefundsClosedEventFilter;
        "RefundsEnabled()"(): RefundsEnabledEventFilter;
        RefundsEnabled(): RefundsEnabledEventFilter;
        "Withdrawn(address,uint256)"(payee?: string | null, weiAmount?: null): WithdrawnEventFilter;
        Withdrawn(payee?: string | null, weiAmount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        beneficiary(overrides?: CallOverrides): Promise<BigNumber>;
        beneficiaryWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposit(refundee: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;
        enableRefunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        state(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beneficiaryWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        close(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposit(refundee: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositsOf(payee: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enableRefunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        state(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
