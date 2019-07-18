
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';

import MainMenu from './containers/MainMenu';


const syncHistoryWithStore = (store, history) => {
  const { router } = store.getState();
  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();

const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);


const rootElement = document.createElement('div');
document.body.append(rootElement);

ReactDOM.render(
  <Provider store={store}>
    <MainMenu>
      <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
    </MainMenu>
  </Provider>,
  rootElement,
);
