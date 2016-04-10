import React from 'react';
import { connect } from 'react-redux';

import H1 from './textcomponents/H1.jsx'
import H2 from './textcomponents/H2.jsx'
import H3 from './textcomponents/H3.jsx'
import H4 from './textcomponents/H4.jsx'
import H5 from './textcomponents/H5.jsx'
import H6 from './textcomponents/H6.jsx'
import P from './textcomponents/P.jsx'

import TextBox from './textcomponents/TextBox.jsx'

class ModScaleSection extends React.Component {
  render() {
    let style = {
      section:{
        color: 'rgba(80,80,80,1)',
        marginBottom: this.props.baseLine,
        display: 'flex',
        flexDirection: 'Column'
      },
      label:{
        color: 'red',
        background: 'rgba(255,255,255,0.5)',
        fontFamily: 'monospace',
        lineHeight: this.props.baseLine + 'px',
      }
    }
    return(
      <div style={style.section}>
        <label style={style.label}>
          fontsize: {this.props.fontSize}px
          /{(this.props.lineHeight/this.props.baseLine).toFixed(0)} lines 
          ({this.props.lineHeight.toFixed(0)}Px)
        </label>
        <TextBox
          text={this.props.text}
          fontSize={this.props.fontSize}
          fontFamily={this.props.fontFamily}
          fontWeight={this.props.fontWeight}
          fontColor={this.props.fontColor}
          lineHeight={this.props.lineHeight}
          baseLine={this.props.baseLine}
          fix={true}
        />
      </div>
    )
  }
};

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

    let style = {
      main : {
      width: this.setWidth(),
      margin: '0 auto',
      paddingTop: S.baseLineHeight,
      display: 'flex',
      flexDirection: 'Column'
      }
    }
    return (
      <div style={style.main}>
      <ModScaleSection
        text="I am h1 Ag"
        fontSize={S.scale[6]}
        lineHeight={S.lines[6]}
        baseLine={S.baseLineHeight}
        fontWeight='Bold'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        text="I am h2 Ag"
        fontSize={S.scale[5]}
        lineHeight={S.lines[5]}
        baseLine={S.baseLineHeight}
        fontWeight='Bold'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        text="I am h3 Ag"
        fontSize={S.scale[4]}
        lineHeight={S.lines[4]}
        baseLine={S.baseLineHeight}
        fontWeight='Bold'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        text="I am h4 Ag"
        fontSize={S.scale[3]}
        lineHeight={S.lines[3]}
        baseLine={S.baseLineHeight}
        fontWeight='Bold'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        text="I am h5 Ag"
        fontSize={S.scale[2]}
        lineHeight={S.lines[2]}
        baseLine={S.baseLineHeight}
        fontWeight='normal'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        text="I am h6 Ag"
        fontSize={S.scale[1]}
        lineHeight={S.lines[1]}
        baseLine={S.baseLineHeight}
        fontWeight='normal'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
      />
      <ModScaleSection
        fontSize={S.scale[0]}
        lineHeight={S.lines[0]}
        baseLine={S.baseLineHeight}
        fontWeight='normal'
        fontFamily='Helvetica'
        fontColor='rgba(80,80,80,1)'
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi."
      /> 
      </div>
    )
  };
};
ModScale.contextTypes = {
    store: React.PropTypes.object
  }
ModScale = connect()(ModScale)

export default ModScale

