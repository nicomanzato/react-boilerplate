import { all, put, call, takeLatest } from 'redux-saga/effects';

import * as CryptocurrencyActions from './cryptocurrency.actions';

import { getCryptocurrencies } from 'services/cryptocurrency.service';
import { Cryptocurrency } from 'models/cryptocurrency';

export function* loadCryptocurrencies(): Generator<any, void, Cryptocurrency[]> {
  try {
    const data = yield call(getCryptocurrencies);
    yield put(CryptocurrencyActions.LoadCryptocurrenciesSuccess(data));
  } catch (er) {
    console.log(er);
    yield put(CryptocurrencyActions.LoadCryptocurrenciesFailure(er));
  }
}

function* watchLoadCryptocurrencies() {
  yield takeLatest(CryptocurrencyActions.LOAD_CRYPTOCURRENCIES, loadCryptocurrencies);
}

export function* CryptocurrencySaga() {
  yield all([watchLoadCryptocurrencies()]);
}
