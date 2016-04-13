import React from 'react';
import { connect } from 'react-redux';

import Switch from '../Switch.jsx'
import {preview} from '../../actions/gridGeneralActions.js'
import {showTextSpecs} from '../../actions/textStateGeneralActions.js'

class Preview extends React.Component {
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

    let S = state.gridState;
    let G = state.gridGeneral;
    let style = {
      main:{
        boxSizing: 'border-box',
        borderRight: '1px solid red',
        borderLeft: '1px solid red',
        paddingTop: 5
      },
      section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 40,
      },
      vr:{
        margin:0,
        padding:0,
        border: 0,
        width:1,
        height: 40,
        background: 'red',
      }
    }
    return(
      <div style={style.main}>
        <div style={style.section}>
        <Switch
          name="Preview"
          defaultValue={G.preivew}
          value={G.preivew}
          onChange={(e)=>store.dispatch(preview(e.target.value))}
          />
        </div>
      </div>
    )
  }
};


Preview.contextTypes = {
    store: React.PropTypes.object
  };
Preview = connect()(Preview);

export default Preview
