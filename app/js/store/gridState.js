import {scaleCalculator} from './lib.js'

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
    modularScale: 1.3,
    scale: scaleCalculator(16,1.3),
    baseLineHeight: 24,
    baseLineDivisions: 2,
    baseUnit: 24,
    baseUnitOffset: 0,
    baseUnitDivisions: 2,
    columns: 2,
    columnWidth: 6.5,
    gutterWidth: 1
};

let state_720 = {
    baseFontSize: 16,
    modularScale: 1.2,
    scale: scaleCalculator(16,1.2),
    baseLineHeight: 24,
    baseLineDivisions: 1,
    baseUnit: 24,
    baseUnitOffset: 0,
    baseUnitDivisions: 2,
    columns: 4,
    columnWidth: 6,
    gutterWidth: 1
};

let state_1440 = {
    baseFontSize: 18,
    modularScale: 1.22,
    scale: scaleCalculator(18,1.22),
    baseLineHeight: 26,
    baseLineDivisions: 1,
    baseUnit: 26,
    baseUnitOffset: 0,
    baseUnitDivisions: 2,
    columns: 8,
    columnWidth: 6,
    gutterWidth: 1
};

let state_1920 = {
    baseFontSize: 22,
    modularScale: 1.285,
    scale: scaleCalculator(22,1.285),
    baseLineHeight: 32,
    baseLineDivisions: 1,
    baseUnit: 32,
    baseUnitOffset: 0,
    baseUnitDivisions: 2,
    columns: 12,
    columnWidth: 4,
    gutterWidth: 1
};

export const gridState = (
  state={
    fakeScreen: 1920,
    currentState: 'state_1920',
    baseFontSize: 22,
    modularScale: 1.285,
    scale: scaleCalculator(22,1.285),
    baseLineHeight: 32,
    baseLineDivisions: 2,
    baseUnit: 32,
    baseUnitOffset: 0,
    baseUnitDivisions: 2,
    columns: 12,
    columnWidth: 4,
    gutterWidth: 1
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
            scale: scaleCalculator(action.payload,state.modularScale)
        };
    case 'MODULAR_SCALE_CHANGE':
        return{
            ...state,
            modularScale: action.payload,
            scale: scaleCalculator(state.baseFontSize,action.payload)
        };
    case 'BASE_LINE_CHANGE':
        return{
            ...state,
            baseLineHeight: action.payload
        };
    case 'BASELINE_DIVISIONS_CHANGE':
        return {
            ...state,
            baseLineDivisions : action.payload
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
        return{
            ...state,
            baseUnitOffset : action.payload
        };
    case 'COLUMN_CHANGE':
      return {
        ...state,
        columns : action.payload,
      };
    case 'COLUMN_WIDTH_CHANGE':
      return {
        ...state,
        columnWidth : action.payload,
      };
    case 'GUTTER_WIDTH_CHANGE':
      return {
        ...state,
        gutterWidth : action.payload,
      };
    default:
      return state;
  };
};
