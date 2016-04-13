export const pageState = (
  state={
    currentPage: 'Modular_Scale',
  },
  action
  )=>{
  switch (action.type) {
    case 'CHANGE_PAGE':
      return{
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  };
};
