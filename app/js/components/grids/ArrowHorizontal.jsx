import React from 'react';
import { connect } from 'react-redux';

class ArrowHorizontal extends React.Component {
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
    let S = state.gridState;

    let style = {
      width: S.stage,
      minHeight:'100vh',
      height: 100+'%',
      position: 'absolute',
      zIndex:-30,
      left: '0',
      top: '0',
    }
    return (
      <div>
      <svg width={S.stage}>
        <defs>
          <polygon id="yourMarkerId" points="0,10 10,0 10,20" strokeWidth="1"/>
        </defs>
        <g stroke="red" strokeWidth="1" strokeLinecap="round">
        <line x1={S.margin+0.5} y1="10.5" x2={S.margin + 5.5} y2="5.5"/>
        <line x1={S.margin+0.5} y1="10.5" x2={S.stage+S.margin+ 0.5} y2="10.5"/>
        <line x1={S.margin+0.5} y1="10.5" x2={S.margin + 5.5} y2="15.5"/>
        </g>
      </svg>
    </div>
    )
  };
};

ArrowHorizontal.contextTypes = {
    store: React.PropTypes.object
  }

ArrowHorizontal = connect()(ArrowHorizontal)

export default ArrowHorizontal
