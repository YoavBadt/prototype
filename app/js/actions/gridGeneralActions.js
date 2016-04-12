export const BaseLineShow = (payload) => {
  return {
    type: 'BASE_LINE_SHOW',
    payload
  };
};

export const BaseUnitShow = (payload) => {
  return {
    type: 'BASE_UNIT_SHOW',
    payload
  };
};

export const ColumnShow = (payload) => {
  return {
    type: 'COLUMN_SHOW',
    payload
  };
};

export const preview = (payload) => {
  return {
    type: 'PREVIEW',
    payload
  };
};
