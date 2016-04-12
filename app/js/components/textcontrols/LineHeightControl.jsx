import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'

import {changeLineHeight} from '../../actions/textStateActions'

class LineHeightControl extends React.Component {
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
            name="Line Height"
            label={state.textState.lineHeight}
            plus={()=>store.dispatch(changeLineHeight(state.textState.lineHeight + 1))}
            minus={()=>store.dispatch(changeLineHeight(state.textState.lineHeight - 1))}
          />
        </div>
      </div>
    )
  };
};

LineHeightControl.contextTypes = {
    store: React.PropTypes.object
  }

LineHeightControl = connect()(LineHeightControl)

export default LineHeightControl
