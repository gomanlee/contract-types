import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace CompoundLens {
    type CTokenBalancesStruct = {
        cToken: string;
        balanceOf: BigNumberish;
        borrowBalanceCurrent: BigNumberish;
        balanceOfUnderlying: BigNumberish;
        tokenBalance: BigNumberish;
        tokenAllowance: BigNumberish;
    };
    type CTokenBalancesStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        cToken: string;
        balanceOf: BigNumber;
        borrowBalanceCurrent: BigNumber;
        balanceOfUnderlying: BigNumber;
        tokenBalance: BigNumber;
        tokenAllowance: BigNumber;
    };
    type CTokenMetadataStruct = {
        cToken: string;
        exchangeRateCurrent: BigNumberish;
        supplyRatePerBlock: BigNumberish;
        borrowRatePerBlock: BigNumberish;
        reserveFactorMantissa: BigNumberish;
        totalBorrows: BigNumberish;
        totalReserves: BigNumberish;
        totalSupply: BigNumberish;
        totalCash: BigNumberish;
        isListed: boolean;
        collateralFactorMantissa: BigNumberish;
        underlyingAssetAddress: string;
        cTokenDecimals: BigNumberish;
        underlyingDecimals: BigNumberish;
        compSupplySpeed: BigNumberish;
        compBorrowSpeed: BigNumberish;
        borrowCap: BigNumberish;
    };
    type CTokenMetadataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        cToken: string;
        exchangeRateCurrent: BigNumber;
        supplyRatePerBlock: BigNumber;
        borrowRatePerBlock: BigNumber;
        reserveFactorMantissa: BigNumber;
        totalBorrows: BigNumber;
        totalReserves: BigNumber;
        totalSupply: BigNumber;
        totalCash: BigNumber;
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        underlyingAssetAddress: string;
        cTokenDecimals: BigNumber;
        underlyingDecimals: BigNumber;
        compSupplySpeed: BigNumber;
        compBorrowSpeed: BigNumber;
        borrowCap: BigNumber;
    };
    type CTokenUnderlyingPriceStruct = {
        cToken: string;
        underlyingPrice: BigNumberish;
    };
    type CTokenUnderlyingPriceStructOutput = [string, BigNumber] & {
        cToken: string;
        underlyingPrice: BigNumber;
    };
    type AccountLimitsStruct = {
        markets: string[];
        liquidity: BigNumberish;
        shortfall: BigNumberish;
    };
    type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
        markets: string[];
        liquidity: BigNumber;
        shortfall: BigNumber;
    };
    type CompBalanceMetadataStruct = {
        balance: BigNumberish;
        votes: BigNumberish;
        delegate: string;
    };
    type CompBalanceMetadataStructOutput = [
        BigNumber,
        BigNumber,
        string
    ] & {
        balance: BigNumber;
        votes: BigNumber;
        delegate: string;
    };
    type CompBalanceMetadataExtStruct = {
        balance: BigNumberish;
        votes: BigNumberish;
        delegate: string;
        allocated: BigNumberish;
    };
    type CompBalanceMetadataExtStructOutput = [
        BigNumber,
        BigNumber,
        string,
        BigNumber
    ] & {
        balance: BigNumber;
        votes: BigNumber;
        delegate: string;
        allocated: BigNumber;
    };
    type CompVotesStruct = {
        blockNumber: BigNumberish;
        votes: BigNumberish;
    };
    type CompVotesStructOutput = [BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        votes: BigNumber;
    };
    type GovBravoProposalStruct = {
        proposalId: BigNumberish;
        proposer: string;
        eta: BigNumberish;
        targets: string[];
        values: BigNumberish[];
        signatures: string[];
        calldatas: BytesLike[];
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        executed: boolean;
    };
    type GovBravoProposalStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        proposalId: BigNumber;
        proposer: string;
        eta: BigNumber;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
    };
    type GovBravoReceiptStruct = {
        proposalId: BigNumberish;
        hasVoted: boolean;
        support: BigNumberish;
        votes: BigNumberish;
    };
    type GovBravoReceiptStructOutput = [
        BigNumber,
        boolean,
        number,
        BigNumber
    ] & {
        proposalId: BigNumber;
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
    };
    type GovProposalStruct = {
        proposalId: BigNumberish;
        proposer: string;
        eta: BigNumberish;
        targets: string[];
        values: BigNumberish[];
        signatures: string[];
        calldatas: BytesLike[];
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        canceled: boolean;
        executed: boolean;
    };
    type GovProposalStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
    ] & {
        proposalId: BigNumber;
        proposer: string;
        eta: BigNumber;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
    };
    type GovReceiptStruct = {
        proposalId: BigNumberish;
        hasVoted: boolean;
        support: boolean;
        votes: BigNumberish;
    };
    type GovReceiptStructOutput = [
        BigNumber,
        boolean,
        boolean,
        BigNumber
    ] & {
        proposalId: BigNumber;
        hasVoted: boolean;
        support: boolean;
        votes: BigNumber;
    };
}
export interface CompoundLensInterface extends utils.Interface {
    contractName: "CompoundLens";
    functions: {
        "cTokenBalances(address,address)": FunctionFragment;
        "cTokenBalancesAll(address[],address)": FunctionFragment;
        "cTokenMetadata(address)": FunctionFragment;
        "cTokenMetadataAll(address[])": FunctionFragment;
        "cTokenUnderlyingPrice(address)": FunctionFragment;
        "cTokenUnderlyingPriceAll(address[])": FunctionFragment;
        "getAccountLimits(address,address)": FunctionFragment;
        "getCompBalanceMetadata(address,address)": FunctionFragment;
        "getCompBalanceMetadataExt(address,address,address)": FunctionFragment;
        "getCompVotes(address,address,uint32[])": FunctionFragment;
        "getGovBravoProposals(address,uint256[])": FunctionFragment;
        "getGovBravoReceipts(address,address,uint256[])": FunctionFragment;
        "getGovProposals(address,uint256[])": FunctionFragment;
        "getGovReceipts(address,address,uint256[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "cTokenBalances", values: [string, string]): string;
    encodeFunctionData(functionFragment: "cTokenBalancesAll", values: [string[], string]): string;
    encodeFunctionData(functionFragment: "cTokenMetadata", values: [string]): string;
    encodeFunctionData(functionFragment: "cTokenMetadataAll", values: [string[]]): string;
    encodeFunctionData(functionFragment: "cTokenUnderlyingPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "cTokenUnderlyingPriceAll", values: [string[]]): string;
    encodeFunctionData(functionFragment: "getAccountLimits", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getCompBalanceMetadata", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getCompBalanceMetadataExt", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "getCompVotes", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGovBravoProposals", values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGovBravoReceipts", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGovProposals", values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getGovReceipts", values: [string, string, BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "cTokenBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokenBalancesAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokenMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokenMetadataAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokenUnderlyingPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokenUnderlyingPriceAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCompBalanceMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCompBalanceMetadataExt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCompVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovBravoProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovBravoReceipts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovReceipts", data: BytesLike): Result;
    events: {};
}
export interface CompoundLens extends BaseContract {
    contractName: "CompoundLens";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CompoundLensInterface;
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
        cTokenBalances(cToken: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cTokenBalancesAll(cTokens: string[], account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cTokenMetadata(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cTokenMetadataAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cTokenUnderlyingPrice(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cTokenUnderlyingPriceAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAccountLimits(comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCompBalanceMetadata(comp: string, account: string, overrides?: CallOverrides): Promise<[CompoundLens.CompBalanceMetadataStructOutput]>;
        getCompBalanceMetadataExt(comp: string, comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCompVotes(comp: string, account: string, blockNumbers: BigNumberish[], overrides?: CallOverrides): Promise<[CompoundLens.CompVotesStructOutput[]]>;
        getGovBravoProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<[CompoundLens.GovBravoProposalStructOutput[]]>;
        getGovBravoReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<[CompoundLens.GovBravoReceiptStructOutput[]]>;
        getGovProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<[CompoundLens.GovProposalStructOutput[]]>;
        getGovReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<[CompoundLens.GovReceiptStructOutput[]]>;
    };
    cTokenBalances(cToken: string, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cTokenBalancesAll(cTokens: string[], account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cTokenMetadata(cToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cTokenMetadataAll(cTokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cTokenUnderlyingPrice(cToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cTokenUnderlyingPriceAll(cTokens: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAccountLimits(comptroller: string, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCompBalanceMetadata(comp: string, account: string, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataStructOutput>;
    getCompBalanceMetadataExt(comp: string, comptroller: string, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCompVotes(comp: string, account: string, blockNumbers: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.CompVotesStructOutput[]>;
    getGovBravoProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoProposalStructOutput[]>;
    getGovBravoReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoReceiptStructOutput[]>;
    getGovProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovProposalStructOutput[]>;
    getGovReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovReceiptStructOutput[]>;
    callStatic: {
        cTokenBalances(cToken: string, account: string, overrides?: CallOverrides): Promise<CompoundLens.CTokenBalancesStructOutput>;
        cTokenBalancesAll(cTokens: string[], account: string, overrides?: CallOverrides): Promise<CompoundLens.CTokenBalancesStructOutput[]>;
        cTokenMetadata(cToken: string, overrides?: CallOverrides): Promise<CompoundLens.CTokenMetadataStructOutput>;
        cTokenMetadataAll(cTokens: string[], overrides?: CallOverrides): Promise<CompoundLens.CTokenMetadataStructOutput[]>;
        cTokenUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<CompoundLens.CTokenUnderlyingPriceStructOutput>;
        cTokenUnderlyingPriceAll(cTokens: string[], overrides?: CallOverrides): Promise<CompoundLens.CTokenUnderlyingPriceStructOutput[]>;
        getAccountLimits(comptroller: string, account: string, overrides?: CallOverrides): Promise<CompoundLens.AccountLimitsStructOutput>;
        getCompBalanceMetadata(comp: string, account: string, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataStructOutput>;
        getCompBalanceMetadataExt(comp: string, comptroller: string, account: string, overrides?: CallOverrides): Promise<CompoundLens.CompBalanceMetadataExtStructOutput>;
        getCompVotes(comp: string, account: string, blockNumbers: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.CompVotesStructOutput[]>;
        getGovBravoProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoProposalStructOutput[]>;
        getGovBravoReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovBravoReceiptStructOutput[]>;
        getGovProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovProposalStructOutput[]>;
        getGovReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<CompoundLens.GovReceiptStructOutput[]>;
    };
    filters: {};
    estimateGas: {
        cTokenBalances(cToken: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cTokenBalancesAll(cTokens: string[], account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cTokenMetadata(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cTokenMetadataAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cTokenUnderlyingPrice(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cTokenUnderlyingPriceAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAccountLimits(comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCompBalanceMetadata(comp: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCompBalanceMetadataExt(comp: string, comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCompVotes(comp: string, account: string, blockNumbers: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovBravoProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovBravoReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getGovReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        cTokenBalances(cToken: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cTokenBalancesAll(cTokens: string[], account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cTokenMetadata(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cTokenMetadataAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cTokenUnderlyingPrice(cToken: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cTokenUnderlyingPriceAll(cTokens: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAccountLimits(comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCompBalanceMetadata(comp: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCompBalanceMetadataExt(comp: string, comptroller: string, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCompVotes(comp: string, account: string, blockNumbers: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovBravoProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovBravoReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovProposals(governor: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGovReceipts(governor: string, voter: string, proposalIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
