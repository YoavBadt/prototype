import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'

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
            plus={() =>store.dispatch({type: 'COLUMN_NUMBER_PLUS'})}
            minus={() =>store.dispatch({type: 'COLUMN_NUMBER_MINUS'})}
            size={20}
          />

          <NumInput
            name="Column Width"
            label={state.gridStore.columnWidth}
            plus={() =>store.dispatch({type: 'COLUMN_WIDTH_PLUS'})}
            minus={() =>store.dispatch({type: 'COLUMN_WIDTH_MINUS'})}
            size={20}
          />
          <NumInput
            name="Gutter Width"
            label={state.gridStore.gutterWidth}
            plus={() =>store.dispatch({type: 'GUTTER_WIDTH_PLUS'})}
            minus={() =>store.dispatch({type: 'GUTTER_WIDTH_MINUS'})}
            size={20}
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
