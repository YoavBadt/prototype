import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

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
            plus={() =>store.dispatch({type: 'BASEUNIT_PLUS'})}
            minus={() =>store.dispatch({type: 'BASEUNIT_MINUS'})}
            size={20}
          />
          <NumInput
            name="Divisions"
            label={state.gridStore.baseUnitDivisions}
            plus={() =>store.dispatch({type: 'BASEUNIT_DIVISIONS_PLUS'})}
            minus={() =>store.dispatch({type: 'BASEUNIT_DIVISIONS_MINUS'})}
            size={20}
          />
          <NumInput
            name="Offset"
            label={state.gridStore.baseUnitOffset}
            plus={() =>store.dispatch({type: 'BASEUNIT_OFFSET_PLUS'})}
            minus={() =>store.dispatch({type: 'BASEUNIT_OFFSET_MINUS'})}
            size={20}
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
