import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

import {BaseFontSizeChange} from '../../actions'

class BaseFontSizeControl extends React.Component {
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
            name="Base Font Size"
            label={state.gridStore.baseFontSize}
            defaultValue={state.gridStore.baseFontSize}
            min="6"
            max="100"
            step="1"
            onChange={ (e) => store.dispatch(BaseFontSizeChange(e.target.value)) }
          />
        </div>
      </div>
    )
  };
};

BaseFontSizeControl.contextTypes = {
    store: React.PropTypes.object
  }

BaseFontSizeControl = connect()(BaseFontSizeControl)

export default BaseFontSizeControl
