import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PaymentSplitterInterface extends utils.Interface {
    contractName: "PaymentSplitter";
    functions: {
        "payee(uint256)": FunctionFragment;
        "release(address)": FunctionFragment;
        "released(address,address)": FunctionFragment;
        "shares(address)": FunctionFragment;
        "totalReleased(address)": FunctionFragment;
        "totalShares()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "release", values: [string]): string;
    encodeFunctionData(functionFragment: "released", values: [string, string]): string;
    encodeFunctionData(functionFragment: "shares", values: [string]): string;
    encodeFunctionData(functionFragment: "totalReleased", values: [string]): string;
    encodeFunctionData(functionFragment: "totalShares", values?: undefined): string;
    decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReleased", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalShares", data: BytesLike): Result;
    events: {
        "ERC20PaymentReleased(address,address,uint256)": EventFragment;
        "PayeeAdded(address,uint256)": EventFragment;
        "PaymentReceived(address,uint256)": EventFragment;
        "PaymentReleased(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20PaymentReleased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}
export declare type ERC20PaymentReleasedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    token: string;
    to: string;
    amount: BigNumber;
}>;
export declare type ERC20PaymentReleasedEventFilter = TypedEventFilter<ERC20PaymentReleasedEvent>;
export declare type PayeeAddedEvent = TypedEvent<[
    string,
    BigNumber
], {
    account: string;
    shares: BigNumber;
}>;
export declare type PayeeAddedEventFilter = TypedEventFilter<PayeeAddedEvent>;
export declare type PaymentReceivedEvent = TypedEvent<[
    string,
    BigNumber
], {
    from: string;
    amount: BigNumber;
}>;
export declare type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;
export declare type PaymentReleasedEvent = TypedEvent<[
    string,
    BigNumber
], {
    to: string;
    amount: BigNumber;
}>;
export declare type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;
export interface PaymentSplitter extends BaseContract {
    contractName: "PaymentSplitter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PaymentSplitterInterface;
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
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        shares(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "totalReleased()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "release(address)"(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "release(address,address)"(token: string, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "release(address)"(account: string, overrides?: CallOverrides): Promise<void>;
        "release(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<void>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ERC20PaymentReleased(address,address,uint256)"(token?: string | null, to?: null, amount?: null): ERC20PaymentReleasedEventFilter;
        ERC20PaymentReleased(token?: string | null, to?: null, amount?: null): ERC20PaymentReleasedEventFilter;
        "PayeeAdded(address,uint256)"(account?: null, shares?: null): PayeeAddedEventFilter;
        PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;
        "PaymentReceived(address,uint256)"(from?: null, amount?: null): PaymentReceivedEventFilter;
        PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;
        "PaymentReleased(address,uint256)"(to?: null, amount?: null): PaymentReleasedEventFilter;
        PaymentReleased(to?: null, amount?: null): PaymentReleasedEventFilter;
    };
    estimateGas: {
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;
        totalShares(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        payee(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "release(address)"(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "release(address,address)"(token: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "released(address,address)"(token: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "released(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shares(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalReleased(address)"(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}