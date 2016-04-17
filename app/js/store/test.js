import {scaleCalculator, lineCalculator, stageCalculator} from './lib.js';
import _ from 'lodash';

export const screenState = (
  state= 3,
  action
  )=>{
  switch (action.type) {
    case'CHANGE_SCREEN_STATE':
      return action.payload
    default:
      return state;
  };
}
export const screenSize = (
  state=[320,720,1440,1920],
  action
  )=>{
  switch (action.type) {
    case 'CHANGE_SCREEN_SIZE':
      return action.payload
    default:
      return state;
  };
};

export const baseFontSize = (
  state= [16,16,18,22],
  action
  )=>{
  switch(action.type) {
    case 'CHANGE_BASE_FONT_SIZE':
    return [...state.slice(0,action.index),
            action.payload,
            ...state.slice(action.index+1)];
    default:
      return state;
  };
}

export const baseLineHeight = (
  state= [24,24,26,32],
  action
  )=>{
  switch(action.type) {
    case 'CHANGE_BASE_LINE_HEIGHT':
    return [...state.slice(0,action.index),
            action.payload,
            ...state.slice(action.index+1)];
    default:
      return state;
  };
}

export const modularScale = (
  state= [1.2,1.32,1.22,1.285],
  action
  )=>{
  switch(action.type) {
    case 'CHANGE_MODULAR_SCALE':
    return [...state.slice(0,action.index),
            action.payload,
            ...state.slice(action.index+1)];
    default:
      return state;
  };
}

export const TextBoxH1 = (
  state={
    id: 'h1',
    fontSize: [99,59,85,48],
    lineHeight : [72,96,78,128],
    autoLineHeight : [72,96,78,128],
    autoLineHeightMode : true,
    autoFontSizeMode: true
  },
  action
  )=>{
  switch(action.id){
    case 'h1' :
      switch(action.type) {
        case 'CHANGE_LINE_HEIGHT':
          return {
            ...state,
            lineHeight : [...state.lineHeight.slice(0,action.index),action.payload,...state.lineHeight.slice(action.index+1)]
          };
        default:
      return state;
  }
  default:
    return state;
  }
};

const test = (
  state={
    currentState : 3,
    fakeScreen: [320,720,1440,1920],
    baseFontSize: [16,16,18,32],
    modularScale: [1.2,1.32,1.22,1.285],
    scale: [scaleCalculator(16,1.32),
            scaleCalculator(16,1.32),
            scaleCalculator(16,1.32),
            scaleCalculator(16,1.32)],
    baseLineHeight: [24,24,26,32],
    baseLineDivisions: [1,1,1,1]
  },
  action
  )=>{
  let i = state.currentState
  switch (action.type) {
    case'CHANGE_STATE':
      return{
        ...state,
        currentState: action.payload
      }
    default:
      return state;
  };
};


