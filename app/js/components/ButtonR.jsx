import React from 'react';

import Radium from 'radium';

class ButtonR extends React.Component {
  constructor(){
    super();
    this.Check = this.Check.bind(this);
  }
  Check(check,value){
    if(check===value){
      return true
    }else{
      return false
    }
  }
  render(){
    let style = {
      button:{
        margin:0,
        border:'none',
        width: this.props.width,
        height: 100+'%',
        color: 'red',
        fontFamily: 'monospace'
      },
      active:{
        background: 'rgba(255,230,230,1)'
      },
      nonactive:{
        background: 'white'
      }
    }
    return(
      <button
          style={[style.button, this.Check(this.props.check,this.props.value) ? style.active : style.nonactive]}
          value={this.props.value}
          onClick={this.props.onClick}
        >{this.props.text}
      </button>
      )
  };
};
ButtonR = Radium(ButtonR);

export default ButtonR
