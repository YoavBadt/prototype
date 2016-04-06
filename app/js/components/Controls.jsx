import React from 'react';

import BaseUnitControl from './controls/BaseUnitControl.jsx';
import BaseLineHeightControl from './controls/BaseLineHeightControl.jsx';
import BaseFontSizeControl from './controls/BaseFontSizeControl.jsx';
import ModularScaleControl from './controls/ModularScaleControl.jsx';
import ColumnGridControl from './controls/ColumnGridControl.jsx'

class Controls extends React.Component {
  render() {
    let style = {
      main : {
      position: 'absolute',
      top: 20,
      left: 20,
      background: 'rgba(255,255,255,1)',
      border: '1px red solid',
      width: 220,
      height: 800,
      boxSizing: 'border-box',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      },
      title:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        background: 'white',
        color: 'red',
        height: 39,
        paddingLeft:20,
        lineHeight:40+'px',
        borderBottom: '1px solid red',
        boxSizing: 'border-box',
      },
      section : {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 9,
        color: 'red',
        boxSizing: 'border-box',
        borderBottom: '1px pink solid',
      }
    }
    return (
      <div style={style.main}>
        <div style={style.title}><h4 style={{margin:0}}>Main Settings</h4></div>
        <BaseFontSizeControl style={style.section}/>
        <ModularScaleControl style={style.section}/>
        <BaseLineHeightControl style={style.section}/>
        <BaseUnitControl style={style.section}/>
        <ColumnGridControl style={style.section}/>
      </div>
    )
  };
};

export default Controls
