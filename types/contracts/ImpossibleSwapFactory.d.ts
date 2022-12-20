import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IChangeTokenAccessParams {
    token: string;
    allowed: boolean;
}
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export interface ISetRouterAndExtensionParams {
    router: string;
    routerExtension: string;
}
export declare class ImpossibleSwapFactory extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): ImpossibleSwapFactory.PairCreatedEvent;
    parseUpdatedGovernanceEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.UpdatedGovernanceEvent[];
    decodeUpdatedGovernanceEvent(event: Event): ImpossibleSwapFactory.UpdatedGovernanceEvent;
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    approvedTokens: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    changeTokenAccess: {
        (params: IChangeTokenAccessParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IChangeTokenAccessParams, options?: TransactionOptions) => Promise<void>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    };
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    router: {
        (options?: TransactionOptions): Promise<string>;
    };
    routerExtension: {
        (options?: TransactionOptions): Promise<string>;
    };
    setFeeTo: {
        (feeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeTo: string, options?: TransactionOptions) => Promise<void>;
    };
    setGovernance: {
        (governance: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (governance: string, options?: TransactionOptions) => Promise<void>;
    };
    setRouterAndExtension: {
        (params: ISetRouterAndExtensionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetRouterAndExtensionParams, options?: TransactionOptions) => Promise<void>;
    };
    setWhitelist: {
        (b: boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (b: boolean, options?: TransactionOptions) => Promise<void>;
    };
    whitelist: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    private assign;
}
export declare module ImpossibleSwapFactory {
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        param4: BigNumber;
        _event: Event;
    }
    interface UpdatedGovernanceEvent {
        governance: string;
        _event: Event;
    }
}
