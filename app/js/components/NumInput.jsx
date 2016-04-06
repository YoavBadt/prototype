import React from 'react';
import Radium from 'radium'

class NumInput extends React.Component {
  render() {
  let size = this.props.size
  let style = {
    main : {
      border: '1px solid red',
      background: 'white',
      borderRadius: 4,
      width: 45,
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
      width: 45,
      fontFamily:'monospace',
      color: 'red',
      fontSize: 15,
      lineHeight: 28+'px',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding:0,
      margin:0,
    },
    buttoncontainer : {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      background: 'red',
      width: 15,
      height: 28,
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      padding:0,
      margin:0,
    },
    button1 : {
      background: 'rgba(255,255,255,0.9)',
      fontFamily:'monospace',
      border: 'none',
      color : 'red',
      width: 14,
      height: 13.5,
      boxSizing: 'border-box',
      padding:0,
      marginLeft: 1,
      borderTopRightRadius: 4,
    },
    button2 : {
      background: 'rgba(255,255,255,0.9)',
      fontFamily:'monospace',
      lineHeight: 12+'px',
      border: 'none',
      color : 'red',
      width: 14,
      height: 13.5,
      boxSizing: 'border-box',
      padding:0,
      marginLeft: 1,
      borderBottomRightRadius: 4,
    },
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
      <div style={style.main}>
      <span style={style.label}>{this.props.label}</span>
        <div style={style.buttoncontainer}>
          <button onClick={this.props.plus} style={style.button1}>+</button>
          <button onClick={this.props.minus} style={style.button2}>-</button>
        </div>
      </div>
    </div>
  )
  };
};
NumInput = Radium(NumInput)

export default NumInput






