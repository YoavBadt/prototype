import { createStore, combineReducers } from 'redux';

import gridStore from './gridStore';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
          completed: !state.completed
      };
    default: 
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
  ) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const baseUnit = (
  state = 120,
  action
) => {
  switch (action.type) {
    case 'BASE_UNIT_INCREMENT':
      return state = state + 2 ;
    case 'BASE_UNIT_DECREMENT':
      return state = state - 2 ;
    default:
      return state;
  }
};

const baseUnitDivisions = (
  state = 1,
  action
  ) => {
    switch (action.type) {
      case 'BASE_UNIT_DIVISIONS_INCREMENT':
        if( state === 4){
        return state;
      }else{
        return state = state + 1 ;
      }
      case 'BASE_UNIT_DIVISIONS_DECREMENT':
        if( state === 1){
        return state;
      }else{
        return state = state - 1 ;
      }
      default:
        return state;
    }
};

const baseUnitOffset = (
  state = 0,
  action
  ) => {
    switch (action.type) {
      case 'BASE_UNIT_OFFSET_INCREMENT':
        if( state === 20){
        return state;
      }else{
        return state = state + 1 ;
      }
      case 'BASE_UNIT_OFFSET_DECREMENT':
        if( state === 0){
        return state;
      }else{
        return state = state - 1 ;
      }
      default:
        return state;
    }
};

const baseLineHeight = (
  state = 20,
  action
) => {
  switch (action.type) {
    case 'BASE_LINE_INCREMENT':
      return state = state + 2 ;
    case 'BASE_LINE_DECREMENT':
      return state = state - 2 ;
    default:
      return state;
  }
};
const baseLineHeightDivisions = (
  state = 1,
  action
) => {
  switch (action.type) {
    case 'BASE_LINE_DIVISIONS_INCREMENT':
      return state = state + 1 ;
    case 'BASE_LINE_DIVISIONS_DECREMENT':
      return state = state - 1 ;
    default:
      return state;
  }
};

const baseFontSize = (
  state = 16,
  action
) => {
  switch (action.type) {
    case 'BASE_FONT_SIZE_INCREMENT':
      return state = state + 1 ;
    case 'BASE_FONT_SIZE_DECREMENT':
      return state = state - 1 ;
    default:
      return state;
  }
};

const modularScale = (
  state = 1.125,
  action
) => {
  switch (action.type) {
    case 'MODULAR_SCALE_INCREASE':
      return state = state+0.001;
    case 'MODULAR_SCALE_DECREASE':
      return state = state-0.001;
    default:
      return state;
  }
};

const columnGridNumber = (
  state = 6,
  action
) => {
  switch (action.type) {
    case 'COLUMN_NUMBER_INCREASE':
      return state = state+1;
    case 'COLUMN_NUMBER_DECREASE':
      return state = state-1;
    default:
      return state;
  };
};

const columnWidth = (
  state = 1.5,
  action
) => {
  switch (action.type) {
    case 'COLUMN_WIDTH_INCREASE':
      return state = state+0.5;
    case 'COLUMN_WIDTH_DECREASE':
      return state = state-0.5;
    default:
      return state;
  };
};

const gutterWidth = (
  state = 1,
  action
) => {
  switch (action.type) {
    case 'GUTTER_WIDTH_INCREASE':
      return state = state+1;
    case 'GUTTER_WIDTH_DECREASE':
      return state = state-1;
    default:
      return state;
  };
};

const cardWidth = (
  state = 26,
  action
) => {
  switch (action.type) {
    case 'CARD_WIDTH_INCREASE':
      return state = state+0.5;
    case 'CARD_WIDTH_DECREASE':
      return state = state-0.5;
    default:
      return state;
  };
};
const cardHeight = (
  state = 24.5,
  action
) => {
  switch (action.type) {
    case 'CARD_HEIGHT_INCREASE':
      return state = state+0.5;
    case 'CARD_HEIGHT_DECREASE':
      return state = state-0.5;
    default:
      return state;
  };
};

const cardX = (
  state = 24.5,
  action
) => {
  switch (action.type) {
    case 'CARD_HEIGHT_INCREASE':
      return state = state+0.5;
    case 'CARD_HEIGHT_DECREASE':
      return state = state-0.5;
    default:
      return state;
  };
};
const cardY = (
  state = 8,
  action
) => {
  switch (action.type) {
    case 'CARD_HEIGHT_INCREASE':
      return state = state+0.5;
    case 'CARD_HEIGHT_DECREASE':
      return state = state-0.5;
    default:
      return state;
  };
};




const protoType = combineReducers({
  gridStore,
  todos,
  visibilityFilter,
  columnGridNumber,
  columnWidth,
  gutterWidth,
  cardWidth,
  cardHeight,
  cardX,
  cardY

});

export default createStore(protoType)
