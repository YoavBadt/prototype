import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'

// import { BaseUnitChange } from '../../actions'

import {
  BaseUnitChange,
  BaseUnitDivisionsChange,
  BaseUnitOffsetChange } from '../../actions/gridStateActions.js'



class BaseUnitControl extends React.Component {
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
    let style = {
      title : {
        lineHeight: 20+'px',
        height: 30,
        margin: 0,
        padding: 0
      },
      section : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end '
      }
    }
    return (
      <div style={this.props.style}>
        <div style={style.section}>
          <NumInput2
          name="Base Unit"
          label={state.gridState.baseUnit}
          plus={()=>store.dispatch(BaseUnitChange(state.gridState.baseUnit + 2))}
          minus={()=>store.dispatch(BaseUnitChange(state.gridState.baseUnit - 2))}
          />
          <NumInput2
            name="Divisions"
            label={state.gridState.baseUnitDivisions}
            plus={()=>store.dispatch(BaseUnitDivisionsChange(state.gridState.baseUnitDivisions + 1))}
            minus={()=>store.dispatch(BaseUnitDivisionsChange(state.gridState.baseUnitDivisions - 1))}
          />
          <NumInput2
            name="Offset"
            label={state.gridState.baseUnitOffset}
            plus={()=>store.dispatch(BaseUnitOffsetChange(state.gridState.BaseUnitOffset + 1))}
            minus={()=>store.dispatch(BaseUnitOffsetChange(state.gridState.BaseUnitOffset - 1))}
          />
        </div>
      </div>
    )
  };
};

BaseUnitControl.contextTypes = {
    store: React.PropTypes.object
  }

BaseUnitControl = connect()(BaseUnitControl)

export default BaseUnitControl
