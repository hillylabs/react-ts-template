import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import store, { history } from '../utils/configureStore';

import rootRoutes from '../apps/root/router/router';
class AppContainer extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>{rootRoutes}</Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppContainer;
