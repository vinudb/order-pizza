import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import orderPizza from '../reducers/orderPizza';
import pizzaPresets from '../reducers/pizzaPresets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    orderPizza,
    pizzaPresets
  }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};