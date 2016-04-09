import React from 'react';
import { connect } from 'react-redux';

import { set320,set720,set1440,set1920 } from '../../actions/gridStateActions.js'

class ScreenSizeControl extends React.Component {
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
    let style = {
      main:{
        boxSizing: 'border-box',
        borderBottom: '1px solid red',
        background: 'red'
      },
      section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      },
      button:{
        margin:0,
        background: 'rgba(255,255,255,0.9)',
        border:'none',
        width: 25+'%',
        height: 40,
        color: 'red',
        fontFamily: 'monospace'
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
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let active = state.gridState.currentState;
    return(
      <div style={style.main}>
        
        <div style={style.section}>
        <button
          style={style.button}
          value='state_320'
          onClick={(e) => store.dispatch(set320())}
        >
        320
        </button>
        <hr style={style.vr}/>
        <button 
          style={style.button}
          value='state_720'
          onClick={(e) => store.dispatch(set720())}
        >
        720
        </button>
        <hr style={style.vr}/>
        <button 
          style={style.button}
          value='state_1440'
          onClick={(e) => store.dispatch(set1440())}
        >
        1440
        </button>
        <hr style={style.vr}/>
        <button 
          style={style.button}
          value='state_1920'
          onClick={(e) => store.dispatch(set1920())}
        >
        1920
        </button>
        </div>
      </div>
    )
  }
};


ScreenSizeControl.contextTypes = {
    store: React.PropTypes.object
  }

ScreenSizeControl = connect()(ScreenSizeControl)

export default ScreenSizeControl
