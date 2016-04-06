import { combineReducers } from 'redux';

const scaleCalculator = (baseFontSize,modularScale) => {
  let scale =[];
  for(let i=0; i < 7; i++){
    if(i === 0){
      scale.push(baseFontSize);
    }else{
      scale.push(Math.round(baseFontSize*(Math.pow(modularScale,i))))
    }
  }
  return scale
};

const gridCalculator = (columnNumber,columnWidth,gutterWidth) => {
  let screen = window.innerWidth-1;
  let stage = ( (columnNumber*columnWidth)+((columnNumber-1)*gutterWidth) );
  let margin = (screen - stage) / 2;
  let grid = [0,margin];
  for(let i=0; i < columnNumber; i++){
    grid.push( columnWidth )
    grid.push( gutterWidth )
    };
  let stuff = (2* columnNumber )+2;
  for(let i=2; i< stuff; i++){
    grid[i] = grid[i] + grid[i-1];
  }
  return grid;
};



const gridStore = (
state = {
  baseFontSize: 16,
  modularScale: 1.125,
  scale: scaleCalculator(16,1.125),
  baseLineHeight: 20,
  baseLineDivisions: 2,
  baseLineShow : true,
  baseLineColor: 'skyblue',
  baseUnit: 24,
  baseUnitDivisions: 2,
  baseUnitOffset: 0,
  baseUnitShow : true,
  baseUnitColor: 'grey',
  gridPositions: gridCalculator(12,120,24),
  columnNumber: 12,
  columnWidth: 120,
  gutterWidth: 24,
  screen : 2,
  stage: 2,
  margin: 228,
},
action
) => {
  switch (action.type) {
    case 'BASEFONTSIZE_PLUS':
      return {
        ...state,
        baseFontSize : state.baseFontSize + 1,
        scale : scaleCalculator(state.baseFontSize + 1,state.modularScale)
      };
    case 'BASEFONTSIZE_MINUS':
      if(state.baseFontSize === 1){
        return state
      }else{
        return {
          ...state,
          baseFontSize : state.baseFontSize - 1,
          scale : scaleCalculator(state.baseFontSize - 1,state.modularScale)
        }
      };
    case 'MODULARSCALE_CHANGE':
      return {
        ...state,
        modularScale : action.payload,
        scale : scaleCalculator(state.baseFontSize,action.payload)
      };
    case 'BASELINE_PLUS':
      return {
        ...state,
        baseLineHeight : state.baseLineHeight + 1
      };
    case 'BASELINE_MINUS':
      return {
        ...state,
        baseLineHeight : state.baseLineHeight - 1
      };
    case 'BASELINE_DIVISIONS_PLUS':
      if(state.baseLineDivisions === 4){
        return state
      }else{
      return {
        ...state,
        baseLineDivisions : state.baseLineDivisions + 1
      }};
    case 'BASELINE_DIVISIONS_MINUS':
      if(state.baseLineDivisions === 1){
        return state
      }else{
      return {
        ...state,
        baseLineDivisions : state.baseLineDivisions - 1
      }};
    case 'BASEUNIT_PLUS':
      return {
        ...state,
        baseUnit : state.baseUnit + 1
      };
    case 'BASEUNIT_MINUS':
      return {
        ...state,
        baseUnit : state.baseUnit - 1
      };
    case 'BASEUNIT_DIVISIONS_PLUS':
      if(state.baseUnitDivisions === 4){
        return state
      }else{
      return {
        ...state,
        baseUnitDivisions : state.baseUnitDivisions + 1
      }};
    case 'BASEUNIT_DIVISIONS_MINUS':
      if(state.baseUnitDivisions === 1){
        return state
      }else{
      return {
        ...state,
        baseUnitDivisions : state.baseUnitDivisions - 1
      }};
    case 'BASEUNIT_OFFSET_PLUS':
      if(state.baseUnitOffset === state.baseUnit-1){
        return state
      }else{
      return {
        ...state,
        baseUnitOffset : state.baseUnitOffset + 1
      }};
    case 'BASEUNIT_OFFSET_MINUS':
      if(state.baseUnitOffset === 0){
        return state
      }else{
      return {
        ...state,
        baseUnitOffset : state.baseUnitOffset - 1
      }};
    case 'COLUMN_NUMBER_PLUS':
      return {
        ...state,
        columnNumber : state.columnNumber + 1,
        gridPositions : gridCalculator(state.columnNumber+1,state.columnWidth,state.gutterWidth)
      };
    case 'COLUMN_NUMBER_MINUS':
      if(state.columnNumber === 1){
        return state
      }else{
      return {
        ...state,
        columnNumber : state.columnNumber - 1,
        gridPositions : gridCalculator(state.columnNumber-1,state.columnWidth,state.gutterWidth)
      }};
    case 'COLUMN_WIDTH_PLUS':
      return {
        ...state,
        columnWidth : state.columnWidth + 1,
        gridPositions : gridCalculator(state.columnNumber,state.columnWidth+1,state.gutterWidth)
      };
    case 'COLUMN_WIDTH_MINUS':
      if(state.columnWidth === 1){
        return state
      }else{
      return {
        ...state,
        columnWidth : state.columnWidth - 1,
        gridPositions : gridCalculator(state.columnNumber,state.columnWidth-1,state.gutterWidth)
      }};
    case 'GUTTER_WIDTH_PLUS':
      return {
        ...state,
        gutterWidth : state.gutterWidth + 1,
        gridPositions : gridCalculator(state.columnNumber,state.columnWidth,state.gutterWidth+1)
      };
    case 'GUTTER_WIDTH_MINUS':
      if(state.gutterWidth === 1){
        return state
      }else{
      return {
        ...state,
        gutterWidth : state.gutterWidth - 1,
        gridPositions : gridCalculator(state.columnNumber,state.columnWidth,state.gutterWidth-1)
      }};
    default:
      return state;
  }
};

// const gridStore = combineReducers({
//   baseLineStore,
// });

export default gridStore
