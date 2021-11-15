import {
    LOAD_CRYPTOCURRENCIES,
    LOAD_CRYPTOCURRENCIES_SUCCESS,
    LOAD_CRYPTOCURRENCIES_FAILURE,
    CryptocurrencyActions,
  } from './cryptocurrency.actions';
import { CryptocurrencyState, makeCryptocurrencyState } from './cryptocurrency.model';
  
  const initialState = makeCryptocurrencyState({});
  
  export const CryptocurrencyReducer = (state = initialState, action: CryptocurrencyActions): CryptocurrencyState => {
    switch (action.type) {
      case LOAD_CRYPTOCURRENCIES: {
        return { 
          ...state, 
          cryptocurrencies: {
            ...state.cryptocurrencies,
            isLoading: true,
          } 
        };
      }
  
      case LOAD_CRYPTOCURRENCIES_SUCCESS: {
        return { 
          ...state,
          cryptocurrencies: {
            data: action.payload,
            isLoading: false,
            hasErrors: false,
          }
        };
      }
  
      case LOAD_CRYPTOCURRENCIES_FAILURE: {
        return { 
          ...state,
          cryptocurrencies: {
            ...state.cryptocurrencies,
            hasErrors: true,
            isLoading: false,
          }
        };
      }
  
      default:
        return state;
    }
  };