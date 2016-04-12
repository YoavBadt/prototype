export const textState = (
  state={
    specs: true,
    fix: true,
    fontSize: 16,
    lineHeight: 24,
    textName: 'h1', //not working yet
    baseLineHeight: 24, //not working yet
    marginBottom: 24, //not working yet
    textColor: 'black', //not working yet
    fontFamily: 'Helvetica', //not working yet
    fontWeight: 'normal' //not working yet
  },
  action
  )=>{
 switch (action.type) {
    case 'CHANGE_FONT_SIZE':
      return{
        ...state,
        fontSize: action.payload
      };
    case 'CHANGE_LINE_HEIGHT':
      return{
        ...state,
        fontSize: action.payload
      };
    case 'SHOW_SPECS':
      return{
        ...state,
        specs: !action.payload
      };
    case 'FIX_BASELINE':
      return{
        ...state,
        fix: !action.payload
      };
    default:
      return state;
  };
};
