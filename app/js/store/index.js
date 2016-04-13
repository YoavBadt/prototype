import { createStore, combineReducers } from 'redux';
import {gridState} from './gridState';
import {gridGeneral} from './gridGeneral';
import {pageState} from './pageState';
import {textStateGeneral} from './textStateGeneral';
import {blogPostState} from './blogPostState';

import {H1} from './H1';
import {H2} from './H2';


const protoType = combineReducers({
  gridGeneral,
  gridState,
  pageState,
  textStateGeneral,
  blogPostState,
  H1,
  H2
});

export default createStore(protoType,{},
window.devToolsExtension ? window.devToolsExtension() : undefined
  )
