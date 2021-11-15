import { values } from 'defaultValues';
import { Cryptocurrency } from 'models/cryptocurrency';
import { genericGet } from 'utils/utils';

import CryptocurrenciesMock from './mock/cryptocurrencies.mock.json';

export const getCryptocurrencies = async (): Promise<Cryptocurrency[]> => {
  return genericGet(
    { url: process.env.REACT_APP_CRYPTOCURRENCY_API + values.ENDPOINTS.GET_CRYPTOCURRENCIES },
    CryptocurrenciesMock
  );
};