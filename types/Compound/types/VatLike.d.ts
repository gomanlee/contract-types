import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VatLikeInterface extends utils.Interface {
    contractName: "VatLike";
    functions: {
        "dai(address)": FunctionFragment;
        "hope(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "dai", values: [string]): string;
    encodeFunctionData(functionFragment: "hope", values: [string]): string;
    decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
    events: {};
}
export interface VatLike extends BaseContract {
    contractName: "VatLike";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VatLikeInterface;
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
        dai(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        hope(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    hope(arg0: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        hope(arg0: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        dai(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        hope(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        dai(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hope(arg0: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}