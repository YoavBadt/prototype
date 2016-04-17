import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import  thunk from 'redux-thunk';
import {gridState} from './gridState';
import {gridGeneral} from './gridGeneral';
import {pageState} from './pageState';
import {textStateGeneral} from './textStateGeneral';
import {blogPostState} from './blogPostState';

import {H1} from './H1';
import {H2} from './H2';

import {screenState,baseFontSize,screenSize} from './test';

const protoType = combineReducers({
  gridGeneral,
  gridState,
  pageState,
  textStateGeneral,
  blogPostState,
  H1,
  H2,
  screenState,
  screenSize,
  baseFontSize,
});

export default createStore(protoType,{},applyMiddleware(thunk),
window.devToolsExtension ? window.devToolsExtension() : undefined
  )
