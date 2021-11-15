import { Cryptocurrency } from "models/cryptocurrency";

export interface CryptocurrencyState {
  cryptocurrencies: {
    data: Cryptocurrency[];
    isLoading: boolean;
    hasErrors: boolean;
  }
}

export const makeCryptocurrencyState = (data: Partial<CryptocurrencyState>): CryptocurrencyState => {
  const defaultValue: CryptocurrencyState = {
    cryptocurrencies: {
      data: [],
      isLoading: false,
      hasErrors: false,
    }
  }

  return { ...defaultValue, ...data };
}