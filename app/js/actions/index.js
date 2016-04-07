
export const BaseFontSizeChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASE_FONTSIZE_CHANGE',
    payload
  };
};

export const ModularScaleChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'MODULAR_SCALE_CHANGE',
    payload
  };
};

export const BaseLineChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASELINE_CHANGE',
    payload
  };
};

export const BaseLineDivisionsChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASELINE_DIVISIONS_CHANGE',
    payload
  };
};

export const BaseUnitChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASEUNIT_CHANGE',
    payload
  };
};

export const BaseUnitDivisionChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASEUNIT_DIVISION_CHANGE',
    payload
  };
};

export const BaseUnitOffsetChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASEUNIT_OFFSET_CHANGE',
    payload
  };
};

export const columnNumberChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'COLUMN_CHANGE',
    payload
  };
};

export const columnWidthChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'COLUMN_WIDTH_CHANGE',
    payload
  };
};

export const gutterWidthChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'GUTTER_WIDTH_CHANGE',
    payload
  };
};


