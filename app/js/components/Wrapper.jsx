import React from 'react';
import { connect } from 'react-redux';

import Controls from './Controls.jsx';
import Grids from './Grids.jsx';
import Content from './Content.jsx';


class Wrapper extends React.Component {
  constructor(){
    super();
    this.setScreen = this.setScreen.bind(this);
  }
  setScreen(e){
    const { store } = this.context;
    let screen = window.innerWidth;
    store.dispatch({type: 'CHANGE_SCREEN',payload : screen})
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    //setting screen
    let screen = window.innerWidth;
    store.dispatch({type: 'SET_SCREEN',payload : screen});
    window.addEventListener('resize', this.setScreen);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let style = {
      position: 'relative',
      background: 'white',
      width: state.gridStore.screenFake,
      minHeight: 100+'vh',
      margin: '0 auto',
      boxShadow: '0px 0px 0px 1px rgba(0,0,0,1)'
    }
    return (
      <div style={style}>
        <Content />
        <Grids />
      </div>
    )
  };
};

Wrapper.contextTypes = {
    store: React.PropTypes.object
  }

Wrapper = connect()(Wrapper)

export default Wrapper
