import React from 'react';
import { connect } from 'react-redux';

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

    let Unit = state.gridStore.baseUnit;
    let Baseline = state.gridStore.baseLineHeight;
    let ColNum = state.gridStore.columnNumber;

    let ColWidth = state.gridStore.columnWidth;
    let GutWidth = state.gridStore.gutterWidth;

    let Stage = (ColNum * ColWidth) + ((ColNum * GutWidth)-GutWidth);

    var position = ((window.innerWidth + 1) - Stage) / 2
    var fix = position % (ColWidth+GutWidth)

    let Color = "pink";
    let FillOpacity1 = "0.5";
    let StrokeOpacity ="0";


    let style = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '-100'
    }
    return (
      <div>
      <svg style={style}>
        <defs>
          <pattern
            id="ColumnPattern"
            x={fix}
            y="0"
            width={ColWidth+GutWidth}
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width={ColWidth}
              height="100%"
              fill={Color}
              fillOpacity={FillOpacity1}
              stroke={Color}
              strokeOpacity="0"
            />
            <line
              strokeWidth="1"
              stroke={Color}
              strokeOpacity={StrokeOpacity}
              x1={ColWidth+GutWidth-0.5}
              x2={ColWidth+GutWidth-0.5}
              y1="0"
              y2="100%"
              />
              <line
              strokeWidth="1"
              stroke={Color}
              strokeOpacity={StrokeOpacity}
              x1={ColWidth - 0.5}
              x2={ColWidth - 0.5}
              y1="0"
              y2="100%"
              />
              <line
              strokeWidth="1"
              stroke={Color}
              strokeOpacity={StrokeOpacity}
              x1={(ColWidth+(GutWidth/2)) - 0.5}
              x2={(ColWidth+(GutWidth/2)) - 0.5}
              y1="0"
              y2="100%"
              strokeDasharray="1,1"
              />
              
          </pattern>
        </defs>
        <rect  x={position-1} y="0" width={Stage+1} height="100%" fill="url(#ColumnPattern)" fillOpacity="1"></rect>
      </svg>
    </div>
    )
  };
};

ColumnGrid.contextTypes = {
    store: React.PropTypes.object
  }

ColumnGrid = connect()(ColumnGrid)

export default ColumnGrid
