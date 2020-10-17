// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import axios from 'axios';
import Navigation from './navigation';
import {configureStore} from '../src/store';

export const store = configureStore(axios, {});

function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PaperProvider>
  );
}

export default App;
