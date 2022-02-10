import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface EIP712ExternalInterface extends utils.Interface {
    contractName: "EIP712External";
    functions: {
        "domainSeparator()": FunctionFragment;
        "getChainId()": FunctionFragment;
        "verify(bytes,address,address,string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "verify", values: [BytesLike, string, string, string]): string;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {};
}
export interface EIP712External extends BaseContract {
    contractName: "EIP712External";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EIP712ExternalInterface;
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
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        verify(signature: BytesLike, signer: string, mailTo: string, mailContents: string, overrides?: CallOverrides): Promise<[void]>;
    };
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    verify(signature: BytesLike, signer: string, mailTo: string, mailContents: string, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        verify(signature: BytesLike, signer: string, mailTo: string, mailContents: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        verify(signature: BytesLike, signer: string, mailTo: string, mailContents: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verify(signature: BytesLike, signer: string, mailTo: string, mailContents: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
