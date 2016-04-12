import React from 'react';
import { connect } from 'react-redux';

import ScreenSizeControl from '../gridcontrols/ScreenSizeControl.jsx'
import PageControl from './PageControl.jsx'
import Preview from './Preview.jsx';


class Menu extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let S = state.gridState;

    let style = {
      main : {
      position: 'fixed',
      width:100+'%',
      height: 40 ,
      borderBottom: '1px solid red',
      background:'rgba(255,250,250,1)'
      },
      wrapper :{
        width : 80+'%',
        margin:'0 auto',
        borderLeft: '1px solid red',
        borderRight: '1px solid red',
        height: 100+'%',
        background: 'white',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
      }
    }
    return (
      <div style={style.main}>
        <div style={style.wrapper}>
        <ScreenSizeControl />
        <PageControl />
        
        </div>
      </div>
    )
  };
};
Menu.contextTypes = {
    store: React.PropTypes.object
  }
Menu = connect()(Menu)

export default Menu
//<Preview />
