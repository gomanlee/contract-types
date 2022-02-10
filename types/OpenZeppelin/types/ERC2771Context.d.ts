import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC2771ContextInterface extends utils.Interface {
    contractName: "ERC2771Context";
    functions: {
        "isTrustedForwarder(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    events: {};
}
export interface ERC2771Context extends BaseContract {
    contractName: "ERC2771Context";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC2771ContextInterface;
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
    };
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
