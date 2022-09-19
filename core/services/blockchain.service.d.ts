import { Pair } from "../types";
import { ChainId } from "../enums";
declare class BlockchainService {
    /**
     * Exchange liquidity provider token to USD
     *
     * @param {string} amountFrom
     * @param {Pair} pair
     * @param {number} chainId
     */
    exchangeLPTokenToUSD(amountFrom: string, pair: Pair, chainId?: ChainId): Promise<string>;
    exchangeTokenToUSDT(amountFrom: string, tokenFrom: string, chainId?: ChainId): Promise<string>;
    /**
     * List of core tokens
     *
     * @param {number} chainId
     */
    getCoreTokens(chainId?: ChainId): {
        [symbol: string]: string;
    };
    /**
     * Get symbol of token by address
     *
     * @param {string} address
     * @param {number} chainId
     */
    getSymbolByAddress(address: string, chainId?: ChainId): string;
    /**
     * Get address of token by symbol
     *
     * @param {string} symbol
     * @param {number} chainId
     */
    getAddressBySymbol(symbol: string, chainId?: ChainId): string;
}
declare const _default: BlockchainService;
export default _default;
