import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ICreatePairingParams {
    underlying: string;
    ratioNumerator: number | BigNumber;
    ratioDenominator: number | BigNumber;
}
export declare class ImpossibleWrapperFactory extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(governance: string, options?: TransactionOptions): Promise<string>;
    parseWrapCreatedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapCreatedEvent[];
    decodeWrapCreatedEvent(event: Event): ImpossibleWrapperFactory.WrapCreatedEvent;
    parseWrapDeletedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapDeletedEvent[];
    decodeWrapDeletedEvent(event: Event): ImpossibleWrapperFactory.WrapDeletedEvent;
    createPairing: {
        (params: ICreatePairingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairingParams, options?: TransactionOptions) => Promise<string>;
    };
    deletePairing: {
        (wrapper: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (wrapper: string, options?: TransactionOptions) => Promise<void>;
    };
    governance: {
        (options?: TransactionOptions): Promise<string>;
    };
    setGovernance: {
        (governance: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (governance: string, options?: TransactionOptions) => Promise<void>;
    };
    tokensToWrappedTokens: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    wrappedTokensToTokens: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module ImpossibleWrapperFactory {
    interface WrapCreatedEvent {
        param1: string;
        param2: string;
        param3: BigNumber;
        param4: BigNumber;
        _event: Event;
    }
    interface WrapDeletedEvent {
        param1: string;
        param2: string;
        _event: Event;
    }
}
