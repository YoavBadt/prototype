import React from 'react';
import { connect } from 'react-redux';

import SpecBox from './SpecBox.jsx';
import Text from './Text.jsx';


class TextBox2 extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render(){
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    let text = this.props.text;

    let T = this.props.state;
    let name = T.name;

    let baseFontSize = T.baseFontSize;
    let baseLine = T.baseLineHeight;

    let fontSize = T.fontSize;
    let lineHeight = T.lineHeight * baseLine;
    let autoLineHeight = T.autoLineHeight;
    let marginBottom = T.marginBottom * baseLine;

    let fix = T.fix;
    let specs = state.textStateGeneral.specs;

    let fontColor =T.fontColor;
    let fontFamily =T.fontFamily;
    let fontWeight =T.fontWeight;

    let style = {
      container:{
        background: specs ? 'rgba(255,0,0,0.04)' : 'none',
        outline: specs ? '1px solid pink' : 'none',
        position: 'relative',
        width:100+'%',
        marginBottom: marginBottom
        }
      }
    return(
    <div style={style.container}>
      <Text
        text={text}
        name={name}
        fontSize={fontSize}
        baseFontSize={baseFontSize}
        baseLine={baseLine}
        lineHeight={T.autoLineHeightMode ? autoLineHeight : lineHeight}
        specs={specs}
        fix={fix}
        fontColor={fontColor}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        marginBottom={marginBottom}
      />
      <SpecBox
        name={name}
        fontSize={fontSize}
        baseLine={baseLine}
        lineHeight={T.autoLineHeightMode ? autoLineHeight : lineHeight}
        baseFontSize={baseFontSize}
        specs={specs}
      />
    </div>
    )
  };
};

TextBox2.contextTypes = {
    store: React.PropTypes.object
  }
TextBox2 = connect()(TextBox2)

export default TextBox2
