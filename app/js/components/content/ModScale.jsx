import React from 'react';
import { connect } from 'react-redux';

import H1 from './textcomponents/H1.jsx'
import H2 from './textcomponents/H2.jsx'
import H3 from './textcomponents/H3.jsx'
import H4 from './textcomponents/H4.jsx'
import H5 from './textcomponents/H5.jsx'
import H6 from './textcomponents/H6.jsx'
import P from './textcomponents/P.jsx'


class ModScale extends React.Component {
    constructor(){
    super();
    this.setWidth = this.setWidth.bind(this);
  }
  setWidth(){
    const { store } = this.context;
    const state = store.getState();
    let screenState = state.gridState.fakeScreen
    let width = 1;
    switch(screenState){
      case 1920:
        return width = 930;
        break;
      case 1440:
        return width = 700;
        break;
      case 720:
        return width = 500;
        break;
      case 320:
        return width = 280;
        break;
    };
    console.log(width);
    return width;
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
    this.setWidth()
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    let style = {
      main : {
      width: this.setWidth(),
      color: 'rgba(80,80,80,1)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'Column'
      }
    }
    return (
      <div style={style.main}>
        <H1 text="I am h1"/>
        <H2 text="I am h2"/>
        <H3 text="I am h3"/>
        <H4 text="I am h4"/>
        <H5 text="I am h5"/>
        <H6 text="I am h6"/>
        <P 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi.
        "/>
      </div>
    )
  };
};
ModScale.contextTypes = {
    store: React.PropTypes.object
  }
ModScale = connect()(ModScale)

export default ModScale
