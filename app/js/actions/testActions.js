export const changeScreenState = (payload) => {
  return {
    type: 'CHANGE_SCREEN_STATE',
    payload
  };
};

export const changeBaseFontSize = (payload,index) => {
  return{
    type: 'CHANGE_BASE_FONT_SIZE',
    payload : payload,
    index : index
  };
};

export const changeBaseFontSize2 = (payload) =>{
  return(dispatch,getState) =>{
    const { screenState } = getState();
    const index = screenState;
    dispatch(changeBaseFontSize(payload,index))
    }
}

export const changeLineHeight1 = (payload,index,id) => {
  return{
    type: 'CHANGE_BASE_FONT_SIZE',
    payload : payload,
    index : index,
    id : id
  };
};


export const changeLineHeight2 = (payload,index,id) =>{
  return(dispatch,getState) =>{
    const { screenState } = getState();
    const index = screenState;
    dispatch(changeLineHeight1(payload,index,id))
    }
}
