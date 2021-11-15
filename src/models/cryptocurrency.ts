export type CryptocurrencyTag = 'mineable';

export interface HistoricalCryptocurrencyPrice {
    date: string;
    price: number;
}

export interface Cryptocurrency {
    quote: {
        USD: {
            price: number;
            volume_24h: number;
            percent_change_1h: number;
            percent_change_7d: number;
            market_cap: number,
            last_updated: string;
        };
    };
    tags: CryptocurrencyTag[];
    historicalPrice: HistoricalCryptocurrencyPrice[];
    id: number;
    name: string;
    symbol: string;
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    cmc_rank: number;
};