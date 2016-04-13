export const textStateGeneral = (
  state={
    specs: false,
    fix: true,
  },
  action
  )=>{
 switch (action.type) {
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
