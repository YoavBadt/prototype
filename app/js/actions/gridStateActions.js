export const set320 = () => {
  return {
    type: 'SET_320'
  };
};

export const set720 = () => {
  return {
    type: 'SET_720'
  };
};

export const set1440 = () => {
  return {
    type: 'SET_1440'
  };
};

export const set1920 = () => {
  console.log('set1920')
  return {
    type: 'SET_1920'
  };
};

export const BaseFontSizeChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASE_FONTSIZE_CHANGE',
    payload
  };
};

export const ModularScaleChange = (payload) => {
  payload = Number(payload)
  return{
    type: 'MODULAR_SCALE_CHANGE',
    payload
  };
};

export const BaseLineChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASE_LINE_CHANGE',
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
    type: 'BASE_UNIT_CHANGE',
    payload
  };
};
export const BaseUnitDivisionsChange = (payload) => {
  payload = Number(payload)
  return {
    type: 'BASE_UNIT_DIVISIONS_CHANGE',
    payload
  };
};
export const BaseUnitOffsetChange = (payload) => {
  console.log('action');
  payload = Number(payload)
  return {
    type: 'BASE_UNIT_OFFSET_CHANGE',
    payload
  };
};

export const columnChange = (payload) => {
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
}
