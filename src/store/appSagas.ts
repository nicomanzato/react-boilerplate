import { all, fork } from 'redux-saga/effects';

import { CryptocurrencySaga } from './cryptocurrency/cryptocurrency.saga';

const sagas: any[] = [
  CryptocurrencySaga,
];

export default function* appSagas(context = {}) {
  yield all(sagas.map(saga => fork(saga, context)));
}