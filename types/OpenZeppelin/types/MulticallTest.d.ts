import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MulticallTestInterface extends utils.Interface {
    contractName: "MulticallTest";
    functions: {
        "testReturnValues(address,address[],uint256[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "testReturnValues", values: [string, string[], BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "testReturnValues", data: BytesLike): Result;
    events: {};
}
export interface MulticallTest extends BaseContract {
    contractName: "MulticallTest";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MulticallTestInterface;
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
        testReturnValues(multicallToken: string, recipients: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    testReturnValues(multicallToken: string, recipients: string[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        testReturnValues(multicallToken: string, recipients: string[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        testReturnValues(multicallToken: string, recipients: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        testReturnValues(multicallToken: string, recipients: string[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
