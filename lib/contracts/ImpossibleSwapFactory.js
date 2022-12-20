"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleSwapFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossibleSwapFactory_json_1 = __importDefault(require("./ImpossibleSwapFactory.json"));
class ImpossibleSwapFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleSwapFactory_json_1.default.abi, ImpossibleSwapFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new eth_contract_1.BigNumber(result[3]),
            _event: event
        };
    }
    parseUpdatedGovernanceEvent(receipt) {
        return this.parseEvents(receipt, "UpdatedGovernance").map(e => this.decodeUpdatedGovernanceEvent(e));
    }
    decodeUpdatedGovernanceEvent(event) {
        let result = event.data;
        return {
            governance: result.governance,
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1, options) => {
            let result = await this.call('allPairs', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async (options) => {
            let result = await this.call('allPairsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let approvedTokens_call = async (param1, options) => {
            let result = await this.call('approvedTokens', [param1], options);
            return result;
        };
        this.approvedTokens = approvedTokens_call;
        let feeTo_call = async (options) => {
            let result = await this.call('feeTo', [], options);
            return result;
        };
        this.feeTo = feeTo_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params, options) => {
            let result = await this.call('getPair', getPairParams(params), options);
            return result;
        };
        this.getPair = getPair_call;
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let router_call = async (options) => {
            let result = await this.call('router', [], options);
            return result;
        };
        this.router = router_call;
        let routerExtension_call = async (options) => {
            let result = await this.call('routerExtension', [], options);
            return result;
        };
        this.routerExtension = routerExtension_call;
        let whitelist_call = async (options) => {
            let result = await this.call('whitelist', [], options);
            return result;
        };
        this.whitelist = whitelist_call;
        let changeTokenAccessParams = (params) => [params.token, params.allowed];
        let changeTokenAccess_send = async (params, options) => {
            let result = await this.send('changeTokenAccess', changeTokenAccessParams(params), options);
            return result;
        };
        let changeTokenAccess_call = async (params, options) => {
            let result = await this.call('changeTokenAccess', changeTokenAccessParams(params), options);
            return;
        };
        this.changeTokenAccess = Object.assign(changeTokenAccess_send, {
            call: changeTokenAccess_call
        });
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params, options) => {
            let result = await this.send('createPair', createPairParams(params), options);
            return result;
        };
        let createPair_call = async (params, options) => {
            let result = await this.call('createPair', createPairParams(params), options);
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call
        });
        let setFeeTo_send = async (feeTo, options) => {
            let result = await this.send('setFeeTo', [feeTo], options);
            return result;
        };
        let setFeeTo_call = async (feeTo, options) => {
            let result = await this.call('setFeeTo', [feeTo], options);
            return;
        };
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call: setFeeTo_call
        });
        let setGovernance_send = async (governance, options) => {
            let result = await this.send('setGovernance', [governance], options);
            return result;
        };
        let setGovernance_call = async (governance, options) => {
            let result = await this.call('setGovernance', [governance], options);
            return;
        };
        this.setGovernance = Object.assign(setGovernance_send, {
            call: setGovernance_call
        });
        let setRouterAndExtensionParams = (params) => [params.router, params.routerExtension];
        let setRouterAndExtension_send = async (params, options) => {
            let result = await this.send('setRouterAndExtension', setRouterAndExtensionParams(params), options);
            return result;
        };
        let setRouterAndExtension_call = async (params, options) => {
            let result = await this.call('setRouterAndExtension', setRouterAndExtensionParams(params), options);
            return;
        };
        this.setRouterAndExtension = Object.assign(setRouterAndExtension_send, {
            call: setRouterAndExtension_call
        });
        let setWhitelist_send = async (b, options) => {
            let result = await this.send('setWhitelist', [b], options);
            return result;
        };
        let setWhitelist_call = async (b, options) => {
            let result = await this.call('setWhitelist', [b], options);
            return;
        };
        this.setWhitelist = Object.assign(setWhitelist_send, {
            call: setWhitelist_call
        });
    }
}
exports.ImpossibleSwapFactory = ImpossibleSwapFactory;
ImpossibleSwapFactory._abi = ImpossibleSwapFactory_json_1.default.abi;
