import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'
import Switch from '../Switch.jsx';

import {showTextSpecs,baseLineFix} from '../../actions/textStateActions';

class TextGeneral extends React.Component {
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
        alignItems: 'flex-start'
      }
    }
    return (
      <div>
        <div style={style.section}>
          <label style={style.title}>General :</label>
          <Switch
            name="Show Specs"
            defaultValue={state.textState.specs}
            value={state.textState.specs}
            onChange={(e)=>store.dispatch(showTextSpecs(state.textState.specs))}
          />
          <Switch
            name="Base Line Fix"
            defaultValue={state.textState.fix}
            value={state.textState.fix}
            onChange={(e)=>store.dispatch(baseLineFix(state.textState.fix))}
          />
        </div>
      </div>
    )
  };
};

TextGeneral.contextTypes = {
    store: React.PropTypes.object
  }

TextGeneral = connect()(TextGeneral)

export default TextGeneral
