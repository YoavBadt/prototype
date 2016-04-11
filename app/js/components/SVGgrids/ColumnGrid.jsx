import React from 'react';
import { connect } from 'react-redux';

import ArrowHorizontal from './ArrowHorizontal.jsx'
import Radium from 'radium'


class ColumnGrid extends React.Component {
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

    let ColNum = S.columns;
    
    let ColWidth = S.columnWidthPx;
    let GutWidth = S.gutterWidthPx;
    let columnPattern = S.columnWidthPx + S.gutterWidthPx
    
    let Stage = S.stage;
    let Position = S.margin;

    let fix = (S.margin % (S.columnWidthPx + S.gutterWidthPx)) - 1

    let Color = state.gridGeneral.columnColor;
    let opacity = state.gridGeneral.columnVisibility;
    let show = state.gridGeneral.columnShow;

    let FillOpacity1 = "0";
    let StrokeOpacity = opacity;

    let style = {
      base:{
      width: state.gridState.fakeScreen,
      minHeight:'100vh',
      height: 100+'%',
      position: 'absolute',
      zIndex:-20,
      left: '0',
      top: '0',
      }
    }
    return (
      <div>
      <svg style={[style.base,show ? {display:''} : {display:'none'} ]}>
        <defs>
          <pattern
            id="ColumnPattern"
            x={fix}
            y="0"
            width={columnPattern}
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0.5"
              y="-1"
              width={ColWidth}
              height="101%"
              fill={Color}
              fillOpacity={FillOpacity1}
              stroke={Color}
              strokeOpacity={StrokeOpacity}
              strokWidth="1"
            />
              <line
              strokeWidth="1"
              stroke={Color}
              strokeOpacity="0"
              x1={(ColWidth+(GutWidth/2)) + 0.5}
              x2={(ColWidth+(GutWidth/2)) + 0.5}
              y1="0"
              y2="100%"
              strokeDasharray="1,1"
              />
              
          </pattern>
        </defs>
        <rect  x={Position-1} y="0" width={Stage+3} height="100%" fill="url(#ColumnPattern)" fillOpacity="1"></rect>
      </svg>
    </div>
    )
  };
};

ColumnGrid.contextTypes = {
    store: React.PropTypes.object
  }
ColumnGrid = Radium(ColumnGrid)
ColumnGrid = connect()(ColumnGrid)

export default ColumnGrid
