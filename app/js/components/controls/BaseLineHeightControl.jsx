import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

import {BaseLineChange} from '../../actions'
import {BaseLineDivisionsChange} from '../../actions'

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
            defaultValue={state.gridStore.baseLineHeight}
            min="4"
            max="100"
            step="2" 
            onChange={ (e) => store.dispatch(BaseLineChange(e.target.value)) }
          />
          <NumInput
            name="Divisions"
            label={state.gridStore.baseLineDivisions}
            defaultValue={state.gridStore.baseLineDivisions}
            min="1"
            max="4"
            step="1" 
            onChange={ (e) => store.dispatch(BaseLineDivisionsChange(e.target.value)) }
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
