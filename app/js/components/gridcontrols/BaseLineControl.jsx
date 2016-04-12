import React from 'react';
import { connect } from 'react-redux';

import NumInput2 from '../NumInput2.jsx'
import Switch from '../Switch.jsx'

import {BaseLineChange,BaseLineDivisionsChange} from '../../actions/gridStateActions.js'
import {BaseLineShow} from '../../actions/gridGeneralActions.js'



class BaseLineControl extends React.Component {
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
        alignItems: 'flex-start '
      },
      label : {
        fontSize: 10,
        lineHeight: 10 + 'px',
        marginBottom: 10
      }
    }
    return (
      <div>
        <div style={style.section}>
          <NumInput2
            name="Base Line Height"
            label={S.baseLineHeight}
            plus={()=>store.dispatch(BaseLineChange(S.baseLineHeight + 1))}
            minus={()=>store.dispatch(BaseLineChange(S.baseLineHeight - 1))}
          />
          <label style={style.label}>Base Font Size Ratio : {(S.baseLineHeight/S.baseFontSize).toFixed(2)}</label>
          <NumInput2
            name="Divisions"
            label={state.gridState.baseLineDivisions}
            plus={()=>store.dispatch(BaseLineDivisionsChange(state.gridState.baseLineDivisions + 1))}
            minus={()=>store.dispatch(BaseLineDivisionsChange(state.gridState.baseLineDivisions - 1))}
          />
          <Switch
          name="Show"
          defaultValue={state.gridGeneral.baseLineShow}
          value={state.gridGeneral.baseLineShow}
          onChange={(e)=>store.dispatch(BaseLineShow(state.gridGeneral.baseLineShow))}
          />
          
          </div>
      </div>
    )
  };
};

BaseLineControl.contextTypes = {
    store: React.PropTypes.object
  }

BaseLineControl = connect()(BaseLineControl)

export default BaseLineControl
