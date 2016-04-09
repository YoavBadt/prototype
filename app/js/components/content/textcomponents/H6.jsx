import React from 'react';
import { connect } from 'react-redux';

class H6 extends React.Component {
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

    let S = state.gridState;
    let baseline = S.baseLineHeight;
    
    let style = {
      main : {
      fontSize : S.scale[1],
      lineHeight : S.lines[1] + 'px',
      background: 'rgba(255,0,0,0.05)',
      marginTop: 0,
      marginBottom: baseline,
      margin: 0,
      width:100+'%'
      },
      before : {
        content: '',
        height : S.lines[1],
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
