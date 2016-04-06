import React from 'react';
import { Provider } from 'react-redux';

import Controls from './Controls.jsx';
import Grids from './Grids.jsx';
import Content from './Content.jsx';

//the store
import store from '../store';


const Prototype = () => (
  <div>
    <Controls />
    <Content />
    <Grids />
  </div>
);

export default (
  <Provider store={store}>
    <Prototype />
  </Provider>
)
