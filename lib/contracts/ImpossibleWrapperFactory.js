"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpossibleWrapperFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const ImpossibleWrapperFactory_json_1 = __importDefault(require("./ImpossibleWrapperFactory.json"));
class ImpossibleWrapperFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ImpossibleWrapperFactory_json_1.default.abi, ImpossibleWrapperFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(governance, options) {
        return this.__deploy([governance], options);
    }
    parseWrapCreatedEvent(receipt) {
        return this.parseEvents(receipt, "WrapCreated").map(e => this.decodeWrapCreatedEvent(e));
    }
    decodeWrapCreatedEvent(event) {
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            param3: new eth_contract_1.BigNumber(result[2]),
            param4: new eth_contract_1.BigNumber(result[3]),
            _event: event
        };
    }
    parseWrapDeletedEvent(receipt) {
        return this.parseEvents(receipt, "WrapDeleted").map(e => this.decodeWrapDeletedEvent(e));
    }
    decodeWrapDeletedEvent(event) {
        let result = event.data;
        return {
            param1: result[0],
            param2: result[1],
            _event: event
        };
    }
    assign() {
        let governance_call = async (options) => {
            let result = await this.call('governance', [], options);
            return result;
        };
        this.governance = governance_call;
        let tokensToWrappedTokens_call = async (param1, options) => {
            let result = await this.call('tokensToWrappedTokens', [param1], options);
            return result;
        };
        this.tokensToWrappedTokens = tokensToWrappedTokens_call;
        let wrappedTokensToTokens_call = async (param1, options) => {
            let result = await this.call('wrappedTokensToTokens', [param1], options);
            return result;
        };
        this.wrappedTokensToTokens = wrappedTokensToTokens_call;
        let createPairingParams = (params) => [params.underlying, this.wallet.utils.toString(params.ratioNumerator), this.wallet.utils.toString(params.ratioDenominator)];
        let createPairing_send = async (params, options) => {
            let result = await this.send('createPairing', createPairingParams(params), options);
            return result;
        };
        let createPairing_call = async (params, options) => {
            let result = await this.call('createPairing', createPairingParams(params), options);
            return result;
        };
        this.createPairing = Object.assign(createPairing_send, {
            call: createPairing_call
        });
        let deletePairing_send = async (wrapper, options) => {
            let result = await this.send('deletePairing', [wrapper], options);
            return result;
        };
        let deletePairing_call = async (wrapper, options) => {
            let result = await this.call('deletePairing', [wrapper], options);
            return;
        };
        this.deletePairing = Object.assign(deletePairing_send, {
            call: deletePairing_call
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
    }
}
exports.ImpossibleWrapperFactory = ImpossibleWrapperFactory;
ImpossibleWrapperFactory._abi = ImpossibleWrapperFactory_json_1.default.abi;
