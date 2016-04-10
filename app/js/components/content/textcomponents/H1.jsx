import React from 'react';
import { connect } from 'react-redux';

class H1 extends React.Component {
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

    let fontSize = S.scale[6];
    let baseline = state.gridState.baseLineHeight;
    let lineHeight = S.lines[6];

    let lineHeight2 = S.lines[6]/S.baseLineHeight;
    let style = {
      main : {
      fontSize : fontSize,
      lineHeight : lineHeight + 'px',
      background: 'rgba(255,0,0,0.05)',
      margin:0,
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
        display: 'inline-block',
        verticalAlign: (Math.ceil((lineHeight/baseline)/2)*baseline) * -1,
        height: baseline,
      }
    }
    return(
      <h1 style={style.main}>
        <span style={style.before}></span>
        {this.props.text}
        <span style={style.after}></span>
      </h1>
    )
  };
};
H1.contextTypes = {
    store: React.PropTypes.object
  }
H1 = connect()(H1)

export default H1
