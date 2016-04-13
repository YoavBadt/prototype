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
