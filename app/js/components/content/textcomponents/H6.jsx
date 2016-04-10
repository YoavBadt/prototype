import React from 'react';
import { connect } from 'react-redux';

class H6 extends React.Component {
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
    
    let fontSize = S.scale[1];
    let baseline = state.gridState.baseLineHeight;
    let lineHeight = S.lines[1];
    
    let style = {
      main : {
      fontSize : fontSize,
      lineHeight : lineHeight + 'px',
      background: 'rgba(255,0,0,0.05)',
      margin: 0,
      width:100+'%'
      },
      before : {
        height : lineHeight,
        display: 'inline-block',
        verticalAlign : 'baseline',
        width: 10,
        borderTop: '1px solid red',
        borderLeft: '1px solid red',
        borderBottom: '1px solid red',
        marginRight:-10,
        boxSizing: 'border-box'
      },
      after : {
        content: '',
        display: 'inline-block',
        verticalAlign:  (Math.ceil((lineHeight/baseline)/2)*baseline) * -1,
        height: baseline,
      }
    }
    return(
      <h6 style={style.main}>
        <span style={style.before}></span>
        {this.props.text}
        <span style={style.after}></span>
      </h6>
    )
  };
};
H6.contextTypes = {
    store: React.PropTypes.object
  }
H6 = connect()(H6)

export default H6
