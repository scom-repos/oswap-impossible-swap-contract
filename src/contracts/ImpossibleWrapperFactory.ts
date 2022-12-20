import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ImpossibleWrapperFactory.json";
export interface ICreatePairingParams {underlying:string;ratioNumerator:number|BigNumber;ratioDenominator:number|BigNumber}
export class ImpossibleWrapperFactory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([governance], options);
    }
    parseWrapCreatedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapCreatedEvent[]{
        return this.parseEvents(receipt, "WrapCreated").map(e=>this.decodeWrapCreatedEvent(e));
    }
    decodeWrapCreatedEvent(event: Event): ImpossibleWrapperFactory.WrapCreatedEvent{
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            param3: new BigNumber(result[2]),
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    parseWrapDeletedEvent(receipt: TransactionReceipt): ImpossibleWrapperFactory.WrapDeletedEvent[]{
        return this.parseEvents(receipt, "WrapDeleted").map(e=>this.decodeWrapDeletedEvent(e));
    }
    decodeWrapDeletedEvent(event: Event): ImpossibleWrapperFactory.WrapDeletedEvent{
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            _event: event
        };
    }
    createPairing: {
        (params: ICreatePairingParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairingParams, options?: TransactionOptions) => Promise<string>;
    }
    deletePairing: {
        (wrapper:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (wrapper:string, options?: TransactionOptions) => Promise<void>;
    }
    governance: {
        (options?: TransactionOptions): Promise<string>;
    }
    setGovernance: {
        (governance:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (governance:string, options?: TransactionOptions) => Promise<void>;
    }
    tokensToWrappedTokens: {
        (param1:string, options?: TransactionOptions): Promise<string>;
    }
    wrappedTokensToTokens: {
        (param1:string, options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let governance_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('governance',[],options);
            return result;
        }
        this.governance = governance_call
        let tokensToWrappedTokens_call = async (param1:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('tokensToWrappedTokens',[param1],options);
            return result;
        }
        this.tokensToWrappedTokens = tokensToWrappedTokens_call
        let wrappedTokensToTokens_call = async (param1:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('wrappedTokensToTokens',[param1],options);
            return result;
        }
        this.wrappedTokensToTokens = wrappedTokensToTokens_call
        let createPairingParams = (params: ICreatePairingParams) => [params.underlying,this.wallet.utils.toString(params.ratioNumerator),this.wallet.utils.toString(params.ratioDenominator)];
        let createPairing_send = async (params: ICreatePairingParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPairing',createPairingParams(params),options);
            return result;
        }
        let createPairing_call = async (params: ICreatePairingParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPairing',createPairingParams(params),options);
            return result;
        }
        this.createPairing = Object.assign(createPairing_send, {
            call:createPairing_call
        });
        let deletePairing_send = async (wrapper:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deletePairing',[wrapper],options);
            return result;
        }
        let deletePairing_call = async (wrapper:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deletePairing',[wrapper],options);
            return;
        }
        this.deletePairing = Object.assign(deletePairing_send, {
            call:deletePairing_call
        });
        let setGovernance_send = async (governance:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setGovernance',[governance],options);
            return result;
        }
        let setGovernance_call = async (governance:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setGovernance',[governance],options);
            return;
        }
        this.setGovernance = Object.assign(setGovernance_send, {
            call:setGovernance_call
        });
    }
}
export module ImpossibleWrapperFactory{
    export interface WrapCreatedEvent {param1:string,param2:string,param3:BigNumber,param4:BigNumber,_event:Event}
    export interface WrapDeletedEvent {param1:string,param2:string,_event:Event}
}