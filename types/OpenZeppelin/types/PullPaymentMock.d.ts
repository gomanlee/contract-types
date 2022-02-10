import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PullPaymentMockInterface extends utils.Interface {
    contractName: "PullPaymentMock";
    functions: {
        "callTransfer(address,uint256)": FunctionFragment;
        "payments(address)": FunctionFragment;
        "withdrawPayments(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "callTransfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "payments", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawPayments", values: [string]): string;
    decodeFunctionResult(functionFragment: "callTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "payments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawPayments", data: BytesLike): Result;
    events: {};
}
export interface PullPaymentMock extends BaseContract {
    contractName: "PullPaymentMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PullPaymentMockInterface;
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
        callTransfer(dest: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        payments(dest: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawPayments(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    callTransfer(dest: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    payments(dest: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawPayments(payee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        callTransfer(dest: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        payments(dest: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawPayments(payee: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        callTransfer(dest: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        payments(dest: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawPayments(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        callTransfer(dest: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        payments(dest: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawPayments(payee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
