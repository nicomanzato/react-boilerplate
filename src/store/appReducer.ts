import { combineReducers } from 'redux';
import { CryptocurrencyState } from './cryptocurrency/cryptocurrency.model';

import { CryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer';

const createRootReducer = () => combineReducers({
  CryptocurrencyState: CryptocurrencyReducer,
});

export type Store = {
  CryptocurrencyState: CryptocurrencyState,
};

export default createRootReducer;