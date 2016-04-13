import React from 'react';

class Text extends React.Component {
  constructor(){
    super();
  }
  render(){
    let name = this.props.name
    let fontSize = this.props.fontSize;
    let baseFontSize = this.props.baseFontSize;
    let baseLine = this.props.baseLine;
    let lineHeight = this.props.lineHeight;
    let specs = this.props.specs;
    let fix =  this.props.fix;
    
    let style = {
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
      <div>
      <h style={style.main}>
          <span style={style.before}></span>
          {this.props.text}
          <span style={style.after}></span>
      </h>
      </div>
    )
  };
};
export default Text
