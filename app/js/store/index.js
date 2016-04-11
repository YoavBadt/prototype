import { createStore, combineReducers } from 'redux';
import {gridGeneral} from './gridGeneral';
import {gridState} from './gridState';
import {pageState} from './pageState';
// import {modScaleComponent} from './modScaleComponent'

const protoType = combineReducers({
  gridGeneral,
  gridState,
  pageState,
});

export default createStore(protoType,{},
window.devToolsExtension ? window.devToolsExtension() : undefined
  )
