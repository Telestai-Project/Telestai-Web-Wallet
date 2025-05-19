import { getEventEmitter } from './event_bus.js';
import { isEmpty } from './misc.js';
import { cMarket, fillCurrencySelect } from './settings.js';

/**
 * Xeggex's endpoint for TLS data
 */
export const XEGGEX_ENDPOINT = 'https://api.xeggex.com/api/v2/market/getbysymbol/tls_usdt';

/**
 * The generic market data source template, used to build site-specific classes
 */
export class MarketSource {
    /** The storage object for raw market data */
    cData = {};

    /** The name of the market source */
    strName = '';

    /** The customised API endpoint of the market source */
    strEndpoint = '';

    /**
     * Ensure a market data cache exists, if not, fetch it and resume
     */
    async ensureCacheExists() {
        if (!this.cData || !Object.keys(this.cData).length) await this.fetch();
    }

    /**
     * Fetches the raw market source data
     * @returns {Promise<object>}
     */
    async fetch() {
        try {
            return (this.cData = await (await fetch(this.strEndpoint)).json());
        } catch (e) {
            console.warn('Xeggex: Failed to fetch prices!');
            console.warn(e);
            return null;
        }
    }
}

/**
 * The Xeggex market data source
 */
export class Xeggex extends MarketSource {
    constructor() {
        super();
        this.strName = 'Xeggex';
        this.strEndpoint = XEGGEX_ENDPOINT;
    }

    /**
     * Get the price in a specific display currency
     * @param {string} strCurrency - The display currency (currently only supports USD)
     * @return {Promise<number>}
     */
    async getPrice(strCurrency) {
        await this.ensureCacheExists();
        // Xeggex provides price in USD, so we return the lastPrice for USD
        if (strCurrency.toLowerCase() === 'usd') {
            return this.cData?.lastPriceNumber || 0;
        }
        return 0;
    }

    /**
     * Get a list of the supported display currencies
     * @returns {Promise<Array<string>>} - Currently only supports USD
     */
    async getCurrencies() {
        return ['USD'];
    }
}

/**
 * Refreshes market data from the user's data source, then re-renders currency options and price displays
 */
export async function refreshPriceDisplay() {
    // Refresh our price data, and if successful, update the UI
    if (!isEmpty(await cMarket.fetch())) {
        // Update the currency customisation menu from the selected data source
        await fillCurrencySelect();

        // Update price values
        getEventEmitter().emit('balance-update');
    }
}
