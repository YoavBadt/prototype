import React from 'react';

class TextBox extends React.Component {
  render(){
    let fontSize = this.props.fontSize;
    let baseline = this.props.baseLine;
    let lineHeight = this.props.lineHeight;
    let fix = this.props.fix;
    let style = {
      main : {
      fontSize : fontSize,
      lineHeight : lineHeight + 'px',
      color: this.props.fontColor,
      fontFamily: this.props.fontFamily,
      fontWeight: this.props.fontWeight,
      background: 'rgba(255,0,0,0.05)',
      margin:0,
      width:100+'%'
      },
      before : {
        height : lineHeight,
        display: fix ? 'inline-block' : 'none',
        verticalAlign : 'baseline',
        width: 10,
        borderTop: '1px solid red',
        borderLeft: '1px solid red',
        borderBottom: '1px solid red',
        marginRight:-10,
        boxSizing: 'border-box'
      },
      after : {
        content: '',
        display: fix ? 'inline-block' : 'none',
        verticalAlign: (Math.ceil((lineHeight/baseline)/2)*baseline) * -1,
        height: baseline,
      }
    }
    return(
      <h style={style.main}>
        <span style={style.before}></span>
        {this.props.text}
        <span style={style.after}></span>
      </h>
    )
  };
};

export default TextBox
