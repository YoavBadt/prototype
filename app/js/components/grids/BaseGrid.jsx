import React from 'react';
import { connect } from 'react-redux';

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
  onChange(e){
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    console.log(state.baseUnit)
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    let Unit = state.gridStore.baseUnit
    let divisions = Unit / state.gridStore.baseUnitDivisions;
    let offset = state.gridStore.baseUnitOffset

    let color = state.gridStore.baseUnitColor;
    let opacity = state.gridStore.baseUnitVisibility;

    let ColNum = state.columnGridNumber;
    let ColWidth = state.columnWidth * Unit;
    let GutWidth = state.gutterWidth * Unit;
    let Stage = (ColNum * ColWidth) + ((ColNum * GutWidth)-GutWidth);
    var position = ((window.innerWidth + 1) - Stage) / 2

    let points = ['0, '+(Unit-0.5), +(Unit-0.5)+', '+(Unit-0.5), +(Unit-0.5)+', -0.5'];
    let points2 = ['0,'+(divisions-0.5),+(divisions-0.5)+','+(divisions-0.5),+(divisions-0.5)+',0'];

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
          <pattern id="D_Pattern" x="0" y="0" width={divisions} height={divisions} patternUnits="userSpaceOnUse">
            <polyline points={points2} stroke={color} fillOpacity="0" strokeOpacity={opacity/2} strokeWidth="1" />
          </pattern>
          <pattern id="Pattern" x={offset} y="0" width={Unit} height={Unit} patternUnits="userSpaceOnUse">
            <polyline points={points} stroke={color} fillOpacity="0" strokeOpacity={opacity} strokeWidth="1" />
            <rect  x="0" y="0" width={Unit} height={Unit} fill="url(#D_Pattern)" fillOpacity="1"></rect>
          </pattern>
        </defs>
        <rect  x="0" y="0" width="100%" height="100%" fill="url(#Pattern)" fillOpacity="1"></rect>
      </svg>
    </div>
    )
  };
};

BaseGrid.contextTypes = {
    store: React.PropTypes.object
  }

BaseGrid = connect()(BaseGrid)

export default BaseGrid
