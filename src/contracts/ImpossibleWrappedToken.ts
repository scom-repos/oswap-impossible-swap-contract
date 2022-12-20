import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ImpossibleWrappedToken.json";
export interface IDeployParams {underlying:string;ratioNum:number|BigNumber;ratioDenom:number|BigNumber}
export interface IAllowanceParams {param1:string;param2:string}
export interface IApproveParams {guy:string;wad:number|BigNumber}
export interface IDepositParams {dst:string;sendAmt:number|BigNumber}
export interface ITransferParams {dst:string;wad:number|BigNumber}
export interface ITransferFromParams {src:string;dst:string;wad:number|BigNumber}
export interface IWithdrawParams {dst:string;wad:number|BigNumber}
export class ImpossibleWrappedToken extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.underlying,this.wallet.utils.toString(params.ratioNum),this.wallet.utils.toString(params.ratioDenom)], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ImpossibleWrappedToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ImpossibleWrappedToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ImpossibleWrappedToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    amtToUnderlyingAmt: {
        (amt:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    balanceOf: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    deposit: {
        (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDepositParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    ratioDenom: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    ratioNum: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    underlying: {
        (options?: TransactionOptions): Promise<string>;
    }
    underlyingBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    withdraw: {
        (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.param1,params.param2];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let amtToUnderlyingAmt_call = async (amt:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('amtToUnderlyingAmt',[this.wallet.utils.toString(amt)],options);
            return new BigNumber(result);
        }
        this.amtToUnderlyingAmt = amtToUnderlyingAmt_call
        let balanceOf_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[param1],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let ratioDenom_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ratioDenom',[],options);
            return new BigNumber(result);
        }
        this.ratioDenom = ratioDenom_call
        let ratioNum_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ratioNum',[],options);
            return new BigNumber(result);
        }
        this.ratioNum = ratioNum_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let underlying_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('underlying',[],options);
            return result;
        }
        this.underlying = underlying_call
        let underlyingBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('underlyingBalance',[],options);
            return new BigNumber(result);
        }
        this.underlyingBalance = underlyingBalance_call
        let approveParams = (params: IApproveParams) => [params.guy,this.wallet.utils.toString(params.wad)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params),options);
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let depositParams = (params: IDepositParams) => [params.dst,this.wallet.utils.toString(params.sendAmt)];
        let deposit_send = async (params: IDepositParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params),options);
            return result;
        }
        let deposit_call = async (params: IDepositParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('deposit',depositParams(params),options);
            return new BigNumber(result);
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
        });
        let transferParams = (params: ITransferParams) => [params.dst,this.wallet.utils.toString(params.wad)];
        let transfer_send = async (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params),options);
            return result;
        }
        let transfer_call = async (params: ITransferParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params),options);
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.src,params.dst,this.wallet.utils.toString(params.wad)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let withdrawParams = (params: IWithdrawParams) => [params.dst,this.wallet.utils.toString(params.wad)];
        let withdraw_send = async (params: IWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params),options);
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('withdraw',withdrawParams(params),options);
            return new BigNumber(result);
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module ImpossibleWrappedToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}