import React from 'react';
import { connect } from 'react-redux';

class Info extends React.Component {
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


    let style = {
      main : {
      position: 'absolute',
      zIndex: 1000,
      top: 20,
      right: 20,
      background: 'rgba(255,255,255,1)',
      border: '1px red solid',
      width: 220,
      height: 800,
      boxSizing: 'border-box',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      }
    }
    return (
      <div style={style.main}>
      <ul>
      
      </ul>
      </div>
    )
  };
};

Info.contextTypes = {
    store: React.PropTypes.object
  }

Info = connect()(Info)

export default Info
