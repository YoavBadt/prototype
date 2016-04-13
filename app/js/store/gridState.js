import {scaleCalculator, lineCalculator, stageCalculator} from './lib.js'

const switchState = (currentState,settingTo,state) => {
    switch(currentState){
        case settingTo :
            break
        case 'state_320' :
            state_320 = state;
            break;
        case 'state_720' :
            state_720 = state;
            break;
        case 'state_1440' :
            state_1440 = state;
            break;
        case 'state_1920' :
            state_1920 = state;
            break;
    };
};

let state_320 = {
    baseFontSize: 16,
    modularScale: 1.2,
    baseLineHeight: 24,
    baseLineDivisions: 1,
    lines: lineCalculator(16,1.2,24,1),
    scale: scaleCalculator(16,1.2),
    baseUnit: 24,
    baseUnitOffset: 16,
    baseUnitDivisions: 1,
    columns: 1,
    columnWidth: 5,
    columnWidthPx: 288,
    gutterWidth: 1,
    gutterWidthPx: 24,
    stage: stageCalculator(320,1,288,24).stage,
    margin: stageCalculator(320,1,288,24).margin
};

let state_720 = {
    baseFontSize: 16,
    modularScale: 1.32,
    baseLineHeight: 24,
    baseLineDivisions: 1,
    lines: lineCalculator(16,1.32,24,1),
    scale: scaleCalculator(16,1.32),
    baseUnit: 24,
    baseUnitOffset: 0,
    baseUnitDivisions: 1,
    columns: 4,
    columnWidth: 5.75,
    columnWidthPx: 138,
    gutterWidth: 1,
    gutterWidthPx: 24,
    stage: stageCalculator(720,4,138,24).stage,
    margin: stageCalculator(720,4,138,24).margin
};

let state_1440 = {
    baseFontSize: 18,
    modularScale: 1.22,
    baseLineHeight: 26,
    baseLineDivisions: 1,
    lines: lineCalculator(18,1.22,26,1),
    scale: scaleCalculator(18,1.22),
    baseUnit: 26,
    baseUnitOffset: 5,
    baseUnitDivisions: 1,
    columns: 8,
    columnWidth: 5,
    columnWidthPx: 130,
    gutterWidth: 1,
    gutterWidthPx: 26,
    stage: stageCalculator(1440,8,130,26).stage,
    margin: stageCalculator(1440,8,130,26).margin
};

let state_1920 = {
    baseFontSize: 22,
    modularScale: 1.285,
    baseLineHeight: 32,
    baseLineDivisions: 4,
    baseUnit: 32,
    baseUnitOffset: 8,
    baseUnitDivisions: 1,
    lines: lineCalculator(22,1.285,32,1),
    scale: scaleCalculator(22,1.285),
    columns: 12,
    columnWidth: 4,
    columnWidthPx: 128,
    gutterWidth: 0.5,
    gutterWidthPx: 16,
    stage: stageCalculator(1920,12,128,16).stage,
    margin: stageCalculator(1920,12,128,16).margin
};

export const gridState = (
  state={
    fakeScreen: 1920,
    currentState: 'state_1920',
    baseFontSize: 22,
    modularScale: 1.285,
    baseLineHeight: 32,
    baseLineDivisions: 2,
    lines: lineCalculator(22,1.285,32,2),
    scale: scaleCalculator(22,1.285),
    baseUnit: 32,
    baseUnitOffset: 8,
    baseUnitDivisions: 1,
    columns: 12,
    columnWidth: 4,
    columnWidthPx: 128,
    gutterWidth: 0.5,
    gutterWidthPx: 16,
    stage: stageCalculator(1920,12,128,16).stage,
    margin: stageCalculator(1920,12,128,16).margin
  },
  action
  )=>{
  switch (action.type) {
    case 'SET_320':
        switchState(state.currentState,'SET_320',state);
        state = Object.assign({}, state_320)
        return{
            ...state,
            fakeScreen: 320,
            currentState : 'state_320',
        };
    case 'SET_720':
        switchState(state.currentState,'SET_720',state);
        state = Object.assign({}, state_720)
        return{
            ...state,
            fakeScreen: 720,
            currentState : 'state_720'
        };
    case 'SET_1440':
        switchState(state.currentState,'SET_1440',state);
        state = Object.assign({}, state_1440)
        return{
            ...state,
            fakeScreen: 1440,
            currentState : 'state_1440'
        };
    case 'SET_1920':
        switchState(state.currentState,'SET_1920',state);
        state = Object.assign({}, state_1920)
        return{
            ...state,
            fakeScreen: 1920,
            currentState : 'state_1920'
        };
    case 'BASE_FONTSIZE_CHANGE':
        return{
            ...state,
            baseFontSize : action.payload,
            scale: scaleCalculator(action.payload,state.modularScale),
            lines: lineCalculator(action.payload,state.modularScale,state.baseLineHeight,state.baseLineDivisions) 
        };
    case 'MODULAR_SCALE_CHANGE':
        return{
            ...state,
            modularScale: action.payload,
            scale: scaleCalculator(state.baseFontSize,action.payload),
            lines: lineCalculator(state.baseFontSize,action.payload,state.baseLineHeight,state.baseLineDivisions)
        };
    case 'BASE_LINE_CHANGE':
        return{
            ...state,
            baseLineHeight: action.payload,
            lines: lineCalculator(state.baseFontSize,state.modularScale,action.payload,state.baseLineDivisions),
            columnWidth : state.columnWidthPx / action.payload,
            gutterWidth : state.gutterWidthPx / action.payload
        };
    case 'BASELINE_DIVISIONS_CHANGE':
        return {
            ...state,
            baseLineDivisions : action.payload,
            lines: lineCalculator(state.baseFontSize,state.modularScale,state.baseLineHeight,action.payload)
        };
    case 'BASE_UNIT_CHANGE':
        return{
            ...state,
            baseUnit : action.payload
        };
    case 'BASE_UNIT_DIVISIONS_CHANGE':
        return{
            ...state,
            baseUnitDivisions : action.payload
        };
    case 'BASE_UNIT_OFFSET_CHANGE':
        console.log('reducer')
        return{
            ...state,
            baseUnitOffset : action.payload
        };
    case 'COLUMN_CHANGE':
      return {
        ...state,
        columns : action.payload,
        stage: stageCalculator(state.fakeScreen,action.payload,state.columnWidthPx,state.gutterWidthPx).stage,
        margin: stageCalculator(state.fakeScreen,action.payload,state.columnWidthPx,state.gutterWidthPx).margin
      };
    case 'COLUMN_WIDTH_CHANGE':
      return {
        ...state,
        columnWidthPx : action.payload,
        columnWidth : action.payload/state.baseLineHeight,
        stage: stageCalculator(state.fakeScreen,state.columns,action.payload,state.gutterWidthPx).stage,
        margin: stageCalculator(state.fakeScreen,state.columns,action.payload,state.gutterWidthPx).margin
      };
    case 'GUTTER_WIDTH_CHANGE':
      return {
        ...state,
        gutterWidthPx : action.payload,
        gutterWidth : action.payload/state.baseLineHeight,
        stage: stageCalculator(state.fakeScreen,state.columns,state.columnWidthPx,action.payload).stage,
        margin: stageCalculator(state.fakeScreen,state.columns,state.columnWidthPx,action.payload).margin
      };
    default:
      return state;
  };
};
