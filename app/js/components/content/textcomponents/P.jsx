import React from 'react';
import { connect } from 'react-redux';

class P extends React.Component {
  constructor(){
    super();
    this.line = this.line.bind(this);
  }
  line(fontsize,baseline,tolerance){
  var lineHeight2 = (Math.floor(fontsize/tolerance)*tolerance)+tolerance;
  return lineHeight2;
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

    let fontSize = state.gridState.scale[0];
    let lineHeight = state.gridState.lines[0];
    let baseline = state.gridState.baseLineHeight;
    
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
        content: '',
        display: 'inline-block',
        verticalAlign: baseline * -1,
        height: baseline,
      }
    }
    return(
      <p style={style.main}>
        <span style={style.before}></span>
        {this.props.text}
        <span style={style.after}></span>
      </p>
    )
  };
};
P.contextTypes = {
    store: React.PropTypes.object
  }
P = connect()(P)

export default P
