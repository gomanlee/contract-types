import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC1820ImplementerMockInterface extends utils.Interface {
    contractName: "ERC1820ImplementerMock";
    functions: {
        "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
        "registerInterfaceForAddress(bytes32,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "canImplementInterfaceForAddress", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "registerInterfaceForAddress", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "canImplementInterfaceForAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerInterfaceForAddress", data: BytesLike): Result;
    events: {};
}
export interface ERC1820ImplementerMock extends BaseContract {
    contractName: "ERC1820ImplementerMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC1820ImplementerMockInterface;
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
        registerInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<string>;
    registerInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<string>;
        registerInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        canImplementInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerInterfaceForAddress(interfaceHash: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
