import blockchainService from "@src/services/blockchain.service";
import { ChainId } from "@enums";
import { multiPlus } from "@helpers";
import logService from "@src/services/log.service";

(async () => {
    try {
        const resp = await blockchainService.exchangeTokenToUSDT('20849865814464639657', '0x2170ed0880ac9a755fd29b2688956bd959f933f8')


        console.log('multiPlus 1: ', multiPlus('1', '4', '3').toString());
        console.log('multiPlus 2: ', multiPlus(7,6,7,7,4,56,45,7).toString());

        console.log('WBNB AVALANCHE: ', blockchainService.getAddressBySymbol('wbnb', ChainId.AVALANCHE));
        console.log('WBNB BSC: ', blockchainService.getAddressBySymbol('wbnb', ChainId.BSC));
    } catch (e) {
        console.log('LOG: ', e);
    }


})()