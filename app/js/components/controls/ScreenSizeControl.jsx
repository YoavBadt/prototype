import React from 'react';
import { connect } from 'react-redux';

import RangeInput from '../RangeInput.jsx'


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
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let style = {
      main:{
        boxSizing: 'border-box',
        borderBottom: '1px solid red',
      },
      section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      },
      button:{
        margin:0,
        background:'white',
        border:'none',
        width:220/4 -1,
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
    return (
      <div style={style.main}>
        <div style={style.section}>
        <button
          style={style.button}
          value={320} 
          onClick={(e) => store.dispatch({type: 'SCREEN_FAKE_CHANGE',payload: e.target.value})}
        >
        320
        </button>
        <hr style={style.vr}/>
        <button 
          style={style.button}
          value="720" 
          onClick={(e) => store.dispatch({type: 'SCREEN_FAKE_CHANGE',payload: e.target.value})}
        >
        720
        </button>
        <hr style={style.vr}/>  
        <button 
          style={style.button}
          value="1440" 
          onClick={(e) => store.dispatch({type: 'SCREEN_FAKE_CHANGE',payload: e.target.value})}
        >
        1440
        </button>
        <hr style={style.vr}/>
        <button 
          style={style.button}
          value="1920" 
          onClick={(e) => store.dispatch({type: 'SCREEN_FAKE_CHANGE',payload: e.target.value})}
        >
        1920
        </button>
        </div>
      </div>
    )
  };
};

ScreenSizeControl.contextTypes = {
    store: React.PropTypes.object
  }

ScreenSizeControl = connect()(ScreenSizeControl)

export default ScreenSizeControl
