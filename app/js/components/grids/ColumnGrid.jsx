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

    var position = (state.gridStore.screenFake - Stage) / 2 //margin simulator
    var fix = position % (ColWidth+GutWidth)

    let Color = state.gridStore.columnColor;
    let FillOpacity1 = "0";
    let StrokeOpacity ="1";


    let style = {
      width: state.gridStore.screenFake,
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0',
    }
    return (
      <div>
      <svg style={style}>
        <defs>
          <pattern
            id="ColumnPattern"
            x={fix-1}
            y="0"
            width={ColWidth+GutWidth}
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
              strokeOpacity={StrokeOpacity}
              x1={(ColWidth+(GutWidth/2)) + 0.5}
              x2={(ColWidth+(GutWidth/2)) + 0.5}
              y1="0"
              y2="100%"
              strokeDasharray="1,1"
              />
              
          </pattern>
        </defs>
        <rect  x={position-1} y="0" width={Stage+3} height="100%" fill="url(#ColumnPattern)" fillOpacity="1"></rect>
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
