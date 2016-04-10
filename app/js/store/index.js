import { createStore, combineReducers } from 'redux';
import {gridGeneral} from './gridGeneral';
import {gridState} from './gridState';
// import {modScaleComponent} from './modScaleComponent'

const protoType = combineReducers({
  gridGeneral,
  gridState,

});

export default createStore(protoType,{},
window.devToolsExtension ? window.devToolsExtension() : undefined
  )
