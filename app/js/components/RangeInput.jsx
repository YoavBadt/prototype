import React from 'react';
import Radium from 'radium'

class RangeInput extends React.Component {
  render() {
  let size = this.props.size
  let style = {
    main : {
      height: 30,
      padding:0,
      margin:0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'pink',
      boxSizing: 'border-box'
    },
    label : {
      height: 30,
      fontFamily:'monospace',
      color: 'red',
      fontSize: 15,
      lineHeight: 30+'px',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding:0,
      margin:0,
    },
    wrapper:{
      width: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      outline: 'solid 0px grey',
      marginBottom: 10
    },
    name:{
      lineHeight: 30+'px',
    }
  }
  return  (
    <div style={style.wrapper}>
      <span style={style.name}>{this.props.name}</span>
      <div style={style.main}>
        <input
          type="range"
          defaultvalue={this.props.defaultvalue}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step} 
          onChange={this.props.onChange}
        />
        <span style={style.label}>{this.props.label}</span>
      </div>
    </div>
  )
  };
};
RangeInput = Radium(RangeInput)

export default RangeInput






