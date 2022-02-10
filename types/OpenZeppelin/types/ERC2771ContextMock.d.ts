import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC2771ContextMockInterface extends utils.Interface {
    contractName: "ERC2771ContextMock";
    functions: {
        "isTrustedForwarder(address)": FunctionFragment;
        "msgData(uint256,string)": FunctionFragment;
        "msgSender()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "msgData", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "msgData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
    events: {
        "Data(bytes,uint256,string)": EventFragment;
        "Sender(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Data"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sender"): EventFragment;
}
export declare type DataEvent = TypedEvent<[
    string,
    BigNumber,
    string
], {
    data: string;
    integerValue: BigNumber;
    stringValue: string;
}>;
export declare type DataEventFilter = TypedEventFilter<DataEvent>;
export declare type SenderEvent = TypedEvent<[string], {
    sender: string;
}>;
export declare type SenderEventFilter = TypedEventFilter<SenderEvent>;
export interface ERC2771ContextMock extends BaseContract {
    contractName: "ERC2771ContextMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC2771ContextMockInterface;
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
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        msgData(integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        msgSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    msgData(integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    msgSender(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        msgData(integerValue: BigNumberish, stringValue: string, overrides?: CallOverrides): Promise<void>;
        msgSender(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Data(bytes,uint256,string)"(data?: null, integerValue?: null, stringValue?: null): DataEventFilter;
        Data(data?: null, integerValue?: null, stringValue?: null): DataEventFilter;
        "Sender(address)"(sender?: null): SenderEventFilter;
        Sender(sender?: null): SenderEventFilter;
    };
    estimateGas: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        msgData(integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        msgSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        msgData(integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        msgSender(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
