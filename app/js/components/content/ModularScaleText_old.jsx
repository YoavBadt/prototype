import React from 'react';

class ModularScaleText extends React.Component {
mod : function(modularscale,baseFontSize){
    var scale = [
      Math.floor(baseFontSize * 1),
      Math.floor(baseFontSize * modularscale),
      Math.floor(baseFontSize * Math.pow(modularscale,2)),
      Math.floor(baseFontSize * Math.pow(modularscale,3)),
      Math.floor(baseFontSize * Math.pow(modularscale,4)),
      Math.floor(baseFontSize * Math.pow(modularscale,5)),
      Math.floor(baseFontSize * Math.pow(modularscale,6)),
      ];
    // console.log(scale)
    return(scale)
  },
line : function(fontsize,baseline,tolerance){
  var newbaseline = (Math.floor(fontsize/tolerance)*tolerance)+tolerance;
  // console.log(newbaseline);
  return newbaseline;
},
render : function() {
  console.log(this.props.state.modScale)
  var modularscale = this.props.state.scaleFactor;
  var basefontsize = this.props.state.baseFontSize;

  var mod = this.mod(modularscale,basefontsize);

  var baseline = this.props.state.baseLineHeight * this.props.state.baseUnit;
  var tolerance = baseline / this.props.state.baseLineHeightDivision ;

  var typo = {
    h1 : {
      fontSize : mod[6],
      lineHeight : this.line(mod[6],baseline,tolerance) + 'px',
      outline: '1px solid pink',
      margin: 0
    },
    h1before : {
      content: '',
      height : this.line(mod[6],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h1after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    h2 : {
    fontSize : mod[5],
    lineHeight : this.line(mod[5],baseline,tolerance) + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    h2before : {
      content: '',
      height : this.line(mod[5],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h2after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    h3 : {
    fontSize : mod[4],
    lineHeight : this.line(mod[4],baseline,tolerance) + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    h3before : {
      content: '',
      height : this.line(mod[4],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h3after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    h4 : {
    fontSize : mod[3],
    lineHeight : this.line(mod[3],baseline,tolerance) + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    h4before : {
      content: '',
      height : this.line(mod[3],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h4after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    h5 : {
    fontSize : mod[2],
    lineHeight : this.line(mod[2],baseline,tolerance) + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    h5before : {
      content: '',
      height : this.line(mod[2],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h5after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    h6 : {
    fontSize : mod[1],
    lineHeight : this.line(mod[1],baseline,tolerance) + 'px',
    outline: '1px solid pink',
    margin: 0
    },
    h6before : {
      content: '',
      height : this.line(mod[1],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    h6after :{
      content: '',
      display: 'inline-block',
      verticalAlign: baseline * -1,
      height: baseline,
    },
    body : {
      fontFamily: 'sans-serif',
      fontSize : mod[0],
      lineHeight : this.line(mod[0],baseline,tolerance) + 'px',
      outline: '1px solid pink',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: tolerance,
      marginTop: tolerance
    },
    bodybefore : {
      content: '',
      height : this.line(mod[0],baseline,tolerance),
      display: 'inline-block',
      verticalAlign : 'baseline'
    },
    bodyafter :{
      content: '',
      display: 'inline-block',
      verticalAlign: this.line(mod[0],baseline,tolerance) * -1,
      height: this.line(mod[0],baseline,tolerance),
    },
  }
  var layout = {
    info : {
    outline : '1px solid blue',
    fontSize : 24,
    lineHeight : this.props.state.baseLineHeight * 2 * this.props.state.baseUnit +'Px',
    top: this.props.state.baseUnit ,
    margin:0,
    right: this.props.state.baseUnit,
    position: 'absolute',
    // background: 'white'
    },
    text : {
      width: this.props.state.baseUnit * 23,
      position: 'absolute',
      left: 270
    }
  }
  return (
    <div>
    <div style={layout.text}>

    <h1 style={typo.h1}>
      <span style={typo.h1before}></span>
      I am h1 {mod[6]} / {this.line(mod[6],baseline,tolerance)} Ag not connected
      <span style={typo.h1after}></span>
    </h1>
     <h2 style={typo.h2}>
      <span style={typo.h2before}></span>
      I am h2 {mod[5]} / {this.line(mod[5],baseline,tolerance)} Ag
      <span style={typo.h2after}></span>
    </h2>
    <h3 style={typo.h3}>
      <span style={typo.h3before}></span>
      I am h3 {mod[4]} / {this.line(mod[4],baseline,tolerance)} Ag
      <span style={typo.h3after}></span>
    </h3>
    <h4 style={typo.h4}>
      <span style={typo.h4before}></span>
      I am h4 {mod[3]} / {this.line(mod[3],baseline,tolerance)} Ag
      <span style={typo.h3after}></span>
    </h4>
    <h5 style={typo.h5}>
      <span style={typo.h5before}></span>
      I am h5 {mod[2]} / {this.line(mod[2],baseline,tolerance)} Ag
      <span style={typo.h5after}></span>
    </h5>
    <h6 style={typo.h6}>
      <span style={typo.h6before}></span>
      I am h6 {mod[1]} / {this.line(mod[1],baseline,tolerance)} Ag
      <span style={typo.h6after}></span>
    </h6>
    <p style={typo.body}>
      <span style={typo.bodybefore}></span>
      I am body font size {mod[1]} / line height {this.line(mod[0],baseline,tolerance)}<br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dictum tellus, nec sagittis leo. Fusce quis leo ac ipsum auctor varius. Donec convallis, nunc nec mollis faucibus, urna arcu pretium justo, in mollis orci tortor et libero. Vivamus dignissim placerat erat, eu dictum sem laoreet eget. Phasellus convallis, mauris non commodo posuere, lorem est vestibulum lorem, congue efficitur metus est quis turpis. Maecenas leo mi, interdum at augue id, fringilla dictum enim. Nulla sit amet suscipit est. In at suscipit dolor. Etiam id mollis turpis, quis imperdiet diam. Morbi nibh nulla, posuere et consectetur vel, consectetur id mi.
      <span style={typo.bodyafter}></span></p>
    </div>
          <ul style={layout.info}>
            <li>baseUnit = {this.props.state.baseUnit}</li>
            <li>baseDivisions = {this.props.state.baseDivisions}</li>
            <li>baseOffSet ={this.props.state.baseOffSet}</li>
            <li>baseFontSize = {this.props.state.baseFontSize}</li>
            <li>baseLineHeight = {this.props.state.baseLineHeight}</li>
            <li>modularScale = {this.props.state.scaleFactor}</li>
            <li>{mod[0]}</li>
            <li>{mod[1]}</li>
            <li>{mod[2]}</li>
            <li>{mod[3]}</li>
            <li>{mod[4]}</li>
            <li>{mod[5]}</li>
            <li>{mod[6]}</li>
          </ul>
        </div>
      )
  }
});

// module.exports = Radium(TextComponent)
export default TextComponent
