import React from 'react';
import { connect } from 'react-redux';

import Grids from './SVGgrids/Grids.jsx';
import Content from './content/Content.jsx';


class Wrapper extends React.Component {
  constructor(){
    super();
    // this.setScreen = this.setScreen.bind(this);
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let style = {
      main:{
      top: 40,
      position: 'relative',
      background: 'white',
      zIndex: -100,
      width: state.gridState.fakeScreen,
      minHeight: 100+'vh',
      margin: '0 auto',
      boxShadow: '0px 0px 0px 1px rgba(0,0,0,1)'
      }
    }
    return (
      <div style={style.main}>
        <Grids />
        <Content />
      </div>
    )
  };
};

Wrapper.contextTypes = {
    store: React.PropTypes.object
  }

Wrapper = connect()(Wrapper)

export default Wrapper
