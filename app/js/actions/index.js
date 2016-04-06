
export const increaseBaseUnit = (value) => {
  return {
    type: 'INCREMENT',
    value
  };
};

export const decreaseBaseUnit = (value) => {
  return {
    type: 'DECREMENT',
    value
  };
};
