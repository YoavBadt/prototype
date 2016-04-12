export const changeFontSize = (payload) => {
  return {
    type: 'CHANGE_FONT_SIZE',
    payload
  };
};

export const changeLineHeight = (payload) => {
  return {
    type: 'CHANGE_LINE_HEIGHT',
    payload
  };
};

export const showTextSpecs = (payload) => {
  return {
    type: 'SHOW_SPECS',
    payload
  };
};

export const baseLineFix = (payload) => {
  return {
    type: 'FIX_BASELINE',
    payload
  };
};
