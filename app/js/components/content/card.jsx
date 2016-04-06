import React from 'react';

import { connect } from 'react-redux';

class Card extends React.Component {
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

    let unit = state.baseUnit
    let baseline = state.baseLineHeight
    let fontsize = state.baseFontSize

    

    let ColWidth = state.columnWidth * unit;
    let GutWidth = state.gutterWidth * unit;

    let ColNum = state.columnGridNumber;
    let Stage = (ColNum * ColWidth) + ((ColNum * GutWidth)-GutWidth);
    var position = ((window.innerWidth + 1) - Stage) / 2

    let X = position+(3*(ColWidth+GutWidth))
    let Y = baseline * 5

    let width = (ColWidth+GutWidth)*6-GutWidth
    let height = state.cardHeight * unit

    let style = {
      main:{
        left: state.gridStore.gridPositions[1],
        top: Y,
        width: state.gridStore.gridPositions[5],
        height: 600,
        position: 'absolute',
        background: 'rgba(255,0,0,0.2)',
        borderRadius: 4,
        border: '0px solid grey',
        // boxShadow: '0px 0px 2px rgba(0,0,0,1)',
        boxSizing: 'border-box',
        padding: baseline,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      img:{
        minWidth: width - baseline*2,
        maxHeight: 10 * baseline,
        objectFit: 'cover',
        marginBottom: baseline
      },
      button:{
        background: 'black',
        border: 'none',
        color: 'white',
        width: baseline * 9,
        height: baseline * 2,
      },
      subtitle:{
        fontStyle: 'italic',
        fontSize: state.baseFontSize,
        lineHeight: baseline + 'px',
        outline: '0px solid pink',
        marginTop: baseline,
        marginBottom: baseline*-1,
      },
      subbefore : {
        content: '',
        height : baseline + 'px',
        display: 'inline-block',
        verticalAlign : 'baseline'
      },
      subafter :{
        content: '',
        display: 'inline-block',
        verticalAlign: baseline * -1,
        height: baseline,
      },
      title:{
        fontSize: state.baseFontSize*(Math.pow(state.modularScale,5)),
        lineHeight: baseline*2 + 'px',
        height: baseline*2,
        marginTop: 0,
        marginBottom: 0,
        outline: '0px solid pink',
      },
      titlebefore : {
        content: '',
        height : baseline*2 + 'px',
        display: 'inline-block',
        verticalAlign : 'baseline'
      },
      titleafter :{
        content: '',
        display: 'inline-block',
        verticalAlign: baseline * -1,
        height: baseline,
      },
      p:{
        fontSize: state.baseFontSize,
        lineHeight: baseline + 'px',
        outline: '0px solid red',
        marginTop:baseline,
        marginBottom:baseline
      },
      pbefore:{
        content: '',
        height : baseline + 'px',
        display: 'inline-block',
        verticalAlign : 'baseline'
      },
      pafter:{
        content: '',
        display: 'inline-block',
        verticalAlign: baseline * -1,
        height: baseline,
      },
    }
    return (
      <div style={style.main}>
        <img style={style.img} src="http://40.media.tumblr.com/00317ab6148740f31961887c92e4f0c1/tumblr_o2yih2FRtK1rb44xko4_1280.jpg" />
        <p style={style.subtitle}>
          <span style={style.subbefore}></span>
          Item SubTitle
          <span style={style.subafter}></span>
        </p>
        <h2 style={style.title}>
          <span style={style.titlebefore}></span>
          ITEM TITLE
          <span style={style.titleafter}></span>
        </h2>
        <p style={style.p}>
        <span style={style.pbefore}></span>
          Use this space to write a brief description of what this team member does. You can nclude relevant degrees. I added some text here. Use this space to write a brief description of what this team member does.
        <span style={style.pafter}></span>
        </p>
        <button style={style.button}>Read More</button>
      </div>
    )
  };
};

Card.contextTypes = {
    store: React.PropTypes.object
  }

Card = connect()(Card)

export default Card
