import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC165CheckerMockInterface extends utils.Interface {
    contractName: "ERC165CheckerMock";
    functions: {
        "getSupportedInterfaces(address,bytes4[])": FunctionFragment;
        "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
        "supportsERC165(address)": FunctionFragment;
        "supportsInterface(address,bytes4)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getSupportedInterfaces", values: [string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "supportsAllInterfaces", values: [string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "supportsERC165", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "getSupportedInterfaces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsAllInterfaces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsERC165", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {};
}
export interface ERC165CheckerMock extends BaseContract {
    contractName: "ERC165CheckerMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC165CheckerMockInterface;
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
        getSupportedInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<[boolean[]]>;
        supportsAllInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<[boolean]>;
        supportsERC165(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        supportsInterface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getSupportedInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<boolean[]>;
    supportsAllInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
    supportsERC165(account: string, overrides?: CallOverrides): Promise<boolean>;
    supportsInterface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getSupportedInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<boolean[]>;
        supportsAllInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<boolean>;
        supportsERC165(account: string, overrides?: CallOverrides): Promise<boolean>;
        supportsInterface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getSupportedInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        supportsAllInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        supportsERC165(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getSupportedInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsAllInterfaces(account: string, interfaceIds: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsERC165(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(account: string, interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
