import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'
import Switch from '../Switch.jsx';

import {showTextSpecs,baseLineFix} from '../../actions/textStateGeneralActions';

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
    let T = state.textStateGeneral;
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
            defaultValue={T.specs}
            value={T.specs}
            onChange={(e)=>store.dispatch(showTextSpecs(T.specs))}
          />
          <Switch
            name="Base Line Fix"
            defaultValue={T.fix}
            value={T.fix}
            onChange={(e)=>store.dispatch(baseLineFix(T.fix))}
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
