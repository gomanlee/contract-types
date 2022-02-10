import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC777MockInterface extends utils.Interface {
    contractName: "ERC777Mock";
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "approveInternal(address,address,uint256)": FunctionFragment;
        "authorizeOperator(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256,bytes)": FunctionFragment;
        "decimals()": FunctionFragment;
        "defaultOperators()": FunctionFragment;
        "granularity()": FunctionFragment;
        "isOperatorFor(address,address)": FunctionFragment;
        "mintInternal(address,uint256,bytes,bytes)": FunctionFragment;
        "mintInternalExtended(address,uint256,bytes,bytes,bool)": FunctionFragment;
        "name()": FunctionFragment;
        "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
        "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
        "revokeOperator(address)": FunctionFragment;
        "send(address,uint256,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveInternal", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "authorizeOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultOperators", values?: undefined): string;
    encodeFunctionData(functionFragment: "granularity", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOperatorFor", values: [string, string]): string;
    encodeFunctionData(functionFragment: "mintInternal", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mintInternalExtended", values: [string, BigNumberish, BytesLike, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "operatorBurn", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "operatorSend", values: [string, string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "revokeOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "send", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveInternal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOperators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "granularity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintInternal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintInternalExtended", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorSend", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "AuthorizedOperator(address,address)": EventFragment;
        "BeforeTokenTransfer()": EventFragment;
        "Burned(address,address,uint256,bytes,bytes)": EventFragment;
        "Minted(address,address,uint256,bytes,bytes)": EventFragment;
        "RevokedOperator(address,address)": EventFragment;
        "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeforeTokenTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type AuthorizedOperatorEvent = TypedEvent<[
    string,
    string
], {
    operator: string;
    tokenHolder: string;
}>;
export declare type AuthorizedOperatorEventFilter = TypedEventFilter<AuthorizedOperatorEvent>;
export declare type BeforeTokenTransferEvent = TypedEvent<[], {}>;
export declare type BeforeTokenTransferEventFilter = TypedEventFilter<BeforeTokenTransferEvent>;
export declare type BurnedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    from: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type BurnedEventFilter = TypedEventFilter<BurnedEvent>;
export declare type MintedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type MintedEventFilter = TypedEventFilter<MintedEvent>;
export declare type RevokedOperatorEvent = TypedEvent<[
    string,
    string
], {
    operator: string;
    tokenHolder: string;
}>;
export declare type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;
export declare type SentEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string
], {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
}>;
export declare type SentEventFilter = TypedEventFilter<SentEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ERC777Mock extends BaseContract {
    contractName: "ERC777Mock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC777MockInterface;
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
        allowance(holder: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveInternal(holder: string, spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;
        granularity(overrides?: CallOverrides): Promise<[BigNumber]>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintInternal(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintInternalExtended(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, requireReceptionAck: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(holder: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(holder: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveInternal(holder: string, spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authorizeOperator(operator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    defaultOperators(overrides?: CallOverrides): Promise<string[]>;
    granularity(overrides?: CallOverrides): Promise<BigNumber>;
    isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<boolean>;
    mintInternal(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintInternalExtended(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, requireReceptionAck: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeOperator(operator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(holder: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(holder: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        approveInternal(holder: string, spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        authorizeOperator(operator: string, overrides?: CallOverrides): Promise<void>;
        balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        defaultOperators(overrides?: CallOverrides): Promise<string[]>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<boolean>;
        mintInternal(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, overrides?: CallOverrides): Promise<void>;
        mintInternalExtended(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, requireReceptionAck: boolean, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: CallOverrides): Promise<void>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: CallOverrides): Promise<void>;
        revokeOperator(operator: string, overrides?: CallOverrides): Promise<void>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(holder: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "AuthorizedOperator(address,address)"(operator?: string | null, tokenHolder?: string | null): AuthorizedOperatorEventFilter;
        AuthorizedOperator(operator?: string | null, tokenHolder?: string | null): AuthorizedOperatorEventFilter;
        "BeforeTokenTransfer()"(): BeforeTokenTransferEventFilter;
        BeforeTokenTransfer(): BeforeTokenTransferEventFilter;
        "Burned(address,address,uint256,bytes,bytes)"(operator?: string | null, from?: string | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        Burned(operator?: string | null, from?: string | null, amount?: null, data?: null, operatorData?: null): BurnedEventFilter;
        "Minted(address,address,uint256,bytes,bytes)"(operator?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        Minted(operator?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): MintedEventFilter;
        "RevokedOperator(address,address)"(operator?: string | null, tokenHolder?: string | null): RevokedOperatorEventFilter;
        RevokedOperator(operator?: string | null, tokenHolder?: string | null): RevokedOperatorEventFilter;
        "Sent(address,address,address,uint256,bytes,bytes)"(operator?: string | null, from?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        Sent(operator?: string | null, from?: string | null, to?: string | null, amount?: null, data?: null, operatorData?: null): SentEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(holder: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveInternal(holder: string, spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;
        granularity(overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintInternal(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintInternalExtended(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, requireReceptionAck: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(holder: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(holder: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveInternal(holder: string, spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authorizeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperatorFor(operator: string, tokenHolder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintInternal(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintInternalExtended(to: string, amount: BigNumberish, userData: BytesLike, operatorData: BytesLike, requireReceptionAck: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorBurn(account: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        operatorSend(sender: string, recipient: string, amount: BigNumberish, data: BytesLike, operatorData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeOperator(operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        send(recipient: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(holder: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
