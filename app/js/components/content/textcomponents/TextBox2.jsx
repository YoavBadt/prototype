import React from 'react';
import SpecBox from './SpecBox.jsx';

class TextBox2 extends React.Component {
  render(){
    let fontSize = this.props.fontSize;
    let baseFontSize = this.props.baseFontSize;
    let baseLine = this.props.baseLine;
    let lineHeight = this.props.lineHeight;
    let name = this.props.name;

    let fix = this.props.fix;
    let specs = this.props.specs;
    let style = {
      container:{
        background: specs ? 'rgba(255,0,0,0.04)' : 'none',
        outline: specs ? '1px solid pink' : 'none',
        position: 'relative',
        width:100+'%',
        marginBottom: fix ? 0 : baseLine,
        },
      main : {
        fontSize : fontSize,
        lineHeight : lineHeight + 'px',
        color: this.props.fontColor,
        fontFamily: this.props.fontFamily,
        fontWeight: this.props.fontWeight,
        wordWrap: 'break-word'
        },
        before : {
          height : lineHeight,
          display: 'inline-block' ,
          verticalAlign : fix ? 'baseline': 'top',
          
        },
        after : {
          display: fix ? 'inline-block' : 'none',
          verticalAlign: (Math.ceil((lineHeight/baseLine)/2)*baseLine) * -1,
          height: baseLine,
        }
      }
    return(
    <div style={style.container}>
      <SpecBox
        name={name}
        fontSize={fontSize}
        baseLine={baseLine}
        lineHeight={lineHeight}
        baseFontSize={baseFontSize}
        specs={specs}
      />
      <h style={style.main}>
          <span style={style.before}></span>
          {this.props.text}
          <span style={style.after}></span>
      </h>
    </div>
    )
  };
};
export default TextBox2
