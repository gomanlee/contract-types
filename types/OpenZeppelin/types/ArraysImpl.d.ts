import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArraysImplInterface extends utils.Interface {
    contractName: "ArraysImpl";
    functions: {
        "findUpperBound(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "findUpperBound", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "findUpperBound", data: BytesLike): Result;
    events: {};
}
export interface ArraysImpl extends BaseContract {
    contractName: "ArraysImpl";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArraysImplInterface;
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
        findUpperBound(element: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    findUpperBound(element: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        findUpperBound(element: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        findUpperBound(element: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        findUpperBound(element: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
