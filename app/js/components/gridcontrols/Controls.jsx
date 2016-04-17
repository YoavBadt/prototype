import React from 'react';

import ScreenSizeControl from './ScreenSizeControl.jsx'
import BaseUnitControl from './BaseUnitControl.jsx';
import BaseLineControl from './BaseLineControl.jsx';
import BaseFontSizeControl from './BaseFontSizeControl.jsx';
import ModularScaleControl from './ModularScaleControl.jsx';
import ColumnGridControl from './ColumnGridControl.jsx'

class Controls extends React.Component {
  render() {
    let style = {
      main : {
      position: 'fixed',
      zIndex: 1000,
      top: 80,
      left: 40,
      bottom: 40,
      width: 220,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent : 'space-between'
    },
      header :{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        background: 'white',
        color: 'red',
        height: 39,
        paddingLeft:20,
        lineHeight:40+'px',
        border : '1px solid red',
        boxSizing: 'border-box',
      },
      content: {
        flexGrow: 2,
        background: 'white',
        borderLeft: '1px red solid',
        borderRight: '1px red solid',
        overflow: 'auto'
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
      },
      footer : {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        border: '1px solid red',
        background: 'white',
        color: 'red',
        height: 39,
        paddingLeft:20,
        lineHeight:40+'px',
        boxSizing: 'border-box',
      }
    }
    return (
      <div style={style.main}>
        <div style={style.header}>
          <h4 style={{margin:0}}>Grid Settings</h4>
        </div>
          <div style ={style.content}>
            <div style={style.section}>
              <BaseFontSizeControl/>
            </div>
            <div style={style.section}>
              <ModularScaleControl/>
            </div>
            <div style={style.section}>
              <BaseLineControl/>
            </div>
            <div style={style.section}>
              <ColumnGridControl/>
            </div>
            <div style={style.section}>
              <BaseUnitControl/>
            </div>
          </div>
        <div style ={style.footer}></div>
      </div>
    )
  };
};

export default Controls
