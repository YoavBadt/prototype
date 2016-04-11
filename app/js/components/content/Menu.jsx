import React from 'react';
import { connect } from 'react-redux';

import ButtonR from '../ButtonR.jsx';
import {changePage} from '../../actions/pageStateActions.js'

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
    let P = state.pageState;

    let style = {
      main : {
      width:100+'%',
      height: 30 ,
      borderBottom: '1px solid red',
      background:'rgba(255,250,250,1)'
      },
      wrapper :{
        width : 960,
        borderLeft: '1px solid red',
        borderRight: '1px solid red',
        margin: '0 auto',
        height: 100+'%',
        background: 'white'
      }
    }
    let b_width=33.33+'%';
    return (
      <div style={style.main}>
        <div style={style.wrapper}>
      <ButtonR 
          value='Modular_Scale'
          onClick={(e) => store.dispatch(changePage(e.target.value))}
          text="Mod Scale"
          check={P.currentPage}
          width={b_width}
        />
        <ButtonR 
          value='Blog_Post'
          onClick={(e) => store.dispatch(changePage(e.target.value))}
          text="Blog Post"
          check={P.currentPage}
          width={b_width}
        />
        <ButtonR 
          value='Home_Page'
          onClick={(e) => store.dispatch(changePage(e.target.value))}
          text="Home Page"
          check={P.currentPage}
          width={b_width}
        />
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

