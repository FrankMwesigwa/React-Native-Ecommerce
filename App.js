import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/ShopNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
