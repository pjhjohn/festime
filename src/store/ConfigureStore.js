import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './../reducers/toggleSpin';
import ReduxPromise from 'redux-promise';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(ReduxPromise),
);

export default function configureStore(initialState) {
  // Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(RootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./../reducers/toggleSpin', () =>
      store.replaceReducer(require('./../reducers/toggleSpin')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
