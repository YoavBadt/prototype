import React from 'react';
import { Provider } from 'react-redux';

import Controls from './Controls.jsx';
import Wrapper from './Wrapper.jsx';
import Info from './Info.jsx';

//the store
import store from '../store';


const Prototype = () => (
  <div>
    <Controls />
    <Info />
    <Wrapper />
  </div>
);

export default (
  <Provider store={store}>
    <Prototype />
  </Provider>
)
