import React from 'react';

import { connect } from 'react-redux';

class Card2 extends React.Component {
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

    let unit = state.gridStore.baseUnit
    let baseline = state.gridStore.baseLineHeight
    let fontsize = state.gridStore.baseFontSize

    let pos = state.gridStore.gridPositions

    let style = {
      main:{
        left: pos[7],
        top: 0,
        width: 600,
        height: 600,
        position: 'absolute',
        zIndex : -1,
        background: 'rgba(0,0,255,0.2)',
        borderRadius: 4,
        border: '0px solid grey',
        boxSizing: 'border-box',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }
    }
    return (
      <div style={style.main}>
      </div>
    )
  };
};

Card2.contextTypes = {
    store: React.PropTypes.object
  }

Card2 = connect()(Card2)

export default Card2
