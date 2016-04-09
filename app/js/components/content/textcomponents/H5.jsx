import React from 'react';
import { connect } from 'react-redux';

class H5 extends React.Component {
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

    let fontSize = state.gridState.scale[2];
    let baseline = state.gridState.baseLineHeight;
    let tolerance = baseline / state.gridState.baseLineDivisions;
    let lineHeight = this.line(fontSize,baseline,tolerance);
    let style = {
      main : {
      fontSize : fontSize,
      lineHeight : lineHeight + 'px',
      background: 'rgba(255,0,0,0.05)',
      marginTop: 0,
      marginBottom: baseline,
      margin: 0,
      width:100+'%'
      },
      before : {
        content: '',
        height : lineHeight,
        display: 'inline-block',
        verticalAlign : 'baseline'
      },
      after : {
        content: '',
        display: 'inline-block',
        verticalAlign: baseline * -1,
        height: baseline,
      }
    }
    return(
      <h5 style={style.main}>
        <span style={style.before}></span>
        {this.props.text}
        <span style={style.after}></span>
      </h5>
    )
  };
};
H5.contextTypes = {
    store: React.PropTypes.object
  }
H5 = connect()(H5)

export default H5
