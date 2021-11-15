import React, { useEffect } from 'react';
import './home.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencies } from '../../store/cryptocurrency/cryptocurrency.actions';
import { Cryptocurrency } from '../../models/cryptocurrency';
import CryptocurrencyDetail from 'components/cryptocurrency-detail/cryptocurrency-detail';
import { Store } from 'store/appReducer';
import PrimaryPageLayout from 'layout/primary-page-layout/primary-page-layout';

const HomePage = ({
  cryptocurrencies,
  isLoadingCryptocurrencies,
  loadCryptocurrencies,
}: Props) => {

  useEffect(() => {
    loadCryptocurrencies();
  }, [loadCryptocurrencies]);

  return (
    <PrimaryPageLayout className="home-page" isLoading={isLoadingCryptocurrencies}>
      <div className="home-page__cryptocurrency-details">
        {
          cryptocurrencies.map((cryptocurrency, index) => (
            <div key={index} className="home-page__cryptocurrency-detail">
              <CryptocurrencyDetail cryptocurrency={cryptocurrency} />
            </div>
          ))
        }
      </div>
    </PrimaryPageLayout>
  );
};

function mapStateToProps(store: Store) {
  return {
    cryptocurrencies: store.CryptocurrencyState.cryptocurrencies.data,
    isLoadingCryptocurrencies: store.CryptocurrencyState.cryptocurrencies.isLoading,
  };
}

const mapDispatchToProps = { 
  loadCryptocurrencies: () => LoadCryptocurrencies(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

interface Props {
  cryptocurrencies: Cryptocurrency[],
  isLoadingCryptocurrencies: boolean,
  loadCryptocurrencies: () => void,
}