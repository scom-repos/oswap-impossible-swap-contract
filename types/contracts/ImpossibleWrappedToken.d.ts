import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    underlying: string;
    ratioNum: number | BigNumber;
    ratioDenom: number | BigNumber;
}
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    guy: string;
    wad: number | BigNumber;
}
export interface IDepositParams {
    dst: string;
    sendAmt: number | BigNumber;
}
export interface ITransferParams {
    dst: string;
    wad: number | BigNumber;
}
export interface ITransferFromParams {
    src: string;
    dst: string;
    wad: number | BigNumber;
}
export interface IWithdrawParams {
    dst: string;
    wad: number | BigNumber;
}
export declare class ImpossibleWrappedToken extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ImpossibleWrappedToken.ApprovalEvent;
    parseTransferEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.TransferEvent[];
    decodeTransferEvent(event: Event): ImpossibleWrappedToken.TransferEvent;
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    amtToUnderlyingAmt: {
        (amt: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    ratioDenom: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    ratioNum: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    };
    underlying: {
        (options?: TransactionOptions): Promise<string>;
    };
    underlyingBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    private assign;
}
export declare module ImpossibleWrappedToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
