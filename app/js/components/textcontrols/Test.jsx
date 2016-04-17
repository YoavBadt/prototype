import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'

import ButtonR from '../ButtonR.jsx'
import {changeBaseFontSize2,changeScreenState} from  '../../actions/TestActions'

class Test extends React.Component {
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
    let i = state.screenState;
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
            name="Font Size Test"
            label={state.baseFontSize[i]}
            plus={()=>store.dispatch(change.BaseFontSize2(state.baseFontSize[i] + 1))}
            minus={()=>store.dispatch(change.BaseFontSize2(state.baseFontSize[i] - 1))}
          />
          <ButtonR 
            value='0'
            onClick={(e) => store.dispatch(changeScreenState(e.target.value))}
            text="320"
          />
          <ButtonR 
          value='1'
          onClick={(e) => store.dispatch(changeScreenState(e.target.value))}
          text="720"
          />
          <ButtonR 
          value='2'
          onClick={(e) => store.dispatch(changeScreenState(e.target.value))}
          text="1440"
          />
          <ButtonR 
          value='3'
          onClick={(e) => store.dispatch(changeScreenState(e.target.value))}
          text="1920"
          />
        </div>
      </div>
    )
  };
};

Test.contextTypes = {
    store: React.PropTypes.object
  }

Test = connect()(Test)

export default Test
