import React from 'react';

import { createAppContainer } from 'react-navigation';

import Router from './router/index';

const AppContainer = createAppContainer(Router);

const App = () => {
  return <AppContainer />;
};

export default App;
