import {scaleCalculator, gridPositions} from './lib';

import firebase from 'firebase'


// const stage = (columnNumber,columnWidth,gutterWidth) => {
//   let stage = ( (columnNumber*columnWidth)+((columnNumber-1)*gutterWidth) );
//   return stage
// };

// var firebaseRef = new Firebase('https://typographyprototype.firebaseio.com/state');


// firebaseRef.on("value", function(snapshot) {
//   console.log(snapshot.val())
//   return snapshot.val()
// });



const gridStore = (
  state = {
    screenFake: 1920,
    baseFontSize: 16,
    modularScale: 1.125,
    scale: scaleCalculator(16,1.125),
    baseLineHeight: 24,
    baseLineDivisions: 1,
    baseLineShow : true,
    baseLineColor: 'red',
    baseUnit: 24,
    baseUnitDivisions: 2,
    baseUnitOffset: 0,
    baseUnitVisibility: 0.5,
    baseUnitShow : true,
    baseUnitColor: 'black',
    gridPositions: gridPositions(12,120,24),
    columnNumber: 12,
    columnWidth: 120,
    columnColor: 'blue',
    gutterWidth: 24,
    screen : 1,
    stage: 1704,
    marginLeft: 108,
    marginRight: 108
  },
  action
  ) => {
  switch (action.type) {
    case 'SCREEN_FAKE_CHANGE':
      return{
        ...state,
        screenFake: action.payload
      };
    case 'BASE_FONTSIZE_CHANGE':
      return {
        ...state,
        baseFontSize : action.payload,
        scale : scaleCalculator(action.payload,state.modularScale)
      };
    case 'MODULAR_SCALE_CHANGE':
      return {
        ...state,
        modularScale : action.payload,
        scale : scaleCalculator(state.baseFontSize,action.payload)
      };
    case 'BASELINE_CHANGE':
      return {
        ...state,
        baseLineHeight : action.payload
      };
    case 'BASELINE_DIVISIONS_CHANGE':
      return {
        ...state,
        baseLineDivisions : action.payload
      };
    case 'BASEUNIT_CHANGE':
      return {
        ...state,
        baseUnit : action.payload
      };
    case 'BASEUNIT_DIVISIONS_CHANGE':
      return {
        ...state,
        baseUnitDivisions : action.payload
      };
    case 'BASEUNIT_OFFSET_CHANGE':
      return {
        ...state,
        baseUnitOffset : action.payload
      };
    case 'COLUMN_CHANGE':
      return {
        ...state,
        columnNumber : action.payload,
        stage : stage(action.payload,state.columnWidth,state.gutterWidth),
        gridPositions : gridPositions(action.payload,state.columnWidth,state.gutterWidth)
      };
    case 'COLUMN_WIDTH_CHANGE':
      return {
        ...state,
        columnWidth : action.payload,
        gridPositions : gridPositions(state.columnNumber,action.payload,state.gutterWidth)
      };
    case 'GUTTER_WIDTH_CHANGE':
      return {
        ...state,
        gutterWidth : action.payload,
        gridPositions : gridPositions(state.columnNumber,state.columnWidth,action.payload)
      };
    default:
      return state;
  }
};

export default gridStore
