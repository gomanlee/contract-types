import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC3156FlashBorrowerInterface extends utils.Interface {
    contractName: "IERC3156FlashBorrower";
    functions: {
        "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onFlashLoan", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "onFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IERC3156FlashBorrower extends BaseContract {
    contractName: "IERC3156FlashBorrower";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC3156FlashBorrowerInterface;
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
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onFlashLoan(initiator: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
