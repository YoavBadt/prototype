import React from 'react';

class TextBox extends React.Component {
  render(){
    let fontSize = this.props.fontSize;
    let baseline = this.props.baseLine;
    let lineHeight = this.props.lineHeight;
    let fix = this.props.fix;
    let specs = this.props.specs;
    let style = {
      container:{
      background: specs ? 'rgba(255,0,0,0.04)' : 'none',
      outline: specs ? '1px solid pink' : 'none',
      position: 'relative',
      width:100+'%',
      marginBottom: fix ? 0 : baseline,
      },
      main : {
      fontSize : fontSize,
      lineHeight : lineHeight + 'px',
      color: this.props.fontColor,
      fontFamily: this.props.fontFamily,
      fontWeight: this.props.fontWeight,
      },
      before : {
        height : lineHeight,
        display: 'inline-block' ,
        verticalAlign : fix ? 'baseline': 'top',
        width: 10,
        borderTop: specs ? '1px solid red' : 'none',
        borderLeft: specs ? '1px solid red' : 'none',
        borderBottom: specs ? '1px solid red' : 'none',
        marginRight:-10,
        boxSizing: 'border-box'
      },
      after : {
        content: '',
        display: fix ? 'inline-block' : 'none',
        verticalAlign: (Math.ceil((lineHeight/baseline)/2)*baseline) * -1,
        height: baseline,
      },
      tag :{
        position: 'absolute',
        top: -15,
        left: 0,
        height: 15,
        lineHeight: 15+'px',
        fontSize: 12,
        background: 'rgba(255,0,0,0)',
        color: 'red',
        fontFamily:'monospace',
        display: specs ? 'inline-block' : 'none'
      }
    }
    return(
      <div style={style.container}>
        <span style={style.tag}>
          <b>{this.props.name}</b> / {(this.props.fontSize/this.props.baseFontSize).toFixed(2)} ({this.props.fontSize}px)
          / {(this.props.lineHeight/this.props.baseLine).toFixed(0)} lines 
          ({this.props.lineHeight.toFixed(0)}Px)
        </span>
        <h style={style.main}>
          <span style={style.before}></span>
          {this.props.text}
          <span style={style.after}></span>
        </h>
      </div>
    )
  };
};

export default TextBox
