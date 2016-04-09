import React from 'react';
import Radium from 'radium'

class NumInput extends React.Component {
  render() {
  let size = this.props.size
  let style = {
    wrapper:{
      width: 180,
      display: 'flex',
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
      <input
        type="number"
        defaultValue={this.props.defaultValue}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.props.onChange}
      />
    </div>
  )
  };
};
NumInput = Radium(NumInput)

export default NumInput






