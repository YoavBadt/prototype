import React from 'react';
import Radium from 'radium'

class Switch extends React.Component {
  render() {
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
      <input className="switch"
        type="checkbox"
        checked={this.props.defaultValue}
        value={this.props.value}
        onChange={this.props.onChange}/>
    </div>
  )
  };
};
Switch = Radium(Switch)

export default Switch
