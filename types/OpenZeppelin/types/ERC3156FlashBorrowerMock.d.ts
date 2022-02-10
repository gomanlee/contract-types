import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ERC3156FlashBorrowerMockInterface extends utils.Interface {
    contractName: "ERC3156FlashBorrowerMock";
    functions: {
        "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "onFlashLoan", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "onFlashLoan", data: BytesLike): Result;
    events: {
        "BalanceOf(address,address,uint256)": EventFragment;
        "TotalSupply(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BalanceOf"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TotalSupply"): EventFragment;
}
export declare type BalanceOfEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    token: string;
    account: string;
    value: BigNumber;
}>;
export declare type BalanceOfEventFilter = TypedEventFilter<BalanceOfEvent>;
export declare type TotalSupplyEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    value: BigNumber;
}>;
export declare type TotalSupplyEventFilter = TypedEventFilter<TotalSupplyEvent>;
export interface ERC3156FlashBorrowerMock extends BaseContract {
    contractName: "ERC3156FlashBorrowerMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC3156FlashBorrowerMockInterface;
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
        onFlashLoan(arg0: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    onFlashLoan(arg0: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        onFlashLoan(arg0: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BalanceOf(address,address,uint256)"(token?: null, account?: null, value?: null): BalanceOfEventFilter;
        BalanceOf(token?: null, account?: null, value?: null): BalanceOfEventFilter;
        "TotalSupply(address,uint256)"(token?: null, value?: null): TotalSupplyEventFilter;
        TotalSupply(token?: null, value?: null): TotalSupplyEventFilter;
    };
    estimateGas: {
        onFlashLoan(arg0: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        onFlashLoan(arg0: string, token: string, amount: BigNumberish, fee: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
