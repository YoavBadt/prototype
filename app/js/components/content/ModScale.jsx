import React from 'react';
import { connect } from 'react-redux';

import H1 from './textcomponents/H1.jsx'
import H2 from './textcomponents/H2.jsx'
import H3 from './textcomponents/H3.jsx'
import H4 from './textcomponents/H4.jsx'
import H5 from './textcomponents/H5.jsx'
import H6 from './textcomponents/H6.jsx'
import P from './textcomponents/P.jsx'

  

class ModScale extends React.Component {
    constructor(){
    super();
    this.setWidth = this.setWidth.bind(this);
  }
  setWidth(){
    const { store } = this.context;
    const state = store.getState();
    let screenState = state.gridState.fakeScreen;
    let S = state.gridState;
    let width = 1;
    switch(screenState){
      case 1920:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*6)-S.gutterWidthPx);
        break;
      case 1440:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*4)-S.gutterWidthPx);
        break;
      case 720:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*4)-S.gutterWidthPx);
        break;
      case 320:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*1)-S.gutterWidthPx);
        break;
    };
    console.log(width);
    return width;
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    this.setWidth()
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let S = state.gridState;

    let baseline = state.gridState.baseLineHeight;
    
    let style = {
      main : {
      width: this.setWidth(),
      margin: '0 auto',
      paddingTop: baseline,
      display: 'flex',
      flexDirection: 'Column'
      },
      section:{
        color: 'rgba(80,80,80,1)',
        borderLeft: '1px solid rgba(0,0,0,0)',
        marginLeft: -1,
        marginBottom: baseline,
        paddingLeft: 0
      },
      label:{
        color: 'red',
        background: 'rgba(255,255,255,0.5)',
        fontFamily: 'monospace',
        lineHeight: baseline + 'px',
      }
    }
    return (
      <div style={style.main}>
        <div style={style.section}>
          <label style={style.label}>
          fontsize: {S.scale[6]},
          lineheight:{(S.lines[6]/S.baseLineHeight).toFixed(2)}
          ({S.lines[6].toFixed(2)}Px)
          </label>
          <H1 text="I am h1 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[5]}, lineheight:{S.lines[5]/S.baseLineHeight} ({S.lines[5]}Px)</label>
          <H2 text="I am h2 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[4]}, lineheight:{S.lines[4]/S.baseLineHeight} ({S.lines[4]}Px)</label>
          <H3 text="I am h3 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[3]}, lineheight:{S.lines[3]/S.baseLineHeight} ({S.lines[3]}Px)</label>
          <H4 text="I am h4 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[2]}, lineheight:{S.lines[2]/S.baseLineHeight} ({S.lines[2]}Px)</label>
          <H5 text="I am h5 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[1]}, lineheight:{S.lines[1]/S.baseLineHeight} ({S.lines[1]}Px)</label>
          <H6 text="I am h6 Ag"/>
        </div>
        <div style={style.section}>
          <label style={style.label}>-fontsize: {S.scale[0]}, lineheight:{S.lines[0]/S.baseLineHeight} ({S.lines[0]}Px)</label>
        <P 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi.
        "/>
        </div>
      </div>
    )
  };
};
ModScale.contextTypes = {
    store: React.PropTypes.object
  }
ModScale = connect()(ModScale)

export default ModScale

//ratio:{(S.lines[6]/S.scale[6]).toFixed(2)}
