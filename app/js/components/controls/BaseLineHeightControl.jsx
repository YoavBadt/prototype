import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

class BaseLineHeightControl extends React.Component {
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
            name="Base Line Height"
            label={state.gridStore.baseLineHeight}
            plus={() =>store.dispatch({type: 'BASELINE_PLUS'})}
            minus={() =>store.dispatch({type: 'BASELINE_MINUS'})}
            size={20}
          />
          <NumInput
            name="Divisions"
            label={state.gridStore.baseLineDivisions}
            plus={() =>store.dispatch({type: 'BASELINE_DIVISIONS_PLUS'})}
            minus={() =>store.dispatch({type: 'BASELINE_DIVISIONS_MINUS'})}
          />
        </div>
      </div>
    )
  };
};

BaseLineHeightControl.contextTypes = {
    store: React.PropTypes.object
  }

BaseLineHeightControl = connect()(BaseLineHeightControl)

export default BaseLineHeightControl
