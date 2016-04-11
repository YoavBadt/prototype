import React from 'react';
import { connect } from 'react-redux';

import RangeInput from '../RangeInput.jsx'

import { ModularScaleChange } from '../../actions/gridStateActions.js'

class ModularScaleControl extends React.Component {
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
      section : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      ul : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        listStyle: 'none',
        fontFamily: 'monospace',
        fontSize: 14,
        outline: '0px solid red',
        margin:0,
        padding:0,
        height:20
      },
      li:{
        outline: '0px solid red',
        background: 'rgba(255,0,0,0.1)',
        textAlign: 'center',
        height: 20,
        lineHeight: 20+'px',
        padding: 2
      }
    }
    return (
      <div style={this.props.style}>
        <div style={style.section}>
          <RangeInput
            name="Modualr Scale"
            label={state.gridState.modularScale}
            defaultvalue={state.gridState.modularScale}
            min="1.001" max="1.999" step="0.001"
            onChange={ (e) => store.dispatch(ModularScaleChange(e.target.value)) }
            value={state.gridState.modularScale}
          />
          <ul style={style.ul}>
          <li style={style.li}>{state.gridState.scale[0]}</li>
          <li style={style.li}>{state.gridState.scale[1]}</li>
          <li style={style.li}>{state.gridState.scale[2]}</li>
          <li style={style.li}>{state.gridState.scale[3]}</li>
          <li style={style.li}>{state.gridState.scale[4]}</li>
          <li style={style.li}>{state.gridState.scale[5]}</li>
          <li style={style.li}>{state.gridState.scale[6]}</li>
          </ul>
        </div>
      </div>
    )
  };
};

ModularScaleControl.contextTypes = {
    store: React.PropTypes.object
  }

ModularScaleControl = connect()(ModularScaleControl)

export default ModularScaleControl
