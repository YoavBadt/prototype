export const pageState = (
  state={
    currentPage: 'Blog_Post',
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
