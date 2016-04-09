import React from 'react';
import { connect } from 'react-redux';

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

    let baseline = state.gridState.baseLineHeight;
    let baselinediv = baseline / state.gridState.baseLineDivisions
 
    let color = state.gridGeneral.baseLineColor;
    let opacity = state.gridGeneral.baseLineVisibility;
    let show = state.gridGeneral.baseLineShow;

    let style = {
      base: {
        width: state.gridState.fakeScreen,
        height:'100vh',
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
        <svg style={style.base}>
          <defs>
            <pattern id="Division" x="0" y="0" width="100%" height={baselinediv} patternUnits="userSpaceOnUse">
              <line strokeWidth="1" stroke={color} strokeOpacity={opacity} x1="0" x2="100%" y1={baselinediv-0.5} y2={baselinediv-0.5} strokeDasharray="1,1"/>
            </pattern>
            <pattern id="baselinePattern" x="0" y="0" width="100%" height={baseline} patternUnits="userSpaceOnUse">
            <line strokeWidth="1" stroke={color} strokeOpacity={opacity} x1="0" x2="100%" y1={baseline-0.5} y2={baseline-0.5} />
              <rect x="0" y="0" width="100%" height={baseline} fillOpacity="1"  strokeOpacity="0" fill="url(#Division)"/>
            </pattern>
          </defs>
            <rect  x="0" y="0" width="100%" height="100%" fill="url(#baselinePattern)" fillOpacity="1" />
        </svg>
    </div>
    )
  };
};

BaseLineGrid.contextTypes = {
    store: React.PropTypes.object
  }

BaseLineGrid = connect()(BaseLineGrid)

export default BaseLineGrid
