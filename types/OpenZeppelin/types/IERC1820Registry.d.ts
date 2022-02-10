import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC1820RegistryInterface extends utils.Interface {
    contractName: "IERC1820Registry";
    functions: {
        "getInterfaceImplementer(address,bytes32)": FunctionFragment;
        "getManager(address)": FunctionFragment;
        "implementsERC165Interface(address,bytes4)": FunctionFragment;
        "implementsERC165InterfaceNoCache(address,bytes4)": FunctionFragment;
        "interfaceHash(string)": FunctionFragment;
        "setInterfaceImplementer(address,bytes32,address)": FunctionFragment;
        "setManager(address,address)": FunctionFragment;
        "updateERC165Cache(address,bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getInterfaceImplementer", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getManager", values: [string]): string;
    encodeFunctionData(functionFragment: "implementsERC165Interface", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "implementsERC165InterfaceNoCache", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "interfaceHash", values: [string]): string;
    encodeFunctionData(functionFragment: "setInterfaceImplementer", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setManager", values: [string, string]): string;
    encodeFunctionData(functionFragment: "updateERC165Cache", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "getInterfaceImplementer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementsERC165Interface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementsERC165InterfaceNoCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterfaceImplementer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateERC165Cache", data: BytesLike): Result;
    events: {
        "InterfaceImplementerSet(address,bytes32,address)": EventFragment;
        "ManagerChanged(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "InterfaceImplementerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ManagerChanged"): EventFragment;
}
export declare type InterfaceImplementerSetEvent = TypedEvent<[
    string,
    string,
    string
], {
    account: string;
    interfaceHash: string;
    implementer: string;
}>;
export declare type InterfaceImplementerSetEventFilter = TypedEventFilter<InterfaceImplementerSetEvent>;
export declare type ManagerChangedEvent = TypedEvent<[
    string,
    string
], {
    account: string;
    newManager: string;
}>;
export declare type ManagerChangedEventFilter = TypedEventFilter<ManagerChangedEvent>;
export interface IERC1820Registry extends BaseContract {
    contractName: "IERC1820Registry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1820RegistryInterface;
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
        getInterfaceImplementer(account: string, _interfaceHash: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getManager(account: string, overrides?: CallOverrides): Promise<[string]>;
        implementsERC165Interface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        implementsERC165InterfaceNoCache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        interfaceHash(interfaceName: string, overrides?: CallOverrides): Promise<[string]>;
        setInterfaceImplementer(account: string, _interfaceHash: BytesLike, implementer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setManager(account: string, newManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateERC165Cache(account: string, interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getInterfaceImplementer(account: string, _interfaceHash: BytesLike, overrides?: CallOverrides): Promise<string>;
    getManager(account: string, overrides?: CallOverrides): Promise<string>;
    implementsERC165Interface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    implementsERC165InterfaceNoCache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    interfaceHash(interfaceName: string, overrides?: CallOverrides): Promise<string>;
    setInterfaceImplementer(account: string, _interfaceHash: BytesLike, implementer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setManager(account: string, newManager: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateERC165Cache(account: string, interfaceId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getInterfaceImplementer(account: string, _interfaceHash: BytesLike, overrides?: CallOverrides): Promise<string>;
        getManager(account: string, overrides?: CallOverrides): Promise<string>;
        implementsERC165Interface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        implementsERC165InterfaceNoCache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        interfaceHash(interfaceName: string, overrides?: CallOverrides): Promise<string>;
        setInterfaceImplementer(account: string, _interfaceHash: BytesLike, implementer: string, overrides?: CallOverrides): Promise<void>;
        setManager(account: string, newManager: string, overrides?: CallOverrides): Promise<void>;
        updateERC165Cache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "InterfaceImplementerSet(address,bytes32,address)"(account?: string | null, interfaceHash?: BytesLike | null, implementer?: string | null): InterfaceImplementerSetEventFilter;
        InterfaceImplementerSet(account?: string | null, interfaceHash?: BytesLike | null, implementer?: string | null): InterfaceImplementerSetEventFilter;
        "ManagerChanged(address,address)"(account?: string | null, newManager?: string | null): ManagerChangedEventFilter;
        ManagerChanged(account?: string | null, newManager?: string | null): ManagerChangedEventFilter;
    };
    estimateGas: {
        getInterfaceImplementer(account: string, _interfaceHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getManager(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementsERC165Interface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        implementsERC165InterfaceNoCache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        interfaceHash(interfaceName: string, overrides?: CallOverrides): Promise<BigNumber>;
        setInterfaceImplementer(account: string, _interfaceHash: BytesLike, implementer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setManager(account: string, newManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateERC165Cache(account: string, interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getInterfaceImplementer(account: string, _interfaceHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getManager(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementsERC165Interface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementsERC165InterfaceNoCache(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interfaceHash(interfaceName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setInterfaceImplementer(account: string, _interfaceHash: BytesLike, implementer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setManager(account: string, newManager: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateERC165Cache(account: string, interfaceId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
