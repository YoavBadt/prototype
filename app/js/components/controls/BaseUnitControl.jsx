import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

import { BaseUnitChange } from '../../actions'



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
          <NumInput
            name="Base Unit"
            label={state.gridStore.baseUnit}
            defaultValue={state.gridStore.baseUnit}
            min="4"
            max="200"
            step="2" 
            onChange={ (e) => store.dispatch(BaseUnitChange(e.target.value)) }
          />
          <NumInput
            name="Divisions"
            label={state.gridStore.baseUnitDivisions}
            defaultValue={state.gridStore.baseUnitDivisions}
            min="1"
            max="4"
            step="1"
            onChange={ (e) => store.dispatch(BaseUnitDivisionChange(e.target.value)) }
          />
          <NumInput
            name="Offset"
            label={state.gridStore.baseUnitOffset}
            defaultValue={state.gridStore.baseUnitOffset}
            min="0"
            max="{state.gridStore.baseUnitOffset}"
            step="1"
            onChange={ (e) => store.dispatch(BaseUnitOffsetChange(e.target.value)) }
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
