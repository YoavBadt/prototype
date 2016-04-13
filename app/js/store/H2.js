import { scaleCalculator, lineCalculator } from './lib.js';

export const H2 =(
  state={
    name: 'h2',
    baseFontSize: 22, //responsive
    modularScale: 1.285, //responsive
    fontSize:77, //responsive
    baseLineHeight: 32, //responsive
    baseLineDivisions: 1, //responsive
    lineHeight: 3, //responsive
    autoLineHeight: 96, //responsive
    marginBottom: 1,
    autoLineHeightMode: true, 
    fix: true,
    fontColor:'rgba(255,80,80,1)',
    fontFamily:'Helvetica',
    fontWeight:'Bold'
},action
)=>{
  switch (action.type) {
    case 'CHANGE_FONTSIZE':
      return{
          ...state,
          fontSize: action.payload,
        };
    case 'CHANGE_LINEHEIGHT':
      return{
          ...state,
          lineHeight: action.payload,
        };
    case 'BASE_LINE_CHANGE':
      return{
          ...state,
          baseLineHeight: action.payload,
          autoLineHeight: lineCalculator(state.baseFontSize,state.modularScale,action.payload,state.baseLineDivisions)[6]
      };
    case 'MODULAR_SCALE_CHANGE':
        return{
            ...state,
            modularScale: action.payload,
            fontSize: scaleCalculator(state.baseFontSize,action.payload)[6],
            autoLineHeight: lineCalculator(state.baseFontSize,action.payload,state.baseLineHeight,state.baseLineDivisions)[6]
        };
    case 'BASELINE_DIVISIONS_CHANGE':
        return {
            ...state,
            baseLineDivisions : action.payload,
            autoLineHeight: lineCalculator(state.baseFontSize,state.modularScale,state.baseLineHeight,action.payload)[6]
        };
    default:
      return state;
  };
}

