import React from 'react';
import { connect } from 'react-redux';

import { set320,set720,set1440,set1920 } from '../../actions/gridStateActions.js'
import ButtonR from '../ButtonR.jsx'

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

    let S = state.gridState;
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
        <ButtonR 
          value='state_320'
          onClick={(e) => store.dispatch(set320())}
          text="320"
          check={S.currentState}
          width={25+'%'}
        />
        <hr style={style.vr}/>
        <ButtonR 
          value='state_720'
          onClick={(e) => store.dispatch(set720())}
          text="720"
          check={S.currentState}
          width={25+'%'}
        />
        <hr style={style.vr}/>
        <ButtonR 
          value='state_1440'
          onClick={(e) => store.dispatch(set1440())}
          text="1440"
          check={S.currentState}
          width={25+'%'}
        />
        <hr style={style.vr}/>
        <ButtonR 
          value='state_1920'
          onClick={(e) => store.dispatch(set1920())}
          text="1920"
          check={S.currentState}
          width={25+'%'}
        />
        </div>
      </div>
    )
  }
};


ScreenSizeControl.contextTypes = {
    store: React.PropTypes.object
  };
ScreenSizeControl = connect()(ScreenSizeControl);

export default ScreenSizeControl
