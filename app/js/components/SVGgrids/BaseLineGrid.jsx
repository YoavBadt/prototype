import React from 'react';
import { connect } from 'react-redux';

import Radium from 'radium';

class BaseLineGrid extends React.Component {
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
    
    let baseline = S.baseLineHeight;
    let baselinediv = baseline / S.baseLineDivisions

    let color = state.gridGeneral.baseLineColor;
    let opacity = state.gridGeneral.baseLineVisibility;
    let show = state.gridGeneral.baseLineShow;

    let style = {
      base: {
        width: 100+'%',
        minHeight:'100vh',
        height: 100+'%',
        position: 'absolute',
        zIndex:-10,
        left: '0',
        top: '0'
      },
      block : {
        display: 'block'
      }
    }
    return (
      <div>
        <svg style={[style.base,show ? {display:''} : {display:'none'} ]}>
          <defs>
            <pattern id="Division" x="0" y="0" width={S.stage} height={baselinediv} patternUnits="userSpaceOnUse">
              <line strokeWidth="1" stroke={color} strokeOpacity={opacity/2} x1="0" x2="100%" y1={baselinediv-0.5} y2={baselinediv-0.5} strokeDasharray="1,1"/>
            </pattern>
            <pattern id="baselinePattern" x="0" y="0" width={S.stage} height={baseline} patternUnits="userSpaceOnUse">
            <line strokeWidth="1" stroke={color} strokeOpacity={opacity} x1="0" x2="100%" y1={baseline-0.5} y2={baseline-0.5} strokeDasharray="1,1"/>
              <rect x="0" y="0" width="100%" height={baseline} fillOpacity="1"  strokeOpacity="0" fill="url(#Division)"/>
            </pattern>
          </defs>
            <rect  x={S.margin} y="0" width={S.stage} height="100%" fill="url(#baselinePattern)" fillOpacity="1" />
        </svg>
    </div>
    )
  };
};

BaseLineGrid.contextTypes = {
    store: React.PropTypes.object
  }
BaseLineGrid = Radium(BaseLineGrid);
BaseLineGrid = connect()(BaseLineGrid);

export default BaseLineGrid
