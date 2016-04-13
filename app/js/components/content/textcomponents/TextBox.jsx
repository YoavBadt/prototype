import React from 'react';

class TextBox extends React.Component {
  constructor(){
    super();
    this.Fraction = this.Fraction.bind(this);
  }
  Fraction(lineHeight,baseLine){
    let fraction = (((lineHeight/baseLine).toFixed(2))%1).toFixed(2);
    let number = (lineHeight/baseLine).toFixed(0);
    switch(fraction){
      case '0.00' :
        return number + '';
        break;
      case '0.25' :
        return number+'¼';
        break;
      case '0.50' :
        return number+'½';
        break;
      case '0.75' :
        return number+'¾';
        break;
      case '0.33' :
        return number+'⅓';
        break;
      case '0.67' :
        return number+'⅔';
        break;
      default :
        return number+'?';
      }
  }
  render(){
    let fontSize = this.props.fontSize;
    let baseFontSize = this.props.baseFontSize;
    let baseLine = this.props.baseLine;
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
        verticalAlign: (Math.ceil((lineHeight/baseLine)/2)*baseLine) * -1,
        height: baseLine,
      },
      tag :{
        position: 'absolute',
        top: -15,
        left: 0,
        height: 15,
        lineHeight: 15+'px',
        fontSize: 14,
        background: 'rgba(255,255,255,0.5)',
        color: 'red',
        fontFamily:'monospace',
        display: specs ? 'inline-block' : 'none'
      }
    }
    return(
      <div style={style.container}>
        <span style={style.tag}>
          <b>{this.props.name}</b> / {(fontSize/baseFontSize).toFixed(2)}em ({fontSize}px)
          / {this.Fraction(lineHeight,baseLine)} lines 
          ({lineHeight.toFixed(0)}Px)
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
