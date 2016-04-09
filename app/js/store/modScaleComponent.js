export const modScaleComponent = (
  state={
    width: 200,
  },
  action
  )=>{
  switch (action.type) {
    case 'SET_MODULAR_COMPONENT_WIDTH':
      return{
        ...state,
        width : action.payload
      };
    default:
      return state;
  };
};
