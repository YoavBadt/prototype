import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

class BaseGrid extends React.Component {
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

    let Unit = S.baseUnit;
    let divisions =  Unit / S.baseUnitDivisions ;
    
    let offset = S.baseUnitOffset ;

    let color = state.gridGeneral.baseUnitColor;
    let opacity = state.gridGeneral.baseUnitVisibility;
    let show = state.gridGeneral.baseUnitShow;

    let points = ['0, ' + (Unit - 0.5), +(Unit - 0.5)+', '+(Unit - 0.5), +(Unit - 0.5)+', -0.5'];
    let points2 = ['0,'+(divisions - 0.5),+(divisions - 0.5)+','+(divisions - 0.5),+(divisions - 0.5)+',0'];

    let style = {
      base: {
      width: S.fakeScreen,
      minHeight:'100vh',
      height: 100+'%',
      position: 'absolute',
      zIndex:-30,
      left: '0',
      top: '0',
      }
    }
    return (
      <div>
      <svg style={[style.base,show ? {display:''} : {display:'none'} ]}>
        <defs>
          <pattern
            id="D_Pattern"
            x="0" y="0"
            width={divisions}
            height={divisions}
            patternUnits="userSpaceOnUse"
            >
              <polyline
                points={points2}
                stroke={color}
                fillOpacity="0"
                strokeOpacity={opacity/2}
                strokeWidth="1"
                strokeDasharray="1,1"
                />
          </pattern>
          <pattern
            id="Pattern"
            x={offset} y="0"
            width={Unit} height={Unit}
            patternUnits="userSpaceOnUse"
            >
            <polyline
              points={points}
              stroke={color}
              fillOpacity="0"
              strokeOpacity={opacity/2}
              strokeWidth="1"
              strokeDasharray="1,1"
              />
            <rect
              x="0" y="0"
              width={Unit} height={Unit}
              fill="url(#D_Pattern)"
              fillOpacity="1" />
          </pattern>
        </defs>
        <rect
          x="0" y="0"
          width="100%" height="100%"
          fill="url(#Pattern)"
          fillOpacity="1">
        </rect>
      </svg>
    </div>
    )
  };
};

BaseGrid.contextTypes = {
    store: React.PropTypes.object
  }
BaseGrid = Radium(BaseGrid);
BaseGrid = connect()(BaseGrid)

export default BaseGrid
