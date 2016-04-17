import React from 'react';

class SpecBox extends React.Component {
  constructor(){
    super();
    this.Fraction = this.Fraction.bind(this);
  }
  Fraction(number1,number2){
    let fraction = (((number1/number2).toFixed(2))%1).toFixed(2);
    let number = (number1/number2).toFixed(0);
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
      };
  };
  render(){
    let name = this.props.name
    let fontSize = this.props.fontSize;
    let baseFontSize = this.props.baseFontSize;
    let baseLine = this.props.baseLine;
    let lineHeight = this.props.lineHeight;
    let specs = this.props.specs;
    
    let style = {
        specs :{
          position: 'absolute',
          top: -baseLine,
          left: 0,
          height: 15,
          lineHeight: baseLine+'px',
          fontSize: 12,
          background: 'rgba(255,255,255,0.5)',
          color: 'red',
          fontFamily:'monospace',
          display: specs ? 'inline-block' : 'none',
          wordWrap: 'break-word'
        },
        lineMark : {
          position: 'absolute',
          top: 0,
          left: 0,
          width: 10,
          height: lineHeight,
          borderTop: specs ? '1px solid red' : 'none',
          borderLeft: specs ? '1px solid red' : 'none',
          borderBottom: specs ? '1px solid red' : 'none',
          boxSizing: 'border-box',
          display: specs ? 'inline-block' : 'none'
        }
      }
    return(
      <div>
      <span style={style.specs}>
        <b>{name}</b> / {this.Fraction(fontSize,baseFontSize)}em ({fontSize}px)
        / {this.Fraction(lineHeight,baseLine)} lines 
        ({lineHeight.toFixed(0)}Px)
      </span>
      <div style={style.lineMark}></div>
      </div>
    )
  };
};
export default SpecBox
