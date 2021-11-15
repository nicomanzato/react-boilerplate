import React from 'react';
import './cryptocurrency-detail.scss';

import { Cryptocurrency } from 'models/cryptocurrency';
import { formatMoney } from 'utils/utils';

export const CryptocurrencyDetail = ({ cryptocurrency }: Props) => {
  return (
    <div className="cryptocurrency-detail">
      <span>{ cryptocurrency.name }</span>
      <span>${ formatMoney(cryptocurrency.historicalPrice[0].price) }</span>
    </div>
  );
};

export default CryptocurrencyDetail;

interface Props {
  cryptocurrency: Cryptocurrency;
};
