import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

import {
  columnNumberChange,
  columnWidthChange,
  gutterWidthChange
} from '../../actions'

class ColumnGridControl extends React.Component {
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
            name="Columns"
            label={state.gridStore.columnNumber}
            defaultValue={state.gridStore.columnNumber}
            min="1"
            max="18"
            step="1" 
            onChange={ (e) => store.dispatch(columnNumberChange(e.target.value)) }
          />
          <NumInput
            name="Column Width"
            label={state.gridStore.columnWidth}
            defaultValue={state.gridStore.columnWidth}
            min="1"
            max="5000"
            step="1" 
            onChange={ (e) => store.dispatch(columnWidthChange(e.target.value)) }
          />
          <NumInput
            name="Gutter Width"
            label={state.gridStore.gutterWidth}
            defaultValue={state.gridStore.gutterWidth}
            min="0"
            max="1000"
            step="1" 
            onChange={ (e) => store.dispatch(gutterWidthChange(e.target.value)) }
          />
        </div>
        <div style={{display: 'none'}}>{state.gridStore.gridPositions}</div>
      </div>
    )
  };
};

ColumnGridControl.contextTypes = {
    store: React.PropTypes.object
  }

ColumnGridControl = connect()(ColumnGridControl)

export default ColumnGridControl
