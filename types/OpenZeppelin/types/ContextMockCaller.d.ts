import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ContextMockCallerInterface extends utils.Interface {
    contractName: "ContextMockCaller";
    functions: {
        "callData(address,uint256,string)": FunctionFragment;
        "callSender(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "callData", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "callSender", values: [string]): string;
    decodeFunctionResult(functionFragment: "callData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSender", data: BytesLike): Result;
    events: {};
}
export interface ContextMockCaller extends BaseContract {
    contractName: "ContextMockCaller";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ContextMockCallerInterface;
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
        callData(context: string, integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callSender(context: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    callData(context: string, integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callSender(context: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        callData(context: string, integerValue: BigNumberish, stringValue: string, overrides?: CallOverrides): Promise<void>;
        callSender(context: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        callData(context: string, integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callSender(context: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        callData(context: string, integerValue: BigNumberish, stringValue: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callSender(context: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
