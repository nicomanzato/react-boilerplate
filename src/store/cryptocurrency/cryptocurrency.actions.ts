import { Cryptocurrency } from "models/cryptocurrency";

export const LOAD_CRYPTOCURRENCIES = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY';
export const LOAD_CRYPTOCURRENCIES_SUCCESS = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY SUCCESS';
export const LOAD_CRYPTOCURRENCIES_FAILURE = '[CRYPTOCURRENCY] LOAD CRYPTOCURRENCY FAILURE';

export const LoadCryptocurrencies = (): ILoadCryptocurrencies => {
  return { type: LOAD_CRYPTOCURRENCIES };
};

export const LoadCryptocurrenciesSuccess = (payload: Cryptocurrency[]): ILoadCryptocurrenciesSuccess => {
  return { type: LOAD_CRYPTOCURRENCIES_SUCCESS, payload };
};

export const LoadCryptocurrenciesFailure = (payload: any) => {
  return { type: LOAD_CRYPTOCURRENCIES_FAILURE, payload };
};

export interface ILoadCryptocurrencies {
  type: typeof LOAD_CRYPTOCURRENCIES;
}

export interface ILoadCryptocurrenciesSuccess {
  type: typeof LOAD_CRYPTOCURRENCIES_SUCCESS;
  payload: Cryptocurrency[];
}

export interface ILoadCryptocurrenciesFailure {
  type: typeof LOAD_CRYPTOCURRENCIES_FAILURE;
  payload: any;
}

export type CryptocurrencyActions = ILoadCryptocurrencies | 
  ILoadCryptocurrenciesSuccess | 
  ILoadCryptocurrenciesFailure;