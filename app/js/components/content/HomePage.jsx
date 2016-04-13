import React from 'react';
import { connect } from 'react-redux';

import TextBox from './textcomponents/TextBox.jsx'

class HomePage extends React.Component {
  constructor(){
    super();
    this.setWidth = this.setWidth.bind(this);
    this.setH_Position = this.setH_Position.bind(this);
  }
  setH_Position(number1,number2,number3,number4){
    const { store } = this.context;
    const state = store.getState();
    let S = state.gridState;
    let screenState = S.fakeScreen;
    let stage = S.stage;
    let col = S.columnWidthPx;
    let gut = S.gutterWidthPx;
    let colgut = col+gut;
    let x = 1;
    switch(screenState){
      case 1920:
        if(number1 == 1){
          return x = 0
        }else{
        return x = (colgut*(number1-1));}
        break;
      case 1440:
        if(number2 == 1){
          return x = 0
        }else{
        return x = (colgut*(number2-1));}
        break;
      case 720:
        if(number3 == 1){
          return x = 0
        }else{
        return x = (colgut*(number3-1));}
        break;
      case 320:
        if(number4 == 1){
          return x = 0
        }else{
        return x = (colgut*(number4-1));}
        break;
    };
    return x;
  }
  setWidth(number1,number2,number3,number4){
    const { store } = this.context;
    const state = store.getState();
    let S = state.gridState;
    let screenState = S.fakeScreen;
    let width = 1;
    switch(screenState){
      case 1920:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*number1)-S.gutterWidthPx);
        break;
      case 1440:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*number2)-S.gutterWidthPx);
        break;
      case 720:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*number3)-S.gutterWidthPx);
        break;
      case 320:
        return width = (((S.columnWidthPx+S.gutterWidthPx)*number4)-S.gutterWidthPx);
        break;
    };
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
    let T = state.textStateGeneral;
    let style = {
      main : {
      width: 100+'%',
      background: 'rgba(0,0,0,0)',
      paddingTop: 0,
      display: 'flex',
      flexDirection: 'Column'
      },
      header : {
        background: 'rgba(0,0,255,0.5)',
        width: 100+'%',
      },
      headertitle: {
        marginLeft: this.setH_Position(3,2,1,1)
      },
      wrapper : {
        width: S.stage,
        marginLeft: S.margin,
        marginRight: S.margin,
      },
      content : {
        width: this.setWidth(6,4,4,1),
        margin: '0 auto',
      }
    }
    return (
      <div style={style.main}>
          <header style={style.header}>
            <div style={style.wrapper}>
              <div style={style.headertitle}>
              <TextBox
              text="Site Header"
              name="h2"
              fontSize={S.scale[5]}
              lineHeight={S.lines[5]}
              baseLine={S.baseLineHeight}
              baseFontSize={S.baseFontSize}
              fontWeight='normal'
              fontFamily='Helvetica'
              fontColor='white'
              fix={T.fix}
              specs={T.specs}
            />
            </div>
            </div>
          </header>
          <div style={style.wrapper}>
          <div style={style.content}>
          <TextBox
            text="We are in business"
            name="h3"
            fontSize={S.scale[4]}
            lineHeight={S.lines[4]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='Bold'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
          <TextBox
            text="Line up and take shape"
            name="h4"
            fontSize={S.scale[3]}
            lineHeight={S.lines[3]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='normal'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
          
          <TextBox
            text="this is serious typography, no messing around"
            name="h6"
            fontSize={S.scale[1]}
            lineHeight={S.lines[1]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='normal'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
        <TextBox
          name="P"
          fontSize={S.scale[0]}
          lineHeight={S.lines[0]}
          baseLine={S.baseLineHeight}
          baseFontSize={S.baseFontSize}
          fontWeight='normal'
          fontFamily='Helvetica'
          fontColor='rgba(80,80,80,1)'
          fix={T.fix}
          specs={T.specs}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi."
        />
        <TextBox
          name="P"
          fontSize={S.scale[0]}
          lineHeight={S.lines[0]}
          baseLine={S.baseLineHeight}
          baseFontSize={S.baseFontSize}
          fontWeight='normal'
          fontFamily='Helvetica'
          fontColor='rgba(80,80,80,1)'
          fix={T.fix}
          specs={T.specs}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi."
        />
        </div>
        </div>
      </div>
    )
  };
};
HomePage.contextTypes = {
    store: React.PropTypes.object
  }
HomePage = connect()(HomePage)

export default HomePage

