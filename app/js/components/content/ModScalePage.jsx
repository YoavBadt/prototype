import React from 'react';
import { connect } from 'react-redux';

import TextBox from './textcomponents/TextBox.jsx'

class ModScalePage extends React.Component {
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
    let T = state.textState;
    let style = {
      main : {
      width: this.setWidth(),
      margin: '0 auto',
      paddingTop: S.baseLineHeight * 2,
      display: 'flex',
      flexDirection: 'Column'
      },
      section:{
        color: 'rgba(80,80,80,1)',
        marginBottom: S.baseLineHeight,
        display: 'flex',
        flexDirection: 'Column',
        marginBottom: S.baseLineHeight * 2
      }
    }
    return (
      <div style={style.main}>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
            name="h1"
            fontSize={S.scale[6]}
            lineHeight={S.lines[6]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='Bold'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
        </div>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
            name="h2"
            fontSize={S.scale[5]}
            lineHeight={S.lines[5]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='Bold'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
        </div>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
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
        </div>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
            name="h4"
            fontSize={S.scale[3]}
            lineHeight={S.lines[3]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='Bold'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
        </div>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
            name="h5"
            fontSize={S.scale[2]}
            lineHeight={S.lines[2]}
            baseLine={S.baseLineHeight}
            baseFontSize={S.baseFontSize}
            fontWeight='normal'
            fontFamily='Helvetica'
            fontColor='rgba(80,80,80,1)'
            fix={T.fix}
            specs={T.specs}
          />
        </div>
        <div style={style.section}>
          <TextBox
            text="Lorem ipsum dolor sit amet Ag"
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
        </div>
        <div style={style.section}>
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
    )
  };
};
ModScalePage.contextTypes = {
    store: React.PropTypes.object
  }
ModScalePage = connect()(ModScalePage)

export default ModScalePage

