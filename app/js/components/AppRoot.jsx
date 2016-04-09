import React from 'react';
import { Provider } from 'react-redux';

import { connect } from 'react-redux'

import { set320, set720, set1440, set1920 } from '../actions/gridStateActions.js'

import Controls from './Controls.jsx';
import Wrapper from './Wrapper.jsx';
import Info from './Info.jsx';

import store from '../store';




class Prototype extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );

   store.dispatch(set1920())
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Controls />
        <Info />
        <Wrapper />
      </div>
    )
  }
};
Prototype.contextTypes = {
    store: React.PropTypes.object
  }
Prototype = connect()(Prototype)

// const Prototype = () => (
//   <div>
//     <Controls />
//     <Info />
//     <Wrapper />
//   </div>
// );

export default (
  <Provider store={store}>
    <Prototype />
  </Provider>
)
