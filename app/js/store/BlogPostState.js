let blog_320 = {
  width: 10,
  PositionX: 10,
  PositionY: 10
};
let blog_1920 = {
  width: 300,
  PositionX: 300,
  PositionY: 30
};

export const blogPostState = (
  state={
    width: 300,
    PositionX: 300,
    PositionY: 30
  },
  action
  )=>{
  switch (action.type) {
    case 'CHANGE_BLOG_WIDTH':
      return{
        ...state,
        width: action.payload
      };
    case 'CHANGE_BLOG_X':
      return{
        ...state,
        PositionX: action.payload
      };
    default:
      return state;
  };
};
