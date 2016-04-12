import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

import ModScalePage from './ModScalePage.jsx';
import BlogPost from './BlogPost.jsx';
import HomePage from './HomePage.jsx';


class Content extends React.Component {
  constructor(){
    super();
    this.checker = this.checker.bind(this);
  }
  checker(A,P) {
   if(A === P){
    return true;
   }else{
    return false;
   }
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
    let P = state.pageState.currentPage;
    let style = {
      footer:{
        height: state.gridState.baseLineHeight * 10,
        outline: '1px solid red'
      }
    }
    return (
      <div>
      <div style={"Modular_Scale"===P ? {display:''} : {display:'none'}}><ModScalePage /></div>
      <div style={"Home_Page"===P ? {display:''} : {display:'none'}}><HomePage /></div>
      <div style={"Blog_Post"===P ? {display:''} : {display:'none'}}><BlogPost /></div>
      <div style={style.footer}>footer</div>
      </div>
    )
  };
};
Content.contextTypes = {
    store: React.PropTypes.object
  };
Content = Radium(Content);
Content = connect()(Content);

export default Content
