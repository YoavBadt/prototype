import { createStore, combineReducers } from 'redux';
import {gridGeneral} from './gridGeneral';
import {gridState} from './gridState';
import {pageState} from './pageState';
import {textStateGeneral} from './textStateGeneral';
import {blogPostState} from './blogPostState';

const protoType = combineReducers({
  gridGeneral,
  gridState,
  pageState,
  textStateGeneral,
  blogPostState
});

export default createStore(protoType,{},
window.devToolsExtension ? window.devToolsExtension() : undefined
  )
