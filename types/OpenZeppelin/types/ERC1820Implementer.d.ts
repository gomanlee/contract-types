import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC1820ImplementerInterface extends utils.Interface {
    contractName: "ERC1820Implementer";
    functions: {
        "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "canImplementInterfaceForAddress", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "canImplementInterfaceForAddress", data: BytesLike): Result;
    events: {};
}
export interface ERC1820Implementer extends BaseContract {
    contractName: "ERC1820Implementer";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1820ImplementerInterface;
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
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<[string]>;
    };
    canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
