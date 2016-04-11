import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'


import {BaseFontSizeChange} from '../../actions/gridStateActions'

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
      <div>
        <div style={style.section}>
          <NumInput2
            name="Base Font Size"
            label={state.gridState.baseFontSize}
            plus={()=>store.dispatch(BaseFontSizeChange(state.gridState.baseFontSize + 1))}
            minus={()=>store.dispatch(BaseFontSizeChange(state.gridState.baseFontSize - 1))}
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
