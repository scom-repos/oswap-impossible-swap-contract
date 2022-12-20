import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ImpossibleSwapFactory.json";
export interface IChangeTokenAccessParams {token:string;allowed:boolean}
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export interface ISetRouterAndExtensionParams {router:string;routerExtension:string}
export class ImpossibleSwapFactory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(governance:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([governance], options);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): ImpossibleSwapFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    parseUpdatedGovernanceEvent(receipt: TransactionReceipt): ImpossibleSwapFactory.UpdatedGovernanceEvent[]{
        return this.parseEvents(receipt, "UpdatedGovernance").map(e=>this.decodeUpdatedGovernanceEvent(e));
    }
    decodeUpdatedGovernanceEvent(event: Event): ImpossibleSwapFactory.UpdatedGovernanceEvent{
        let result = event.data;
        return {
            governance: result.governance,
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    approvedTokens: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    changeTokenAccess: {
        (params: IChangeTokenAccessParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IChangeTokenAccessParams, options?: TransactionOptions) => Promise<void>;
    }
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    }
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    }
    governance: {
        (options?: TransactionOptions): Promise<string>;
    }
    router: {
        (options?: TransactionOptions): Promise<string>;
    }
    routerExtension: {
        (options?: TransactionOptions): Promise<string>;
    }
    setFeeTo: {
        (feeTo:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeTo:string, options?: TransactionOptions) => Promise<void>;
    }
    setGovernance: {
        (governance:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (governance:string, options?: TransactionOptions) => Promise<void>;
    }
    setRouterAndExtension: {
        (params: ISetRouterAndExtensionParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetRouterAndExtensionParams, options?: TransactionOptions) => Promise<void>;
    }
    setWhitelist: {
        (b:boolean, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (b:boolean, options?: TransactionOptions) => Promise<void>;
    }
    whitelist: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('allPairs',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allPairsLength',[],options);
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let approvedTokens_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approvedTokens',[param1],options);
            return result;
        }
        this.approvedTokens = approvedTokens_call
        let feeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('feeTo',[],options);
            return result;
        }
        this.feeTo = feeTo_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params),options);
            return result;
        }
        this.getPair = getPair_call
        let governance_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('governance',[],options);
            return result;
        }
        this.governance = governance_call
        let router_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('router',[],options);
            return result;
        }
        this.router = router_call
        let routerExtension_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('routerExtension',[],options);
            return result;
        }
        this.routerExtension = routerExtension_call
        let whitelist_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('whitelist',[],options);
            return result;
        }
        this.whitelist = whitelist_call
        let changeTokenAccessParams = (params: IChangeTokenAccessParams) => [params.token,params.allowed];
        let changeTokenAccess_send = async (params: IChangeTokenAccessParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('changeTokenAccess',changeTokenAccessParams(params),options);
            return result;
        }
        let changeTokenAccess_call = async (params: IChangeTokenAccessParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('changeTokenAccess',changeTokenAccessParams(params),options);
            return;
        }
        this.changeTokenAccess = Object.assign(changeTokenAccess_send, {
            call:changeTokenAccess_call
        });
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params),options);
            return result;
        }
        let createPair_call = async (params: ICreatePairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params),options);
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
        });
        let setFeeTo_send = async (feeTo:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeTo',[feeTo],options);
            return result;
        }
        let setFeeTo_call = async (feeTo:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFeeTo',[feeTo],options);
            return;
        }
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call:setFeeTo_call
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
        let setRouterAndExtensionParams = (params: ISetRouterAndExtensionParams) => [params.router,params.routerExtension];
        let setRouterAndExtension_send = async (params: ISetRouterAndExtensionParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setRouterAndExtension',setRouterAndExtensionParams(params),options);
            return result;
        }
        let setRouterAndExtension_call = async (params: ISetRouterAndExtensionParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setRouterAndExtension',setRouterAndExtensionParams(params),options);
            return;
        }
        this.setRouterAndExtension = Object.assign(setRouterAndExtension_send, {
            call:setRouterAndExtension_call
        });
        let setWhitelist_send = async (b:boolean, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setWhitelist',[b],options);
            return result;
        }
        let setWhitelist_call = async (b:boolean, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setWhitelist',[b],options);
            return;
        }
        this.setWhitelist = Object.assign(setWhitelist_send, {
            call:setWhitelist_call
        });
    }
}
export module ImpossibleSwapFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,param4:BigNumber,_event:Event}
    export interface UpdatedGovernanceEvent {governance:string,_event:Event}
}