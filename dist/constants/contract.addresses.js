"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTER_ADDRESS = exports.MULTI_CALL_ADDRESS = exports.MASTER_CHEF_ADDRESS = exports.FACTORY_ADDRESS = exports.AUTO_COMPOUND_2_ADDRESS = exports.AUTO_COMPOUND_ADDRESS = void 0;
const chain_id_enum_1 = require("../enums/chain-id.enum");
exports.AUTO_COMPOUND_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: "0x97A16ff6Fd63A46bf973671762a39f3780Cda73D"
};
exports.AUTO_COMPOUND_2_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: "0xa4b20183039b2F9881621C3A03732fBF0bfdff10"
};
exports.FACTORY_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
};
exports.MASTER_CHEF_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: '0xDbc1A13490deeF9c3C12b44FE77b503c1B061739',
};
exports.MULTI_CALL_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
};
exports.ROUTER_ADDRESS = {
    [chain_id_enum_1.ChainId.BSC]: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
};
