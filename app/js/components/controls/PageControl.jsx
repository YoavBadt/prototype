import React from 'react';
import { connect } from 'react-redux';

import ButtonR from '../ButtonR.jsx'
import {changePage} from '../../actions/pageStateActions.js'

class PageControl extends React.Component {
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
    let b_width = 200;
    let style = {
      main:{
        boxSizing: 'border-box',
        borderRight: '1px solid red',
        borderLeft: '1px solid red',
        background: 'red'
      },
      section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 40,
      },
      vr:{
        margin:0,
        padding:0,
        border: 0,
        width:1,
        height: 40,
        background: 'red',
      }
    }
    return(
      <div style={style.main}>
        <div style={style.section}>
        <ButtonR 
          value='Modular_Scale'
          onClick={(e) => store.dispatch(changePage(e.target.value))}
          text="Mod Scale"
          check={P.currentPage}
          width={b_width}
        />
        <hr style={style.vr}/>
        <ButtonR 
          value='Blog_Post'
          onClick={(e) => store.dispatch(changePage(e.target.value))}
          text="Blog Post"
          check={P.currentPage}
          width={b_width}
        />
        <hr style={style.vr}/>
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
  }
};


PageControl.contextTypes = {
    store: React.PropTypes.object
  };
PageControl = connect()(PageControl);

export default PageControl
